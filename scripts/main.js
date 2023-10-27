import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var totalSeasons = 0;
renderseriesInTable(series);
series.forEach(function (serie) {
    totalSeasons += serie.seasons;
});
function renderseriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                               <td class=\"serie-name\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        // Agrega un evento clic para mostrar información de la serie
        var nameCell = trElement.querySelector('.serie-name');
        nameCell.addEventListener('click', function () {
            showSerieInfo(serie);
        });
    });
}
function showSerieInfo(serie) {
    var serieInfoContainer = document.getElementById('serie-info-container');
    serieInfoContainer.innerHTML = "\n    <img src=\"".concat(serie.picture, "\" alt=\"").concat(serie.name, "\">\n        <h1>").concat(serie.name, "</h1>\n        <p>").concat(serie.summary, "</p>\n        <p>").concat(serie.link, "</p>\n\n    ");
}
var averageSeasons = totalSeasons / series.length;
var averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = "Seasons average: ".concat(averageSeasons);
}
function clearseriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
