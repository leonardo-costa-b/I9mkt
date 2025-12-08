import { CreateDealDTO, CreateDealSchema } from './dto/create-deal';

export class CreateDealPipeValidation {
    constructor(private readonly customerData: CreateDealDTO) {}

    execute() {
        try {
            CreateDealSchema.parse(this.customerData);
        } catch (error) {
            console.error('CreateDealPipeValidation error:', error);
            throw error;
        }
    }
}
