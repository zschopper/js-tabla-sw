import AdatKezelo from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

const SZULOELEM_SELECTOR = ".tartalom";
const TARTALOM_URL = "ajax/sample/ahsoka_s01-hu.json";
const MEZOK = [
    {"mezonev": "still_path", "cim": "", "tipus": "img", "format": "https://image.tmdb.org/t/p/w200{0}"},
    {"mezonev": "episode_number", "cim": "Ep.#", "tipus": "num", "format": "{0}."},
    {"mezonev": "name", "cim": "Cím", "tipus": "text", "format": "{0}"},
    {"mezonev": "overview", "cim": "Összefoglaló", "tipus": "text", "format": "{0}"},
    {"mezonev": "runtime", "cim": "Játékidő", "tipus": "num", "format": "{0} perc"},
    {"mezonev": "vote_average", "cim": "Átlag", "tipus": "stars", "format": "{0}"},
    {"mezonev": "air_date", "cim": "Megjelenés", "tipus": "date", "format": "{0}"},
];

$(window).on("load", () => {
    const szuloElem = $(SZULOELEM_SELECTOR);

    AdatKezelo.betolt(TARTALOM_URL, (adatok) => {
        let lista = adatok.episodes
        let li = new ListaMegjelenit(lista, MEZOK, szuloElem)
    });
})

