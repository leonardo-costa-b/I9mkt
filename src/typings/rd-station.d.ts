type RdStationCustomerContact = {
    serviceType: string;
    name: string;
    email: string;
    phone: string;
    message?: string;
};

type CreateRdSationContact = {
    dealId: string;
} & RdStationCustomerContact;
