import z from 'zod';

export const CreateDealSchema = z.object({
    serviceType: z.string().nonempty('O tipo de serviço é obrigatório'),
    customerName: z.string().nonempty('O nome do cliente é obrigatório'),
    customerEmail: z.email('E-mail inválido'),
    customerPhone: z.string().nonempty('O telefone do cliente é obrigatório'),
    customerMessage: z.string().optional(),
});

export type CreateDealDTO = z.infer<typeof CreateDealSchema>;
