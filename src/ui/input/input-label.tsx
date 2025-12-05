import clsx from 'clsx';

interface InputLabelProps {
    label: {
        for: string;
        text: string;
        srOnly?: boolean;
        classNames?: string;
    };
}

export function InputLabel({ label }: InputLabelProps) {
    return (
        <label
            htmlFor={label.for}
            className={clsx('pb-3 pl-4 text-sm text-gray-100 max-lg:pl-2', {
                'sr-only': label.srOnly,
                [label.classNames ?? '']: !!label.classNames?.length,
            })}
        >
            {label.text}
        </label>
    );
}
