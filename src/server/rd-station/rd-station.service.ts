import { AxiosError } from 'axios';

import { rdStationURL } from './api';

interface CreateDealProps {
    customerName: string;
    serviceType: string;
}

export class CreateNewTraning {
    private async verifyIfCustomerExist(customerEmail: string) {
        try {
            const { data } = await rdStationURL.get(
                `contacts?token=${process.env.RED_STATION_TOKEN}&email=${customerEmail}`,
            );

            if (data.contacts.length > 0) {
                return {
                    error: 'Já cadastrado',
                };
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error.response?.data);
            }

            return {
                error: 'Tivemos um erro, por favor, tente novamente...',
            };
        }
    }

    private async createDeal({ customerName, serviceType }: CreateDealProps) {
        const serviceTypeArray = String(serviceType).split(', ');

        const name =
            serviceTypeArray.length > 1
                ? `I9mkt - ${serviceTypeArray.length} orçamentos:\n ${customerName}`
                : `I9mkt - orçamento (${serviceTypeArray[0]}):\n ${customerName}`;

        try {
            const { data } = await rdStationURL.post(
                `deals?token=${process.env.RED_STATION_TOKEN}`,
                {
                    deal: {
                        name,
                        deal_stage_id: '6933277382d755001e956378',
                    },
                },
            );

            return {
                id: data.id as string,
            };
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error.response?.data);
            }

            return {
                message: 'Tivemos um erro, por favor, tente novamente...',
            };
        }
    }

    private async createContact({
        serviceType,
        name,
        email,
        phone,
        message,
        dealId,
    }: CreateRdSationContact) {
        try {
            const { data } = await rdStationURL.post(
                `contacts?token=${process.env.RED_STATION_TOKEN}`,
                {
                    contact: {
                        name,
                        emails: [{ email }],
                        phones: [{ phone }],
                        contact_custom_fields: [
                            {
                                custom_field_id: '69332b881bf75b00137e2677',
                                value: message ?? '',
                            },
                            {
                                custom_field_id: '693346f86f431800191d3580',
                                value: serviceType,
                            },
                        ],
                        deal_ids: [dealId],
                    },
                },
            );

            return {
                id: data.id as string,
            };
        } catch (error) {
            console.error(error);

            const er = error as AxiosError;

            const singleField =
                er?.response?.statusText === 'Unprocessable Entity'
                    ? 'Usuário já registrado, em breve, entraremos em contato'
                    : 'Tivemos um erro, por favor, tente novamente...';

            return {
                message: singleField,
            };
        }
    }

    public async register(customer: RdStationCustomerContact) {
        const customerExist = await this.verifyIfCustomerExist(customer.email);

        if (customerExist?.error) {
            return {
                error: customerExist.error,
            };
        }

        const createNewDeal = await this.createDeal({
            customerName: customer.name,
            serviceType: customer.serviceType,
        });

        if (createNewDeal.id) {
            const createNewContact = await this.createContact({
                ...customer,
                dealId: createNewDeal.id,
            });

            if (createNewContact.id) {
                return {
                    id: createNewContact.id,
                    name: customer.name,
                };
            }
        }

        return {
            error: createNewDeal.message,
        };
    }
}
