import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { menuItems } from '@/constants/menu-links';

import { FooterLinks } from './components/footer-links';

export function Footer() {
    return (
        <footer className="bg-gray-100 px-6 py-10 max-lg:px-4">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-start justify-between max-lg:flex-col">
                    <div className="flex items-start gap-20">
                        <FooterLinks links={menuItems} title="Navigation" />
                        <FooterLinks
                            title="Company"
                            links={[
                                { name: 'About Us', link: '/#about' },
                                { name: 'Services', link: '/#services' },
                                { name: 'Blog', link: '/#blog' },
                            ]}
                        />
                    </div>

                    <div className="max-lg:pt-6">
                        <h3 className="pb-4 text-lg font-semibold">Social Media</h3>
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link
                                    href="https://www.facebook.com/i9mkt"
                                    className="flex max-w-10 items-center justify-center rounded-full bg-gray-400 p-2 text-white hover:bg-blue-700"
                                >
                                    <Facebook size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.instagram.com/i9mkt"
                                    className="flex max-w-10 items-center justify-center rounded-full bg-gray-400 p-2 text-white hover:bg-pink-500"
                                >
                                    <Instagram size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/company/i9mkt"
                                    className="flex max-w-10 items-center justify-center rounded-full bg-gray-400 p-2 text-white hover:bg-blue-800"
                                >
                                    <Linkedin size={24} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-6">
                    <Link href="https://www.i9mkt.com" className="text-gray-500">
                        &copy; {new Date().getFullYear()} I9MKT. All rights reserved.
                    </Link>

                    <Link href="" className="text-center text-sm text-gray-600">
                        Developed by <br />{' '}
                        <span className="hover:text-blue-600">Leonardo Costa</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
