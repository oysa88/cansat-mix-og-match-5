knapp = 0

def on_forever():
    global knapp
    knapp = pins.digital_read_pin(DigitalPin.P5)
    if knapp:
        pins.digital_write_pin(DigitalPin.P15, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P15, 0)
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)

