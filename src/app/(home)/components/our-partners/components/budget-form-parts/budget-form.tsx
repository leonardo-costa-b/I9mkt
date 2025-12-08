import axios, { AxiosError } from 'axios';
import { Forward, Loader, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

import { PARTNERS } from '@/constants/partners';
import { Input } from '@/ui/input';

interface BudgetFormProps {
    partnerService: typeof PARTNERS;
    handleOnFeedbackType: (type: 'SUCCESS' | 'ERROR') => void;
    handleOnErrorMessage: (message: string) => void;
    handleOnCloseModal: () => void;
}

export function BudgetForm({
    partnerService,
    handleOnFeedbackType,
    handleOnErrorMessage,
    handleOnCloseModal,
}: BudgetFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleOnSubmit(e: FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);

        const allValues = {
            serviceType: formData.get('service-type'),
            customerName: formData.get('customer-name'),
            customerLastName: formData.get('customer-lastname'),
            customerEmail: formData.get('customer-email'),
            customerPhone: formData.get('customer-phone'),
            customerMessage: formData.get('customer-message'),
        };

        const hasEmptyFields = Object.entries(allValues).some(([key, value]) => {
            if (key === 'customerMessage') {
                return false;
            }

            return !value;
        });

        if (hasEmptyFields) {
            toast.error('Por favor, preencha todos os campos do formulário.');
            return;
        }

        try {
            const { data } = await axios.post<{ customerName: string | null }>('/api/new-trading', {
                ...allValues,
                customerName: `${allValues.customerName} ${allValues.customerLastName}`,
            });

            if (data.customerName) {
                handleOnFeedbackType('SUCCESS');
            }
        } catch (error) {
            const axiosError = error as AxiosError;

            console.error('Error submitting form:', axiosError);

            handleOnFeedbackType('ERROR');

            handleOnErrorMessage(
                (axiosError.response?.data as any)?.error.includes('Já cadastrado')
                    ? 'Solicitação já registrada, em breve, entraremos em contato'
                    : 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.',
            );
        } finally {
            setIsSubmitting(false);
            target.reset();
        }
    }

    return (
        <form className="flex w-full flex-col gap-4" onSubmit={handleOnSubmit}>
            <Input.Root className="w-full">
                <Input.Label
                    label={{
                        for: 'service-type-fake',
                        text: 'Serviço / Empresa (s)',
                    }}
                />
                <Input.Select
                    selectProps={{
                        id: 'service-type',
                        placeholder: 'Selecione os serviços (s)',
                        fields: PARTNERS.map((service) => ({
                            id: `${service.service_type} - ${service.company_name}`,
                            name: `${service.service_type} - ${service.company_name}`,
                        })),
                        defaultValue: `${partnerService[0].service_type} - ${partnerService[0].company_name}`,
                        register: { name: 'service-type' },
                    }}
                />
            </Input.Root>

            <Input.Root className="w-full">
                <Input.Label
                    label={{
                        for: 'customer-name',
                        text: 'Nome',
                    }}
                />

                <Input.Normal
                    input={{
                        type: 'text',
                        id: 'customer-name',
                        register: {
                            name: 'customer-name',
                        },
                        errors: false,
                        className: 'rounded-full!',
                    }}
                />
            </Input.Root>

            <Input.Root className="w-full">
                <Input.Label
                    label={{
                        for: 'customer-lastname',
                        text: 'Sobrenome',
                    }}
                />
                <Input.Normal
                    input={{
                        type: 'text',
                        id: 'customer-lastname',
                        register: {
                            name: 'customer-lastname',
                        },
                        errors: false,
                        className: 'rounded-full!',
                    }}
                />
            </Input.Root>

            <Input.Root className="w-full">
                <Input.Label
                    label={{
                        for: 'customer-email',
                        text: 'E-mail',
                    }}
                />
                <Input.Normal
                    input={{
                        type: 'email',
                        id: 'customer-email',
                        register: {
                            name: 'customer-email',
                        },
                        errors: false,
                        className: 'rounded-full!',
                    }}
                />
            </Input.Root>

            <Input.Root className="w-full">
                <Input.Label
                    label={{
                        for: 'customer-phone',
                        text: 'Telefone',
                    }}
                />
                <Input.Phone
                    input={{
                        id: 'customer-phone',
                        register: {
                            name: 'customer-phone',
                        },
                        errors: false,
                        className: 'rounded-full!',
                    }}
                />
            </Input.Root>

            <Input.Root className="flex w-full flex-col">
                <Input.Label
                    label={{
                        for: 'customer-message',
                        text: 'Mensagem',
                    }}
                />
                <textarea
                    name="customer-message"
                    id="customer-message"
                    cols={30}
                    rows={10}
                    className="h-10 min-h-40 w-full rounded-lg border-2 border-slate-600 p-2 px-4 text-sm text-gray-100 shadow-2xl shadow-black/10 outline-0 placeholder:text-gray-400 focus:border-sky-500 disabled:cursor-no-drop disabled:bg-gray-300 disabled:opacity-50"
                ></textarea>
            </Input.Root>

            <div className="flex w-full gap-4">
                <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-500 p-2 text-gray-400 transition-all hover:border-white hover:text-white"
                    onClick={handleOnCloseModal}
                >
                    <X size={20} />
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-200 p-2 text-slate-950 transition-all hover:bg-emerald-100 disabled:cursor-no-drop disabled:opacity-50 disabled:hover:bg-emerald-200"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <Loader size={20} className="animate-spin" />
                    ) : (
                        <>
                            <Forward size={20} /> Enviar solicitação
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
