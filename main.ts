input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        servos.P2.setAngle(90)
        basic.pause(200)
        servos.P2.setAngle(90)
        basic.pause(200)
    }
})
