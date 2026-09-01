def color():
    rgb[0] = randint(0, 255)
    rgb[1] = randint(0, 255)
    rgb[2] = randint(0, 255)
    return rgb
    
def move_slow():
    global left, right
    if cuteBot.tracking(cuteBot.TrackingState.L_R_UNLINE):
        cuteBot.motors(20, 20)
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0xff0000)
    elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        # left
        left = -2
        right = 10
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff8000)
    elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        # right
        left = 10
        right = 0
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff8000)
    else:
        # straight
        left = 25
        right = 25
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0x000000)
def move():
    global left, right
    if cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        left = -5
        right = 65
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff8000)
    elif cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        left = 65
        right = -5
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff8000)
    else:
        left = 50
        right = 50
        cuteBot.motors(left, right)
        cuteBot.color_light(cuteBot.RGBLights.ALL, 0x000000)
right = 0
left = 0
rgb: List[number] = []
basic.show_icon(IconNames.YES)

def on_forever():
    while True:
        if input.button_is_pressed(Button.A):
            for index in range(4):
                cuteBot.motors(100, -100)
                cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, rgb[0], rgb[1], rgb[2])
                cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, rgb[0], rgb[1], rgb[2])
        if cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) > 3 and cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) <= 10:
            move_slow()
        elif cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS) <= 3:
            cuteBot.stopcar()
        else:
            move()
basic.forever(on_forever)
