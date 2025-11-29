interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-4xl text-gray-700">{title}</h2>;
}
