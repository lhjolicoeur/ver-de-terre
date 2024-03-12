def on_button_pressed_a():
    for index in range(10):
        servos.P2.set_angle(90)
        basic.pause(200)
        servos.P2.set_angle(90)
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)
