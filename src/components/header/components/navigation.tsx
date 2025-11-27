'use client';

import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Coaching', link: '/#about' },
    { name: 'Team', link: '/#services' },
    { name: 'Case Studios', link: '/#blog' },
    { name: 'Contact', link: '/#contact' },
];

export function Navigation() {
    const pathname = usePathname();

    const [shouldShowMenu, setShouldShowMenu] = useState(false);

    function handleToggleMenu() {
        setShouldShowMenu(!shouldShowMenu);
    }

    return (
        <>
            <button type="button" className="lg:hidden" onClick={handleToggleMenu}>
                <Menu size={32} color="#000" />
            </button>

            <nav
                className={clsx(
                    'max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:h-full max-lg:w-full max-lg:bg-gray-900 max-lg:transition-all max-lg:ease-linear',
                    {
                        'left-0': shouldShowMenu,
                        '-left-full': !shouldShowMenu,
                    },
                )}
            >
                <button
                    type="button"
                    className="absolute right-0 p-4 lg:hidden"
                    onClick={handleToggleMenu}
                >
                    <X color="#fff" />
                </button>
                <ul className="flex items-center gap-10 max-lg:h-full max-lg:flex-col max-lg:justify-center max-lg:gap-10">
                    {menuItems.map((item) => (
                        <li key={item.link}>
                            <Link
                                href={item.link}
                                className={clsx(
                                    'text-gray-500 transition-all max-lg:text-2xl max-lg:text-white lg:hover:text-gray-900',
                                    {
                                        'font-medium text-gray-900': pathname === item.link,
                                    },
                                )}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
