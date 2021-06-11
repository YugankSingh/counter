var listOfCounters = [
	document.getElementById("digit-1"),
	document.getElementById("digit-2"),
	document.getElementById("digit-3"),
	document.getElementById("digit-4"),
	document.getElementById("digit-5"),
]

var listOfCounters = [
	{
		top: document.querySelector("#digit-1>.top-div"),
		bottom: document.querySelector("#digit-1>.bottom-div"),
	},
	{
		top: document.querySelector("#digit-2>.top-div"),
		bottom: document.querySelector("#digit-2>.bottom-div"),
	},
	{
		top: document.querySelector("#digit-3>.top-div"),
		bottom: document.querySelector("#digit-3>.bottom-div"),
	},
	{
		top: document.querySelector("#digit-4>.top-div"),
		bottom: document.querySelector("#digit-4>.bottom-div"),
	},
	{
		top: document.querySelector("#digit-5>.top-div"),
		bottom: document.querySelector("#digit-5>.bottom-div"),
	},
	{ isCompleted: true },
]

bla(1)

function clearInput() {
	document.querySelector("form>input[type='number']").value = ""
}

var input
var interval
function startCounter() {
	currInput = document.querySelector("form>input[type='number']").value
	
	if (!currInput) return
	if (currInput > 99999) {
		clearInput()
		window.alert("Oops Its too big to handle")
		return
	}
	input = currInput

	clearInterval(interval)
	resetCounter()
	var i = 0
	interval = setInterval(function () {
		if (i >= input) {
			clearInterval(interval)
			window.alert("time is up")
		} else {
			i++
			increaseCounter(0, i % 10)
			if (i % 10 == 0) {
				let temp = i / 10
				increaseCounter(1, temp % 10)
				if (temp % 10 == 0) {
					temp /= 10
					increaseCounter(2, temp % 10)
					if (temp % 10 == 0) {
						temp /= 10
						increaseCounter(3, temp % 10)
						if (temp % 10 == 0) {
							temp /= 10
							increaseCounter(4, temp % 10)
							if (temp % 10 == 0) {
								temp /= 10
								increaseCounter(5, temp % 10)
							}
						}
					}
				}
			}
		}
	}, 500)
	console.log(input)
}

function resetCounter() {
	for (let index = 0; index < 5; index++) {
		let curr = listOfCounters[index]
		if (curr.top.innerHTML != 0) increaseCounter(index, 0)
	}
}

function increaseCounter(n, next) {
	let curr = listOfCounters[n]
	curr.bottom.innerHTML = next
	curr.bottom.classList.add("animation")
	setTimeout(function () {
		curr.top.innerHTML = next
		curr.bottom.classList.remove("animation")
	}, 300)
}
