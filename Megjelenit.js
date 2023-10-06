class ListaMegjelenit {
    constructor(lista, mezok, szuloElem) {
        this.lista = lista;
        this.szuloElem = szuloElem;
        this.mezok = mezok;
        let html = this.osszeallit();
        szuloElem.html(html)
    }

    osszeallit() {
        let html = '<div class="table-responsive-lg"><table class="table"><thead><tr>';
        for (const mezo of this.mezok) {
            html += `<th>${mezo.cim}</th>`;
        };
        html += "</tr></thead><tbody>";

        for (const epizod of this.lista) {
            html += "<tr>";
            for (const mezo of this.mezok) {
                let adat = "";
                let adat_fmt = mezo.format.replace(/\{0\}/, epizod[mezo.mezonev]);
                switch (mezo.tipus) {
                    case "num":
                    case "text":
                    case "date":
                        adat = adat_fmt;
                        break;
                    case "img":
                        adat = `<img src="${adat_fmt}" alt="állókép az epizódból" />`;
                        break;
                    case "stars":
                        adat = `<div class="stars"><div class="percent" style="width: ${adat_fmt * 10}%;"></div></div>`;
                        break;
                    default:
                        adat = "??";
                }
                html += `<td class="align-middle">${adat}</td>`;
            }
            html += "</tr>";
        };
        html += "</tbody></table></div>"
        return html;
    }
}

export default ListaMegjelenit;
