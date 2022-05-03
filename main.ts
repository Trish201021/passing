function decrease (num: number) {
    number += -1
    return number
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(decrease(1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(add(1))
})
function add (num: number) {
    number += 2
    return number
}
let number = 0
number = 0
basic.forever(function () {
	
})
