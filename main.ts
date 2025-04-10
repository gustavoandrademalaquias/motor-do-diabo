let motorA = robotbit.Motors.M1A
let motorB = robotbit.Motors.M1B
basic.forever(function on_forever() {
    robotbit.MotorRun(motorA, 150)
    robotbit.MotorRun(motorB, -150)
    basic.pause(1000)
    robotbit.MotorRun(motorA, 0)
    robotbit.MotorRun(motorB, 0)
    basic.pause(1000)
})
