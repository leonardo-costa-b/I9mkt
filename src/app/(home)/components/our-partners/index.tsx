'use client';

import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

import { PARTNERS } from '@/constants/partners';

import { BudgetModal } from './components/budget-modal';

export function OurPartners() {
    const ref = useRef<HTMLDivElement | null>(null);

    const [partnerService, setPartnerService] = useState<typeof PARTNERS>([PARTNERS[0]]);
    const [shouldShowModal, setShouldShowModal] = useState(false);

    function handleSelectServicePartner(partnerService: string) {
        const filteredPartners = PARTNERS.filter(
            (partner) => partner.service_type === partnerService,
        );
        setPartnerService([...filteredPartners]);
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const handleOpenModal = useCallback(() => {
        setShouldShowModal(!shouldShowModal);
    }, [shouldShowModal]);

    return (
        <>
            <section ref={ref} className="mx-auto max-w-7xl py-10">
                <h2 className="pb-6 pl-4 text-2xl">Our Partners</h2>

                <div className="relative flex gap-10 rounded-3xl bg-slate-800 px-6 py-10">
                    <ul className="w-full max-w-96 border-r border-slate-700 p-4">
                        {PARTNERS.map((partner) => (
                            <li key={partner.company_name}>
                                <button
                                    type="button"
                                    className={clsx(
                                        'text-md flex w-full cursor-pointer items-center justify-between rounded-lg p-3 text-left font-medium',
                                        {
                                            'bg-slate-700': partnerService.some(
                                                (p) => p.service_type === partner.service_type,
                                            ),
                                            'text-slate-500': !partnerService.some(
                                                (p) => p.service_type === partner.service_type,
                                            ),
                                        },
                                    )}
                                    onClick={() => handleSelectServicePartner(partner.service_type)}
                                >
                                    {partner.service_type}

                                    {partnerService.some(
                                        (p) => p.service_type === partner.service_type,
                                    ) && <ArrowRight />}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {partnerService.length > 0 &&
                        partnerService.map((partner) => (
                            <div
                                key={partner.company_name}
                                className="sticky top-4 flex h-fit w-full flex-col"
                            >
                                <div className="flex items-start justify-between pt-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {partner.company_name}
                                        </h3>

                                        <span className="block pt-2 pb-4 text-lg text-slate-400">
                                            {partner.service_type}
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="cursor-pointer"
                                        onClick={handleOpenModal}
                                    >
                                        Solicite seu orçamento
                                    </button>
                                </div>

                                <p>{partner.description}</p>
                            </div>
                        ))}
                </div>

                <BudgetModal
                    partnerService={partnerService}
                    shouldShowModal={shouldShowModal}
                    onCloseModal={handleOpenModal}
                />
            </section>
        </>
    );
}
