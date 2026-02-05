let knapp = 0
basic.forever(function on_forever() {
    
    knapp = pins.digitalReadPin(DigitalPin.P5)
    if (knapp) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
