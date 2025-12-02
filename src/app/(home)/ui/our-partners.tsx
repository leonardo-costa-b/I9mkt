import Image from 'next/image';

export function OurPartners() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-6">
            <div className="">
                <h3 className="font-semibold text-red-600">Our Partners</h3>
                <h2 className="py-6 text-4xl text-gray-700">
                    Learn with our{' '}
                    <span className="inline-flex flex-col">
                        partners <Image src="/line.svg" alt="line" width={150} height={5} />
                    </span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore iste
                    explicabo, veniam reiciendis, non cum ex maxime provident ratione distinctio
                    deleniti ducimus iure voluptate error eaque. Recusandae, alias beatae!
                </p>
            </div>
            <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
                {/* <Image src="https://placeholder" /> */}
            </div>
        </section>
    );
}
