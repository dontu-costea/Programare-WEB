/*
Напишите функцию userRequest которая вызывает другую функцию serverResponse. После получения ответа, результат выводить на странице, в блок с id=result.
Функция serverResponse возвращает ответ через 2 секунда после того как ее вызвали. 
Сценарий:
вызов userRequest
в блок result видно сообщение “Waiting for response...”
внутри метода userRequest вызывается метод serverResponse
после получения ответа от метода serverResponse, в блоке будет виден текст “Response from server”.
Используйте then и catch для выполнения сценария.
*/

function userRequest () {
	let serverResponse = new Promise (function(resolve, reject) {
		setTimeout(() => resolve("Response from server"), 2000);

	});
	serverResponse.then(
  	result => document.getElementById("result").innerHTML = (result)
);
}
userRequest()