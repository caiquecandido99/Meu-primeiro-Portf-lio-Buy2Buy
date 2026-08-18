import qrcode
img = qrcode.make("https://github.com/caiquecandido99")
img.save("qrcode.png")