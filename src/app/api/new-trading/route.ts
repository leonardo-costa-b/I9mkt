import { NextResponse } from 'next/server';

import { CreateDealPipeValidation } from '@/server/rd-station/create-deal.pipe';
import { CreateDealDTO } from '@/server/rd-station/dto/create-deal';
import { CreateNewTraning } from '@/server/rd-station/rd-station.service';

export async function POST(req: Request) {
    const body = (await req.json()) as CreateDealDTO;

    try {
        new CreateDealPipeValidation(body).execute();
    } catch {
        return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const rdStationService = new CreateNewTraning();

    const data = await rdStationService.register({
        serviceType: body.serviceType,
        name: body.customerName,
        email: body.customerEmail,
        phone: body.customerPhone,
        message: body.customerMessage,
    });

    if (data?.id) {
        return NextResponse.json({ customerName: data.name }, { status: 201 });
    }

    if (data?.error) {
        return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(
        { error: 'Tivemos um erro interno, tente novamente mais tarde' },
        { status: 500 },
    );
}
