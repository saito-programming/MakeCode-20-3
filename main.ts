pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
let 連続で鳴るのを禁止 = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        if (連続で鳴るのを禁止 == 0) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
            連続で鳴るのを禁止 = 1
        }
    } else {
        連続で鳴るのを禁止 = 0
    }
})
