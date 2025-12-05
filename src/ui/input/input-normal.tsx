import clsx, { ClassValue } from 'clsx';
import { HTMLInputTypeAttribute } from 'react';

interface InputNormalProps {
    input: {
        type: HTMLInputTypeAttribute;
        /**
         * ⚠️ Não use o tipo 'password' diretamente.
         * Use o componente <Input.Password /> para inputs de senha.
         */

        id: string;
        register: any;
        errors: boolean;
        info?: {
            title: string;
            text: string;
        };
        className?: ClassValue;
    };
}

export function InputNormal({ input }: InputNormalProps) {
    return (
        <div className="relative">
            <input
                type={input.type}
                className={clsx(
                    'mt-1 h-10 w-full rounded-lg border-2 px-4 text-sm text-gray-100 shadow-2xl shadow-black/10 outline-0 placeholder:text-gray-400 focus:border-sky-500 disabled:cursor-no-drop disabled:opacity-50',
                    {
                        [`${input.className}`]: input.className,
                        'border-red-600': input.errors,
                        'border-slate-600': !input.errors,
                    },
                )}
                id={input.id}
                {...input.register}
            />
        </div>
    );
}
