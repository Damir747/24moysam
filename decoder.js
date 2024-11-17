// Исходный текст в "ломаной" кодировке
const encodedText = "ÐÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½Ð¾ Ð¿Ð¾ÑÑÐ¸ Ð² ÑÐµÐ½ÑÑÐµ ÐÐ¾ÑÐºÐ²Ñ ÑÐ°Ð¼Ð¾Ð¼Ð¾Ð¹! Ð Ð½Ð°Ð¿Ð¾Ñ Ð²Ð¾Ð´Ñ Ð¾Ðº Ð¸ Ð¿ÐµÐ½Ð°, Ð½ÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½Ð¾! Ð¡ÐÐÐ¡ÐÐÐ!";

// Функция для декодирования текста
function decodeText(text) {
	return decodeURIComponent(escape(text));
}

// Декодируем текст
const decodedText = decodeText(encodedText);

console.log(decodedText);
