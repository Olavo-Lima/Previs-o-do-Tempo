// Chave da API
const key = 'da4451c5368d58e2dcf3b1a196353d6c';

// Função que imprime os dados na tela do usuário
function dadosDisplay(dados) {
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "C°";
    document.querySelector('.text-prev').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "%";
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

//Função que acessa o servidor da API
async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dadosDisplay(dados)
}

//Função que pega o nome da cidade inserido
function clickButton() {
    const city = document.querySelector('.input-city').value

    searchCity(city)
}