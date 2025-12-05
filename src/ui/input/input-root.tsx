import { ReactNode } from 'react';

interface InputRootProps {
    children: ReactNode;
    className?: string;
}

export function InputRoot({ children, className }: InputRootProps) {
    return <div className={`relative ${className ?? ''}`}>{children}</div>;
}
