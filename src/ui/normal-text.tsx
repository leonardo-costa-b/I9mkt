import React from 'react';

interface NormalTextProps {
    text: string;
    className?: string;
}

export function NormalText({ text, className }: NormalTextProps) {
    return <p className={`text-base leading-7 text-gray-700 ${className ?? ''}`}>{text}</p>;
}
