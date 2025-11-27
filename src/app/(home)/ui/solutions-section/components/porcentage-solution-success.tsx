'use client';

import { useEffect, useState } from 'react';

export function PorcentageSolutionSuccess() {
    const [porcentage, setPorcentage] = useState(0);

    useEffect(() => {
        const limitCount = 99;

        const counter = setInterval(() => {
            setPorcentage((currentCount) => currentCount + 1);
        }, 50);

        if (porcentage >= limitCount) {
            clearInterval(counter);
        }

        return () => clearInterval(counter);
    }, [porcentage]);

    return (
        <div className="h-72 max-w-72 rounded-full border border-gray-300 bg-slate-200/30 p-10">
            <div className="h-full rounded-full border border-gray-300 bg-slate-200/30 p-8">
                <div className="rounded-ful h-full rounded-full border border-gray-300 bg-white/50 p-6 shadow-2xl shadow-gray-600/40">
                    <div className="flex h-full min-w-[90px] items-center justify-center rounded-full border border-gray-300 bg-white p-4 text-center">
                        <h3 className="text-2xl font-bold text-red-500">{porcentage}%</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
