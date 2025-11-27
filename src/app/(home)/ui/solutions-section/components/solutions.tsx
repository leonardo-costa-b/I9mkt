import { Star } from 'lucide-react';

export function Solutions() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="w-fit rounded-xl bg-black p-4">
                <Star size={24} color="#fff" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">Solution Title</h3>
            <p className="text-center text-sm text-gray-600">
                Brief description of the solution offered. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
            </p>
        </div>
    );
}
