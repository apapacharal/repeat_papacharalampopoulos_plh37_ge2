input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        led.toggle(1, 1)
        basic.pause(1000)
    }
})
led.plot(0, 0)
basic.forever(function () {
	
})
