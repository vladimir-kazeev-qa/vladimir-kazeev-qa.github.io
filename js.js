/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Будь готов (-а) к любым задачам и главное – всегда верь в себя! Следуя этим двум принципам, ты обязательно добьешься успеха!')
})
