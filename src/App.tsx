import './App.css'

const RequiredStar = () => <span id={"star-required"}>*</span>;

function App() {

  return (
      <>
          <main>
              <h2>Pótlási kérelem</h2>

              <p>Ha hiányzott, elveszett vagy netán megsérült, ne aggódj mi segítünk. Töltsd ki ezt az űrlapot, hogy a kollégák értesüljenek arról, hogy a játékod sajnos nem teljes.</p>

              <div className={"nev-rendelesszam-block"}>
                  <h4>Név vagy rendelésszám <RequiredStar /></h4>
                  <label htmlFor={"nev-rendelesszam-input"}>Kérlek add meg a neved és vagy a rendelésszámodat. A biztos, ha van mindkettő.</label>
                  <input id={"nev-rendelesszam-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"jatek-neve-block"}>
                  <h4>Játék neve <RequiredStar /></h4>
                  <label htmlFor={"jatek-neve-input"}>Válaszd ki, hogy melyik játékból kérnéd a pótlást</label>
                  <input id={"jatek-neve-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"potlas-leirasa-block"}>
                  <h4>A pótlás leírása <RequiredStar /></h4>
                  <label htmlFor={"potlas-leirasa-input"}>Írd le kérlek, hogy pontosan melyik komponens hiányzik vagy sérült.</label>
                  <input id={"potlas-leirasa-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"potlasi-kerelem-block"}>
                  <h4>Pótlási kérelem <RequiredStar /></h4>
                  <label htmlFor={"potlasi-kerelem-input"}>Jelöld be azt amelyik igaz a pótlási kérelmedre.</label>
                  <input id={"potlasi-kerelem-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"cim-atvetel-helye-block"}>
                  <h4>Cím/Átvétel helye <RequiredStar /></h4>
                  <label htmlFor={"cim-atvetel-helye-input"}>Írd meg kérlek, hogy milyen címre küldhetjük, vagy, hogy melyik üzletben szeretnéd átvenni.</label>
                  <input id={"cim-atvetel-helye-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"email-block"}>
                  <h4>E-mail <RequiredStar /></h4>
                  <label htmlFor={"email-input"}>Kérlek add meg az e-mail címed.</label>
                  <input id={"email-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"telefonszam-block"}>
                  <h4>Telefonszám <RequiredStar /></h4>
                  <label htmlFor={"telefonszam-input"}>Kérlek add meg a telefonszámod.</label>
                  <input id={"telefonszam-input"} required={true} placeholder={"Enter text"} type={"text"} />
              </div>

              <div className={"csatolmany-block"}>
                  <h4>Csatolmány</h4>
                  <label htmlFor={"csatolmany-input"}>A beazonosítás megkönnyítése érdekében ha van lehetőséged, csatolj egy fotót is hozzá.</label>
                  <input id={"csatolmany-input"} type={"file"} placeholder={"Select a file"} />
              </div>

              <div className={"submit-block"}>
                  <button type={"button"} id={"submit-btn"}>Submit</button>
              </div>
          </main>

          <footer>Reflexshop {new Date().getFullYear()}</footer>
      </>
  )
}

export default App
