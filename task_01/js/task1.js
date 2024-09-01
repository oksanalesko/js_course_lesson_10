"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	let elementsNumber = parseInt(prompt("Введіть кількість елементів у масиві", "10"))
	function createHistoryPricesArr(arrLength, min = 1, max = 10000) {
		let arr = []
		for (let i = 0; i < arrLength; i++) {
			let element = min + Math.floor(Math.random() * (max - min + 1))
			arr.push(element)
		}
		return arr
	}
	let historyPrices = createHistoryPricesArr(elementsNumber)

	// Крок 1. Обчислення результатів

	// 1) Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
	const greaterThan1000 = historyPrices.filter((el) => el > 1000)

	// 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
	const greaterThan1000Numbers = historyPrices.reduce((arrOfIndexes, el, index) => {
		if (el > 1000) arrOfIndexes.push(index)
		return arrOfIndexes
	}, [])

	// 3) Сформувати список з тих цін, які більші за попереднє значення
	const greaterThanPrev = historyPrices.reduce((arrOfGreaterElements, el, index, baseArr) => {
		if (index > 0 && el > baseArr[index - 1]) arrOfGreaterElements.push(el)
		return arrOfGreaterElements
	}, [])

	// 4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
	const maxValue = historyPrices.reduce((prevMaxPrice, el) => (el > prevMaxPrice ? el : prevMaxPrice))
	const percentOfMaxValue = historyPrices.map((el) => ((el * 100) / maxValue).toFixed(1))

	// 5) Підрахувати кількість змін цін
	let priceChangesCount = historyPrices.reduce((changeCount, price, ind, baseArr) => {
		if (ind > 0 && price !== baseArr[ind - 1]) changeCount++
		return changeCount
	}, 0)

	// 6) Визначити, чи є ціна, що менше 1000
	function showPriceLess(arr, priceValue) {
		const priceLess = arr.some(price => price < priceValue)
		let msg = priceLess ? `Є ціна, менша за ${priceValue}` : `Нема ціни, меншої за ${priceValue}`
		return msg
	}
	const resLessPrice = showPriceLess(historyPrices, 1000)
	
	// 7) Визначати, чи усі ціни більше за 1000
	function showPriceLarger(arr, priceValue) {
		const priceLarger = arr.every(price => price > priceValue)
		let msg = priceLarger ? `Всі ціни більші за ${priceValue}` : `Не всі ціни більші за ${priceValue}`
		return msg
	}
	const resLargerPrice = showPriceLarger(historyPrices, 1000)

	// 8) Підрахувати кількість цін, що більше за 1000
	let priceLarger1000Num = historyPrices.reduce(
		(prevNum, price) => price > 1000 ? ++prevNum : prevNum,
		0
	)

	// 9) Підрахувати суму цін, що більше за 1000
	let priceLarger1000Sum = historyPrices.reduce(
		(prevSum, price) => price > 1000 ? prevSum + price : prevSum
	)

	// 10) Знайти першу ціну, що більше за 1000
	let firstPriceGreater1000 = historyPrices.find(price => price > 1000)

	// 11) Знайти індекс першої ціни, що більше за 1000
	let firstPriceGreater1000Index = historyPrices.findIndex(price => price > 1000)

	// 12) Знайти останню ціну, що більше за 1000
	let lastPriceGreater1000 = historyPrices.findLast(price => price > 1000)

	// 13) Знайти індекс останньої ціни, що більше за 1000
	let lastPriceGreater1000Index = historyPrices.findLastIndex(price => price > 1000)

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(
		`<div>Масив з історією цін на цінні папери за деякий період ${elementsNumber} днів: ${historyPrices}</div>`
	)
	document.write(`<ul class="task-list">`)
	document.write(
		`<li class="task-item">1) Новий масив, у якому є тільки ті, що більші за 1000 грн.: ${greaterThan1000}</li>`
	)
	document.write(
		`<li class="task-item">2) Новий масив, у якому є номери тільки тих, що більші за 1000 грн.: ${greaterThan1000Numbers}</li>`
	)
	document.write(
		`<li class="task-item">3) Новий список з тих цін, які більші за попереднє значення: ${greaterThanPrev}</li>`
	)
	document.write(
		`<li class="task-item">4) Новий масив, що міститиме значення цін у відсотках стосовно максимального: ${percentOfMaxValue}</li>`
	)
	document.write(
		`<li class="task-item">5) Кількість змін цін: ${priceChangesCount}</li>`
	)
	document.write(
		`<li class="task-item">6) ${resLessPrice}</li>`
	)
	document.write(
		`<li class="task-item">7) ${resLargerPrice}</li>`
	)
	document.write(
		`<li class="task-item">8) Кількість цін, що більше за 1000: ${priceLarger1000Num}</li>`
	)
	document.write(
		`<li class="task-item">9) Сума цін, що більше за 1000: ${priceLarger1000Sum}</li>`
	)
	document.write(
		`<li class="task-item">10) Перша ціна, більша за 1000: ${firstPriceGreater1000}</li>`
	)
	document.write(
		`<li class="task-item">11) Індекс першої ціни, більшої за 1000: ${firstPriceGreater1000Index}</li>`
	)
	document.write(
		`<li class="task-item">12) Остання ціна, більша за 1000: ${lastPriceGreater1000}</li>`
	)
	document.write(
		`<li class="task-item">13) Індекс останньої ціни, більшої за 1000: ${lastPriceGreater1000Index}</li>`
	)
	document.write(`</ul>`)
	document.write(`</div>`)
}
