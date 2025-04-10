motorA = robotbit.Motors.M1A
motorB = robotbit.Motors.M1B

def on_forever():
    robotbit.motor_run(motorA, 150)
    robotbit.motor_run(motorB, -150)
    basic.pause(1000)
    robotbit.motor_run(motorA, 0)
    robotbit.motor_run(motorB, 0)
    basic.pause(1000)
basic.forever(on_forever)
