import qrcode

website = "https://clothesqr.vercel.app/"

qr = qrcode.make(website)

qr.save("myqr2.png")

print("Abe QR ban ke ready bhi ho gaya")