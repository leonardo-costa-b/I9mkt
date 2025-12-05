'use client';

import clsx from 'clsx';
import { ArrowRight, Check, Forward, X } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';

import { PARTNERS } from '@/constants/partners';
import { FeedbackModal } from '@/ui/feedback-modal';
import { Input } from '@/ui/input';

export function OurPartners() {
    const ref = useRef<HTMLDivElement | null>(null);

    const [partnerService, setPartnerService] = useState<typeof PARTNERS>([PARTNERS[0]]);
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const [feedbackType, setFeedbackType] = useState<'SUCCESS' | 'ERROR' | null>(null);

    function handleSelectServicePartner(partnerService: string) {
        const filteredPartners = PARTNERS.filter(
            (partner) => partner.service_type === partnerService,
        );
        setPartnerService([...filteredPartners]);
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleToggleModal() {
        setShouldShowModal(!shouldShowModal);
        setFeedbackType(null);
    }

    function handleOnSubmit(e: FormEvent) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        console.log(Object.fromEntries(formData.entries()));

        setFeedbackType('SUCCESS');
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
                                        onClick={handleToggleModal}
                                    >
                                        Solicite seu orçamento
                                    </button>
                                </div>

                                <p>{partner.description}</p>
                            </div>
                        ))}
                </div>

                <FeedbackModal.Root isOpen={shouldShowModal}>
                    <FeedbackModal.Title
                        title={
                            feedbackType === 'SUCCESS'
                                ? 'Solicitação enviada com sucesso!'
                                : 'Formulário de orçamento'
                        }
                    />
                    <FeedbackModal.Content>
                        {feedbackType === 'SUCCESS' ? (
                            <div className="flex flex-col items-center justify-center gap-4 pt-4">
                                <div className="rounded-full bg-emerald-300 p-4">
                                    <Check size={48} className="text-emerald-800" />
                                </div>

                                <p className="text-center">
                                    Obrigado por entrar em contato! Em breve, um de nossos
                                    representantes entrará em contato com você.
                                </p>

                                <FeedbackModal.Close onClose={handleToggleModal} />
                            </div>
                        ) : (
                            <form className="flex w-full flex-col gap-4" onSubmit={handleOnSubmit}>
                                <Input.Root className="w-full">
                                    <Input.Label
                                        label={{
                                            for: 'customer-company',
                                            text: 'Serviço / Empresa',
                                        }}
                                    />
                                    <Input.Normal
                                        input={{
                                            type: 'text',
                                            id: 'customer-company',
                                            register: {
                                                'sr-only': 'true',
                                                value: `${partnerService[0].service_type} - ${partnerService[0].company_name}`,
                                                disabled: true,
                                            },
                                            errors: false,
                                            className: 'rounded-full!',
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
                                            register: {},
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
                                            register: {},
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
                                            register: {},
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
                                            register: {},
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
                                        onClick={handleToggleModal}
                                    >
                                        <X size={20} />
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-200 p-2 text-slate-950 transition-all hover:bg-emerald-100"
                                    >
                                        <Forward size={20} /> Enviar solicitação
                                    </button>
                                </div>
                            </form>
                        )}
                    </FeedbackModal.Content>
                </FeedbackModal.Root>
            </section>
        </>
    );
}
