input.onButtonPressed(Button.A, function () {
    if (A_count == 0) {
        A_count += 1
        basic.showNumber(A_count)
    } else if (A_count != 0) {
        A_count = 0
    }
    return A_count
})
function move_slow () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(20, 20)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        // left
        left = -2
        right = 10
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        // right
        left = 10
        right = 0
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
    } else {
        // straight
        left = 25
        right = 25
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    }
}
function emote () {
    basic.showIcon(IconNames.Happy)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, randint(0, 255), randint(0, 255), randint(0, 255))
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, randint(0, 255), randint(0, 255), randint(0, 255))
    basic.pause(100)
    basic.showIcon(IconNames.Surprised)
    cuteBot.motors(50, -50)
    basic.pause(100)
    cuteBot.motors(-50, 50)
}
function move () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        left = -5
        right = 65
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        left = 65
        right = -5
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
    } else {
        left = 50
        right = 50
        cuteBot.motors(left, right)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    }
}
let right = 0
let left = 0
let A_count = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    while (true) {
        if (A_count == 1) {
            emote()
        } else {
            if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 3 && cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 10) {
                move_slow()
            } else if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 3) {
                cuteBot.stopcar()
            } else {
                move()
            }
        }
    }
})
