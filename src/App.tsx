import './App.css'

function RequiredStar() {
    return <span className="text-red-500 ml-1">*</span>;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function FormField({id, label,description, required = false, children}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[14px] font-medium text-[#2f2f2f] leading-[1.4]"
            >
                {label}
                {required && <RequiredStar />}
            </label>

            {description && (
                <p className="text-[12px] text-[#6b6f76] leading-[1.45]">
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}

function App() {
    return (

        <div className="min-h-screen bg-[#f6f7fb] px-4 py-10">
            <main className="mx-auto w-full max-w-170">
                <div className="mb-6 flex justify-center">
                    <img src={"https://reflexshop.hu/shop_ordered/51636/design_pic/favicon.ico"}
                         alt={"reflexshop-logo" } />
                </div>

                <section className="rounded-2xl bg-white px-6 py-7 shadow-sm ring-1 ring-black/5">
                    <header className="mb-6">
                        <h1 className="text-[30px] font-semibold tracking-[-0.02em] text-[#1f1f1f]">
                            Pótlási kérelem
                        </h1>
                        <p className="mt-2 text-[13px] leading-[1.55] text-[#5f636b]">
                            Ha hiányzott, elveszett vagy netán megsérült, ne aggódj, mi
                            segítünk. Töltsd ki ezt az űrlapot, hogy a kollégák értesüljenek
                            arról, hogy a játékod sajnos nem teljes.
                        </p>
                    </header>

                    <form className="space-y-5">
                        <FormField
                            id="nev-rendelesszam"
                            label="Név vagy rendelésszám"
                            description="Kérlek add meg a neved és/vagy a rendelésszámodat. A biztos, ha van mindkettő."
                            required
                        >
                            <input
                                id="nev-rendelesszam"
                                name="nev-rendelesszam"
                                type="text"
                                placeholder="Enter text"
                                required
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            />
                        </FormField>

                        <FormField
                            id="jatek-neve"
                            label="Játék neve"
                            description="Válaszd ki, hogy melyik játékból kérnéd a pótlást."
                            required
                        >
                            <input
                                id="jatek-neve"
                                name="jatek-neve"
                                type="text"
                                placeholder="Enter text"
                                required
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            />
                        </FormField>

                        <FormField
                            id="potlas-leirasa"
                            label="A pótlás leírása"
                            description="Írd le kérlek, hogy pontosan melyik komponens hiányzik vagy sérült."
                            required
                        >
              <textarea
                  id="potlas-leirasa"
                  name="potlas-leirasa"
                  placeholder="Enter text"
                  required
                  rows={4}
                  className="w-full rounded-md border border-[#d7dbe2] bg-white px-3 py-2.5 text-[14px] text-[#1f1f1f] outline-none transition resize-y focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
              />
                        </FormField>

                        <FormField
                            id="potlasi-kerelem"
                            label="Pótlási kérelem"
                            description="Jelöld be azt, amelyik igaz a pótlási kérelmedre."
                            required
                        >
                            <select
                                id="potlasi-kerelem"
                                name="potlasi-kerelem"
                                required
                                defaultValue=""
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            >
                                <option value="" disabled>
                                    Select option...
                                </option>
                                <option value="hianyzik">Hiányzik valami a dobozból</option>
                                <option value="serult">Sérült alkatrész</option>
                                <option value="elveszett">Elveszett alkatrész</option>
                                <option value="egyeb">Egyéb</option>
                            </select>
                        </FormField>

                        <FormField
                            id="cim-atvetel-helye"
                            label="Cím/Átvétel helye"
                            description="Írd meg kérlek, hogy milyen címre küldhetjük, vagy hogy melyik üzletben szeretnéd átvenni."
                            required
                        >
                            <input
                                id="cim-atvetel-helye"
                                name="cim-atvetel-helye"
                                type="text"
                                placeholder="Enter text"
                                required
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            />
                        </FormField>

                        <FormField
                            id="email"
                            label="E-mail"
                            description="Kérlek add meg az e-mail címed."
                            required
                        >
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter text"
                                required
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            />
                        </FormField>

                        <FormField
                            id="telefonszam"
                            label="Telefonszám"
                            description="Kérlek add meg a telefonszámod."
                            required
                        >
                            <input
                                id="telefonszam"
                                name="telefonszam"
                                type="tel"
                                placeholder="Enter text"
                                required
                                className="h-11 w-full rounded-md border border-[#d7dbe2] bg-white px-3 text-[14px] text-[#1f1f1f] outline-none transition focus:border-[#6d5dfc] focus:ring-2 focus:ring-[#6d5dfc]/20"
                            />
                        </FormField>

                        <FormField
                            id="csatolmany"
                            label="Csatolmány"
                            description="A beazonosítás megkönnyítése érdekében, ha van lehetőséged, csatolj egy fotót is hozzá."
                        >
                            <label
                                htmlFor="csatolmany"
                                className="flex min-h-23 w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-[#d7dbe2] bg-[#fafbfc] px-4 text-center text-[13px] text-[#6b6f76] transition hover:border-[#6d5dfc] hover:bg-[#f7f5ff]"
                            >
                                Válaszd ki a képet
                            </label>
                            <input
                                id="csatolmany"
                                name="csatolmany"
                                type="file"
                                className="hidden"
                                required={true}
                                accept={"image/*"}
                            />
                        </FormField>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="h-12 w-full rounded-xl bg-[#635bff] text-[14px] font-semibold text-white transition hover:bg-[#564ee8] focus:outline-none focus:ring-2 focus:ring-[#635bff]/30"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>

                <footer className="mt-6 text-center text-[12px] leading-[1.6] text-[#6b6f76]">
                    <p>
                        Copyright © 2000 - {new Date().getFullYear()}. Reflexshop Kft.
                        Minden jog fenntartva!
                    </p>
                    <p>Reflexshop e-commerce team ❤️</p>
                </footer>
            </main>
        </div>
    );
}

export default App;