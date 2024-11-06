input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})
