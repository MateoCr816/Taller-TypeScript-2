import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let totalSeasons = 0;

renderseriesInTable(series);

series.forEach(serie => {
    totalSeasons += serie.seasons;
});

function renderseriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie, index) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${index + 1}</td>
                               <td class="serie-name">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        // Agrega un evento clic para mostrar información de la serie
        const nameCell: HTMLElement = trElement.querySelector('.serie-name')!;
        nameCell.addEventListener('click', () => {
            showSerieInfo(serie);
        });
    });
}

function showSerieInfo(serie: Serie) {
    const serieInfoContainer: HTMLElement = document.getElementById('serie-info-container')!;
    serieInfoContainer.innerHTML = `
    <img src="${serie.picture}" alt="${serie.name}">
        <h1>${serie.name}</h1>
        <p>${serie.summary}</p>
        <p>${serie.link}</p>

    `;
}

const averageSeasons = totalSeasons / series.length;
const averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = `Seasons average: ${averageSeasons}`;
}

function clearseriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
