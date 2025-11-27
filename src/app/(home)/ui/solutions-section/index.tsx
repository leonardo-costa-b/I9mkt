import { PorcentageSolutionSuccess } from './components/porcentage-solution-success';
import { Solutions } from './components/solutions';

export function SoluctionsSection() {
    return (
        <section className="py-20 max-lg:px-4 max-lg:py-10">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-4xl text-gray-700">Our Soluctions</h2>
                <p className="text-lg text-gray-600 max-lg:text-center">
                    We offer personalized coaching solutions to help you achieve your goals.
                </p>
            </div>

            <div className="flex items-center justify-center pt-10 max-lg:flex-col max-lg:gap-10">
                <div className="flex flex-col flex-wrap gap-4 px-6 max-lg:flex-row max-lg:px-4 max-sm:flex-col">
                    <Solutions />
                    <Solutions />
                </div>
                <PorcentageSolutionSuccess />
                <div className="flex flex-col flex-wrap gap-4 px-6 max-lg:flex-row max-lg:px-4 max-sm:flex-col">
                    <Solutions />
                    <Solutions />
                </div>
            </div>
        </section>
    );
}
