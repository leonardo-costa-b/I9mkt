import Image from 'next/image';

export function OurPartners() {
    return (
        <section className="mx-auto flex max-w-7xl items-center gap-10 px-6 py-10 max-lg:flex-col lg:px-6">
            <div className="">
                <h3 className="font-semibold text-red-600">Our Partners</h3>
                <h2 className="py-6 text-4xl text-gray-700">
                    Learn with our{' '}
                    <span className="relative inline-flex flex-col">
                        partners{' '}
                        <Image
                            src="/line.svg"
                            alt="line"
                            width={150}
                            height={5}
                            className="absolute -bottom-2 left-0"
                        />
                    </span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore iste
                    explicabo, veniam reiciendis, non cum ex maxime provident ratione distinctio
                    deleniti ducimus iure voluptate error eaque. Recusandae, alias beatae!
                </p>
            </div>
            <div className="grid grid-cols-4 items-center border-l border-gray-300 max-lg:grid-cols-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className={`border border-t-0 border-l-0 border-gray-200 p-2 ${index >= 4 ? 'border-b-0' : ''}`}
                    >
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Partner logo"
                            width={600}
                            height={400}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
