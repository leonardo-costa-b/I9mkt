import Link from 'next/link';

interface FooterLinksProps {
    links: { name: string; link: string }[];
    title: string;
}

export function FooterLinks({ links, title }: FooterLinksProps) {
    return (
        <div>
            <h3 className="pb-4 text-lg font-semibold">{title}</h3>

            <ul>
                {links.map((item) => (
                    <li key={item.link} className="pb-4 last:pb-0">
                        <Link href={item.link} className="block text-gray-600 hover:text-gray-900">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
