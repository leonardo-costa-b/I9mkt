interface InputErrorProps {
    error: {
        show: boolean;
        message?: string;
    };
}

export function InputError({ error }: InputErrorProps) {
    if (!error.show) return <></>;

    return (
        <span className="absolute left-2 inline-block pl-2 text-xs font-semibold whitespace-nowrap text-red-600 max-lg:p-0 max-lg:text-[10px]">
            {error.message}
        </span>
    );
}
