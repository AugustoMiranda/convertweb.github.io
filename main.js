"use strict";

const label_from_currency = document.getElementById('from_currency');

const input_from_ammount = document.getElementById('from_ammount');

const label_to_currency = document.getElementById('to_currency');

const input_to_ammount = document.getElementById('to_ammount');

const tax_info = document.getElementById('tax_info');

const swap = document.getElementById('swap');

label_from_currency.addEventListener('change', calculate);

input_from_ammount.addEventListener('input', calculate);

label_to_currency.addEventListener('change', calculate);

input_to_ammount.addEventListener('input', calculate);

swap.addEventListener('click', infoSwap);

main();

function main() {
    let currency = { "BRL": "Real", "EUR": "Euro", "GBP": "Libra Esterlina", "USD": "Dólar EUA", "INR": "Rupia",
    "CAD": "Dólar Canadá", "AUD": "Dólar Austrália", "CHF": "Franco Suíço", "MXN": "Peso México", "FJD": "Dólar Fiji",
"SCR": "Rupia Seicheles", "BBD": "Dólar Barbados", "GTQ": "Quetzal Guatemala", "CLP": "Peso Chileno", "HNL": "Lempira Honduras",
"UGX": "Xelim Uganda", "ZAR": "Rand África do Sul", "TND": "Dinar Tunísia", "BSD": "Dólar Bahamas", "SLL": "Leone Serra Leoa",
"GMD": "Dalasi Gâmbia", "TWD": "Novo Dólar Taiwan", "RSD": "Dinar Sérvia", "DOP": "Peso Dominicano", "KMF": "Franco Comoriano",
"MYR": "Ringgit Malásia", "FKP": "Libra Falkland", "XOF": "Franco CFA", "GEL": "Lari Georgiano", "UYU": "Peso Uruguaio",
"MAD": "Dirham Marroquino", "CVE": "Escudo Cabo Verde", "TOP": "Pa'anga Tonga", "AZN": "Manat Azeri", "OMR": "Rial Omã",
"PGK": "Kina Papua Nova Guiné", "KES": "Xelim Queniano", "SEK": "Coroa Sueca", "BTN": "Ngultrum Butanês", "UAH": "Hryvnia Ucrânia",
"GNF": "Franco Guineense", "MZN": "Metical Moçambique", "SVC": "Colón do Salvador", "ARS": "Peso Argentino", "QAR": "Rial Qatar",
"CNY": "Yuan China", "THB": "Bath Tailândia", "UZS": "Som Usbequistão", "XPF": "Franco CFP", "MRU": "Uguia Mauritânia",
"BDT": "Taka Bangladesh", "BMD": "Dólar Bermudense", "KWD": "Dinar Kuwait", "PHP": "Peso Filipino", "RUB": "Rublo", "PYG": "Guarani Paraguaio",
"ISK": "Coroa Islandesa", "JMD": "Dólar Jamaicano", "COP": "Peso Colômbia", "MKD": "Dinar Macedônia", "DZD": "Dinar Argélia", "PAB": "Balboa Panamá",
"GGP": "Libra Guernsey", "SGD": "Dólar Singapura", "ETB": "Birr Etíope", "JEP": "Libra Jersey", "KGS": "Som Quirguistão", "VUV": "Vatu Vanuatu", 
"LAK": "Kip Laos", "BND": "Dólar Brunei", "XAF": "Franco CFA BEAC", "LRD": "Dólar Libéria", "HRK": "Kuna Croata", "ALL": "Lek Albanês",
"DJK": "Franco Jibuti", "ZMW": "ZMW", "TZS": "Xelim Tanzânia", "VND": "Dong Vietnã", "ILS": "Shekel Israelense", "GHS": "Cedi do Gana", "GYD": "Dólar Guiana",
"BOB": "Boliviano Bolívia", "KHR": "Riel Cambojano", "MDL": "Leu Moldova", "IDR": "Rupia Indonésia", "KYD": "Dólar Ilhas Caimão", "AMD": "Dram Armênia",
"BWP": "Pula Botswana", "SHP": "Libra Santa Helena", "TRY": "Lira Turca", "LBP": "Libra Libanesa", "TJS": "Somoni Tajiquistão", "JOD": "Dinar Jordânia",
"AED": "Dirham Emirados Árabes", "HKD": "Dólar Hong Kong", "RWF": "Franco Ruandês", "LSL": "Loti Lesoto", "DKK": "Coroa Dinamarquesa", "BGN": "Lev Búlgaro",
"MMK": "Kyat Mianmar", "MUR": "Rupia Maurícias", "NOK": "Coroa Norueguesa", "IMP": "Libra Ilha de Man", "GIP": "Libra Gilbraltar", "RON": "Leu Romeno",
"LKR": "Rupia Sri Lanka", "NGN": "Naira Nigéria", "CRC": "Colón Costa-Rica", "CZK": "Coroa Checa", "PKR": "Rupia Parquistanesa", "XCD": "Dólar Caribe Oriental",
"ANG": "Florim Antilhas N", "HTG": "Gourde do Haiti", "BHD": "Dinar do Bahrein", "KZT": "Tenge Cazaquistão", "SRD": "Dólar do Suriname", "SZL": "Lilangeni da Swazilândia",
"SAR": "Rial Saudita", "TTD": "Dólar Trindade e Tobago", "MVR": "Rupia Maldívia", "AWG": "Florim Arubano", "KRW": "Won Sul-Coreano", "NPR": "Rupia Nepal", "JPY": "Iene Japão",
"MNT": "Tugrik da Mongólia", "AOA": "Kwanza Angolano", "PLN": "Złoty Polaco", "SBD": "Dólar Ilhas Salomão", "BYN": "Rublo Bielorrusso", "HUF": "Forint Húngaro",
"MWK": "Kwacha do Malawi", "MGA": "Ariari de Madagascar", "BZD": "Dólar de Belize", "BAM": "Marco Conversível B e H", "EGP": "Libra Egípcia", "MOP": "Pataca de Macau",
"NAD": "Dólar Namíbia", "NIO": "Córdoba da Nicarágua", "PEN": "Novo Sol Peruano", "NZD": "Dólar Nova Zelândia", "WST": "Tala de Samoa", "TMT": "Manat Turquemenistão"};
    let options = [];
    for (var [key, value] of Object.entries(currency)) {
        options.push(`<option value='${key}'>${value}</option>`);
    }
    label_from_currency.innerHTML = options.join('\n');
    label_to_currency.innerHTML = options.join('\n');
    calculate();
}

function infoSwap() {
    let temp = label_from_currency.value;
    label_from_currency.value = label_to_currency.value;
    label_to_currency.value = temp;
    calculate();
}

async function getURL(url) {
    return(await fetch(url)).json();
}

function getInfoSelect(select) {
    return select.options[select.selectedIndex].text;
}

async function calculate() {
    let from = label_from_currency.value;
    let to = label_to_currency.value;
    let { rates } = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);
    let rate = rates[to];
    tax_info.innerText = `1 ${getInfoSelect(label_from_currency)} = ${rate} ${getInfoSelect(label_to_currency)}` 
    input_to_ammount.value = (input_from_ammount.value * rate).toFixed(2);
}