import type {JSX} from "react";
import '../App.css'

type ErrorPageProps = {
    onBack: () => void;
};

export function ErrorPage({ onBack }: ErrorPageProps): JSX.Element {
    return (
        <div className="min-h-screen px-4 py-10 flex justify-center items-center">
            <main className="mx-auto w-full max-w-115">
                <section className="rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 text-center">
                    <h1 className="text-[28px] font-semibold text-red-600">
                        Hiba történt
                    </h1>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#5f636b]">
                        A kérés elküldése nem sikerült. Kérlek próbáld meg újra.
                    </p>

                    <button
                        onClick={onBack}
                        className="mt-6 h-11 w-full rounded-xl bg-[#635bff] text-[14px] font-semibold text-white transition hover:bg-[#564ee8]"
                    >
                        Vissza az űrlaphoz
                    </button>
                </section>
            </main>
        </div>
    );
}