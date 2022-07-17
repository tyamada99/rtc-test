function 分の取得 () {
    レジスタ値の読み取り(1)
    分 = 変換の結果
}
function 月の取得 () {
    レジスタ値の読み取り(5)
    月 = 変換の結果
}
input.onButtonPressed(Button.A, function () {
    年の取得()
    月の取得()
    日の取得()
    basic.showString("" + convertToText(年) + "-" + convertToText(月) + "-" + convertToText(日))
})
function 秒の取得 () {
    レジスタ値の読み取り(0)
    秒 = 変換の結果
}
function レジスタ値の読み取り (アドレス: number) {
    pins.i2cWriteNumber(
    50,
    アドレス,
    NumberFormat.Int8LE,
    false
    )
    レジスタ値の変換(pins.i2cReadNumber(50, NumberFormat.Int8LE, false))
}
function 時の取得 () {
    レジスタ値の読み取り(2)
    時 = 変換の結果
}
function レジスタ値の変換 (数値: number) {
    変換元 = 数値
    変換の結果 = 0
    for (let カウンター = 0; カウンター <= 7; カウンター++) {
        if (変換元 % 2 == 1) {
            変換の結果 = 変換の結果 + 変換用の重み[カウンター]
        }
        変換元 = Math.idiv(変換元, 2)
    }
}
function 年の取得 () {
    レジスタ値の読み取り(6)
    年 = 2000 + 変換の結果
}
input.onButtonPressed(Button.B, function () {
    時の取得()
    分の取得()
    秒の取得()
    basic.showString("" + convertToText(時) + ":" + convertToText(分) + ":" + convertToText(秒))
})
function 日の取得 () {
    レジスタ値の読み取り(4)
    日 = 変換の結果
}
let 変換元 = 0
let 時 = 0
let 秒 = 0
let 日 = 0
let 年 = 0
let 月 = 0
let 変換の結果 = 0
let 分 = 0
let 変換用の重み: number[] = []
変換用の重み = [
1,
2,
4,
8,
10,
20,
40,
80
]
