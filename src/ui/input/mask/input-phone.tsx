import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { IMaskInput } from 'react-imask';

interface PhoneInputProps {
    input: {
        id: string;
        register?: any;
        errors: boolean;
        className?: string;
    };
}

const phoneMask = [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }];

export function PhoneInput({ input }: PhoneInputProps) {
    const [cleanPhone, setCleanPhone] = useState('');

    const handleAccept = useCallback((_: string, mask: { unmaskedValue: string }) => {
        setCleanPhone(mask.unmaskedValue);
    }, []);

    return (
        <IMaskInput
            mask={phoneMask}
            radix="."
            value={cleanPhone}
            onAccept={handleAccept}
            placeholderChar={'_'}
            placeholder="(00) 00000-0000"
            id={input.id}
            type="tel"
            className={clsx(
                'mt-1 h-10 w-full rounded-lg border-2 px-4 text-sm text-gray-100 shadow-2xl shadow-black/10 outline-0 placeholder:text-gray-400 focus:border-sky-500 disabled:cursor-no-drop disabled:opacity-50',
                {
                    [`${input.className}`]: input.className,
                    'border-red-600': input.errors,
                    'border-slate-600': !input.errors,
                },
            )}
        />
    );
}
