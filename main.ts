sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fire, 200)
    info.changeScoreBy(1)
})
let projectile: Sprite = null
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    5555555555bbbbbb5555555555555555
    5555555bbb444444bb55555555555555
    555552244444ddd444b5555555555555
    5555244444444dddd44e555555555555
    555244444444444ddd4be55555555555
    55244444444444444d44be5555555555
    52b444444444444444d4be5555555555
    52b44444444444444444bbe555555555
    2bbb4444444444444444bbe555555555
    2bbb4444444444444444bbe555555555
    2bb4b4444444444444444bbe55555555
    2bb4444444444444444444be55555555
    2bb44444444444444444444e55555555
    2bbb444bbb4444444444444e55555555
    22bbb444bb4bb444444444be55555555
    52bbbbb44bbbb44444444bbe55555555
    522bbbbbbbb44bbb444444bbe5555555
    55eeeb2bbbbb44bbb444444be5555555
    555eeeeebbbbbbbb44b4444be5555555
    55555eeeeee222bb44bbb4bbe5555555
    5555555eeeee222bb44bbbbee5555555
    555555555555e222bbbbbbbec5555555
    55555555555555ee2bbbbeebdb555555
    55555555555555555eeeeecdddb55555
    55555555555555555555555cd11bbbb5
    555555555555555555555555cd111db5
    5555555555555555555555555b11111c
    5555555555555555555555555c11dd1c
    5555555555555555555555555cd1dbc5
    5555555555555555555555555cb11c55
    55555555555555555555555555ccc555
    55555555555555555555555555555555
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(30)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `, randint(-50, 50), randint(-50, 50))
})
