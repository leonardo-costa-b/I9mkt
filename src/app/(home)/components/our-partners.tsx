'use client';

import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { PARTNERS } from '@/constants/partners';

export function OurPartners() {
    const ref = useRef<HTMLDivElement | null>(null);

    const [partnerService, setPartnerService] = useState<typeof PARTNERS>([PARTNERS[0]]);

    function handleClick(partnerService: string) {
        const filteredPartners = PARTNERS.filter(
            (partner) => partner.service_type === partnerService,
        );
        setPartnerService([...filteredPartners]);
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

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
                                    onClick={() => handleClick(partner.service_type)}
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
                                <h3 className="pt-4 text-2xl font-bold text-white">
                                    {partner.company_name}
                                </h3>

                                <span className="block pt-2 pb-4 text-lg text-slate-400">
                                    {partner.service_type}
                                </span>

                                <p>{partner.description}</p>

                                {/* <form action="" className="mt-6 w-full rounded-lg bg-slate-900 p-6">
                                    <h4 className="pb-4 text-lg font-semibold">
                                        Formulário para contato
                                    </h4>

                                    <div className="flex items-stretch gap-4">
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            className="mb-4 w-full rounded-lg bg-slate-800 p-3"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Seu email"
                                            className="mb-4 w-full rounded-lg bg-slate-800 p-3"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <input
                                            type="phone"
                                            placeholder="Seu telefone"
                                            className="mb-4 w-full rounded-lg bg-slate-800 p-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Serviço de interesse"
                                            className="mb-4 w-full rounded-lg bg-slate-800 p-3"
                                            value={partner.service_type}
                                            readOnly
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Sua mensagem"
                                        className="mb-4 max-h-40 w-full rounded-lg bg-slate-800 p-3"
                                    ></textarea>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="rounded-lg bg-red-800 px-6 py-3 text-white transition-colors hover:bg-red-800"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form> */}
                            </div>
                        ))}
                </div>

                {/* <div className="grid grid-cols-4 gap-6">
                    {PARTNERS.map((partner) => (
                        <div
                            key={partner.company_name}
                            className="group flex h-full w-full flex-col rounded-2xl bg-slate-800 p-4 shadow transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-red-600">
                                {partner.company_name}
                            </h3>
                            <span className="inline-block pt-1 pb-2 text-sm text-gray-400">
                                {partner.service_type}
                            </span>
                            <p className="pb-2 text-gray-600">{partner.description}</p>

                            <Link
                                href="#"
                                className="mt-auto flex items-center justify-between rounded-lg bg-gray-300 p-2 text-white transition-colors group-hover:bg-red-700 max-lg:bg-red-700"
                            >
                                Saber Mais <ArrowRight />
                            </Link>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    );
}
