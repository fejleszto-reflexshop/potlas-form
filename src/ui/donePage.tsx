import type {JSX} from "react";
import '../App.css'

type DonePageProps = {
    onBack: () => void;
};

export function DonePage({ onBack }: DonePageProps): JSX.Element {
    return (
        <div className="min-h-screen bg-[#f6f7fb] px-4 py-10">
            <main className="mx-auto w-full max-w-115">
                <section className="rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 text-center">
                    <h1 className="text-[28px] font-semibold text-[#1f1f1f]">
                        Sikeres beküldés
                    </h1>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#5f636b]">
                        Köszönjük, megkaptuk a pótlási kérelmedet. Hamarosan felvesszük veled
                        a kapcsolatot.
                    </p>

                    <button
                        onClick={onBack}
                        className="mt-6 h-11 w-full rounded-xl bg-[#635bff] text-[14px] font-semibold text-white transition hover:bg-[#564ee8]"
                    >
                        Nézz körül a Reflexshopon
                    </button>
                </section>
            </main>
        </div>
    );
}