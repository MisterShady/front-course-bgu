async function getNumberFact() {
  const number = document.getElementById('numberInput').value;
  const url = `http://numbersapi.com/${number}/trivia`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('numberFact').innerText = data;
    })
    .catch(error => console.error('Ошибка:', error));
}

async function getDateFact() {
  const date = document.getElementById('dateInput').value;
  const url = `http://numbersapi.com/${date}/date`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('dateFact').innerText = data;
    })
    .catch(error => console.error('Ошибка:', error));
}

async function translateNumberFact() {
  const fact = document.getElementById('numberFact').innerText;
  translate(fact, 'en', 'ru');
}

async function translateDateFact() {
  const fact = document.getElementById('dateFact').innerText;
  translate(fact, 'en', 'ru');
}

async function translate(text, sourceLang, targetLang) {
  const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}`);
  const data = await response.json();
  console.log(data); // Логируем ответ от API перевода
  const translatedText = data.responseData.translatedText;
  alert('Переведено: ' + translatedText);
}
