namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inLevel == true) {
        if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile35`)) {
            if (level1clear == true) {
                tiles.setCurrentTilemap(tilemap`level3`)
                sprites.destroy(mySprite2)
                mySprite = sprites.create(img`
                    . . . . . . . f f f f f . . . . 
                    . . . . . . f e e e e e f . . . 
                    . . . . . f e e e d d d d f . . 
                    . . . . f f e e d f d d f d c . 
                    . . . f d d e e d f d d f d c . 
                    . . . c d b e e d d d d e e d c 
                    f f . c d b e e d d c d d d d c 
                    f e f . c f e e d d d c c c c c 
                    f e f . . f f e e d d d d d f . 
                    f e f . f e e e e f f f f f . . 
                    f e f f e e e e e e e f . . . . 
                    . f f e e e e f e f f e f . . . 
                    . . f e e e e f e f f e f . . . 
                    . . . f e f f b d f b d f . . . 
                    . . . f d b b d d c d d f . . . 
                    . . . f f f f f f f f f . . . . 
                    `, SpriteKind.Player)
                controller.moveSprite(mySprite, 50, 50)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
                sprites.destroy(mySprite3)
            }
            scene.cameraFollowSprite(mySprite)
            if (level1clear == false) {
                tiles.setCurrentTilemap(tilemap`level2`)
                sprites.destroy(mySprite2)
                mySprite = sprites.create(img`
                    . . . . . . . f f f f f . . . . 
                    . . . . . . f e e e e e f . . . 
                    . . . . . f e e e d d d d f . . 
                    . . . . f f e e d f d d f d c . 
                    . . . f d d e e d f d d f d c . 
                    . . . c d b e e d d d d e e d c 
                    f f . c d b e e d d c d d d d c 
                    f e f . c f e e d d d c c c c c 
                    f e f . . f f e e d d d d d f . 
                    f e f . f e e e e f f f f f . . 
                    f e f f e e e e e e e f . . . . 
                    . f f e e e e f e f f e f . . . 
                    . . f e e e e f e f f e f . . . 
                    . . . f e f f b d f b d f . . . 
                    . . . f d b b d d c d d f . . . 
                    . . . f f f f f f f f f . . . . 
                    `, SpriteKind.Player)
                controller.moveSprite(mySprite, 50, 50)
                scene.cameraFollowSprite(mySprite)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
                sprites.destroy(mySprite3)
            }
        }
    }
    if (inLevel == true) {
        if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
            touchingwallright = mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile0`)
        }
        if (touchingwallright == true) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
            controller.moveSprite(mySprite2, 50, 50)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyClimbWallLeft`,
            200,
            true
            )
        }
    }
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (facingLeft == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f e f f e e e f e e f . 
            . . . . f d b f f f d f f d f . 
            . . . . f d d b b d d c d d f . 
            . . . . . f f f f f f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f d b f e e e f f d f . 
            . . . . f d d b f f d c d d f . 
            . . . . . f f f b d d f f f . . 
            . . . . . . . . f f f . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f e f f e e e f e e f . 
            . . . . f d b f f f d f f d f . 
            . . . . f d d b b d d c d d f . 
            . . . . . f f f f f f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f e f f f f d f e e f . 
            . . . . f d b f b d d f f d f . 
            . . . . f d d b f f f c d d f . 
            . . . . . f f f . . . f f f . . 
            `],
        250,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f e e f e e e f f e f . . . . 
            . f d f f d f f f b d f . . . . 
            . f d d c d d b b d d f . . . . 
            . . f f f f f f f f f . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f d f f e e e f b d f . . . . 
            . f d d c d f f b d d f . . . . 
            . . f f f d d b f f f . . . . . 
            . . . . . f f f . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f e e f e e e f f e f . . . . 
            . f d f f d f f f b d f . . . . 
            . f d d c d d b b d d f . . . . 
            . . f f f f f f f f f . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f e e f d f f f f e f . . . . 
            . f d f f d d b f b d f . . . . 
            . f d d c f f f b d d f . . . . 
            . . f f f . . . f f f . . . . . 
            `],
        250,
        true
        )
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (inLevel == true) {
        if (facingLeft == true) {
            touchingWallLeft = true
        }
        if (facingRight == true) {
            touchingwallright = true
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    LevelstartReady = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inLevel == true) {
        if (mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile45`)) {
            game.showLongText("you got a colour!", DialogLayout.Bottom)
            game.showLongText("\"flaming monkey\"", DialogLayout.Bottom)
            flamingMonkeySkin = true
        }
    }
    if (inLevel == true) {
        if (mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile46`)) {
            game.showLongText("yo!", DialogLayout.Bottom)
            game.showLongText("I got somethin' cool for ya in that there chest, why dont you open it?", DialogLayout.Bottom)
        }
    }
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile23`)) {
        tiles.setCurrentTilemap(tilemap`House`)
        inLevel = true
        sprites.destroy(mySprite)
        mySprite2 = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(mySprite2)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 11))
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 6 6 . . . . . . 
            . . . . 8 8 8 8 8 6 6 . . . . . 
            . . . . 8 d d d 8 8 6 . . . . . 
            . . . . 8 f d d f 8 6 . . . . . 
            . . . . 8 d d d d 8 8 6 . . . . 
            . . . . . d f f d 8 8 6 . . . . 
            . . . . . d d d d 8 8 8 . . . . 
            . . . . . 2 2 2 2 d . . . . . . 
            . . . . . 2 2 2 2 d . . . . . . 
            . . . . . 4 4 4 4 d . . . . . . 
            . . . . . 2 2 2 2 d . . . . . . 
            . . . f d 2 f 2 2 d d . . . . . 
            . . . f 9 9 f 9 9 d d . . . . . 
            `, SpriteKind.NPC)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 11))
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        facingRight = true
        facingLeft = false
        touchingWallLeft = false
        touchingwallright = false
        inLevel = true
        sprites.destroy(mySprite)
        mySprite2 = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 12))
        scene.cameraFollowSprite(mySprite2)
        controller.moveSprite(mySprite2, 50, 0)
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
    	
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
    	
    }
    if (inLevel == true) {
        if (facingLeft == true) {
            if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
                mySprite2.y += -50
                animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
                animation.runImageAnimation(
                mySprite2,
                assets.animation`monkeyJumpLeft`,
                250,
                false
                )
            }
        }
        if (facingRight == true) {
            if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
                mySprite2.y += -50
                animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
                animation.runImageAnimation(
                mySprite2,
                assets.animation`monkeyJumpRight`,
                250,
                false
                )
            }
            if (mySprite2.isHittingTile(CollisionDirection.Right)) {
                mySprite2.y += -50
                animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
                animation.runImageAnimation(
                mySprite2,
                assets.animation`monkeyJumpRight`,
                250,
                false
                )
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    LevelstartReady = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.showLongText("You Win!", DialogLayout.Center)
    sprites.destroy(mySprite2)
    mySprite = sprites.create(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.Player)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 9))
    controller.moveSprite(mySprite, 50, 50)
    inLevel = false
    level1clear = true
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (facingLeft == true) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`monkeyStillLeft`,
        250,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`monkeyStillRight`,
        250,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inLevel == true) {
        facingRight = false
        facingLeft = true
        if (flamingMonkeySkin == true) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f 2 f f 2 f 2 2 2 2 f . . 
                . . . f d b f d b f f 2 f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f d b f 2 f 2 2 2 2 f . . 
                . . . f d d c d b f b d f . . . 
                . . . . f f f d d b f f f . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f 2 f f 2 f 2 2 2 2 f . . 
                . . . f d b f d b f f 2 f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f 2 f f d b 2 2 2 2 f . . 
                . . . f d b f d d b f 2 f . . . 
                . . . f d d c f f f b d f . . . 
                . . . . f f f . . . f f f . . . 
                `],
            250,
            true
            )
        }
        if (flamingMonkeySkin == false) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyWalkLeft`,
            200,
            true
            )
        }
    }
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    facingRight = false
    facingLeft = true
    if (flamingMonkeySkin == true) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f 2 f f 2 f 2 2 2 2 f . . 
            . . . f d b f d b f f 2 f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f d b f 2 f 2 2 2 2 f . . 
            . . . f d d c d b f b d f . . . 
            . . . . f f f d d b f f f . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f 2 f f 2 f 2 2 2 2 f . . 
            . . . f d b f d b f f 2 f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f 2 f f d b 2 2 2 2 f . . 
            . . . f d b f d d b f 2 f . . . 
            . . . f d d c f f f b d f . . . 
            . . . . f f f . . . f f f . . . 
            `],
        250,
        true
        )
    }
    if (flamingMonkeySkin == false) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`monkeyWalkLeft`,
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    LevelstartReady = false
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (inLevel == true) {
        if (flamingMonkeySkin == false) {
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyStillRight`,
            250,
            true
            )
        }
        if (flamingMonkeySkin == true) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f 2 2 2 2 2 f . . . 
                . . . . . f 2 2 2 d d d d f . . 
                . . . . f f 2 2 d f d d f d c . 
                . . . f d d 2 2 d f d d f d c . 
                . . . c d b 2 2 d d d d 2 2 d c 
                f f . c d b 2 2 d d c d d d d c 
                f 2 f . c f 2 2 d d d c c c c c 
                f 2 f . . f f 2 2 d d d d d f . 
                f 2 f . f 2 2 2 2 f f f f f . . 
                f 2 f f 2 2 2 2 2 2 2 f . . . . 
                . f f 2 2 2 2 f 2 f f 2 f . . . 
                . . f 2 2 2 2 f 2 f f 2 f . . . 
                . . . f 2 f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `,img`
                . . . . . . . f f f f f . . . . 
                . . . . . . f 2 2 2 2 2 f . . . 
                . . . . . f 2 2 2 d d d d f . . 
                . . . . f f 2 2 d f d d f d c . 
                . . . f d d 2 2 d f d d f d c . 
                . . . c d b 2 2 d d d d 2 2 d c 
                f f . c d b 2 2 d d c d d d d c 
                f 2 f . c f 2 2 d d d c c c c c 
                f 2 f . . f f 2 2 d d d d d f . 
                f 2 f . f 2 2 2 2 f f f f f . . 
                f 2 f f 2 2 2 2 2 2 2 f . . . . 
                . f f 2 2 2 2 f 2 f f 2 f . . . 
                . . f 2 2 2 2 f 2 f f 2 f . . . 
                . . . f 2 f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f f f . . . . 
                . . . . . . f 2 2 2 2 2 f . . . 
                . . . . . f 2 2 2 d d d d f . . 
                . . . . f f 2 2 d f d d f d c . 
                . . . f d d 2 2 d f d d f d c . 
                . . . c d b 2 2 d d d d 2 2 d c 
                f f . c d b 2 2 d d c d d d d c 
                f 2 f . c f 2 2 d d d c c c c c 
                f 2 f . . f f 2 2 d d d d d f . 
                f 2 f . f 2 2 2 2 f f f f f . . 
                f 2 f f 2 2 2 2 2 2 2 f . . . . 
                . f f 2 2 2 2 f 2 f f 2 f . . . 
                . . . f 2 f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f f f . . . . 
                . . . . . . f 2 2 2 2 2 f . . . 
                . . . . . f 2 2 2 d d d d f . . 
                . . . . f f 2 2 d f d d f d c . 
                . . . f d d 2 2 d f d d f d c . 
                f f . c d b 2 2 d d d d 2 2 d c 
                f 2 f c d b 2 2 d d c d d d d c 
                f 2 f . c f 2 2 d d d c c c c c 
                f 2 f . . f f 2 2 d d d d d f . 
                f 2 f f f 2 2 2 2 f f f f f . . 
                . f f 2 2 2 2 f 2 f f 2 f . . . 
                . . . f 2 f f b d f b d f . . . 
                . . . f d b b d d c d d f . . . 
                . . . f f f f f f f f f . . . . 
                `],
            250,
            true
            )
        }
    }
    if (flamingMonkeySkin == false) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`monkeyStillRight`,
        250,
        true
        )
    }
    if (flamingMonkeySkin == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . f f 2 2 d f d d f d c . 
            . . . f d d 2 2 d f d d f d c . 
            . . . c d b 2 2 d d d d 2 2 d c 
            f f . c d b 2 2 d d c d d d d c 
            f 2 f . c f 2 2 d d d c c c c c 
            f 2 f . . f f 2 2 d d d d d f . 
            f 2 f . f 2 2 2 2 f f f f f . . 
            f 2 f f 2 2 2 2 2 2 2 f . . . . 
            . f f 2 2 2 2 f 2 f f 2 f . . . 
            . . f 2 2 2 2 f 2 f f 2 f . . . 
            . . . f 2 f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . f f 2 2 d f d d f d c . 
            . . . f d d 2 2 d f d d f d c . 
            . . . c d b 2 2 d d d d 2 2 d c 
            f f . c d b 2 2 d d c d d d d c 
            f 2 f . c f 2 2 d d d c c c c c 
            f 2 f . . f f 2 2 d d d d d f . 
            f 2 f . f 2 2 2 2 f f f f f . . 
            f 2 f f 2 2 2 2 2 2 2 f . . . . 
            . f f 2 2 2 2 f 2 f f 2 f . . . 
            . . f 2 2 2 2 f 2 f f 2 f . . . 
            . . . f 2 f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . f f 2 2 d f d d f d c . 
            . . . f d d 2 2 d f d d f d c . 
            . . . c d b 2 2 d d d d 2 2 d c 
            f f . c d b 2 2 d d c d d d d c 
            f 2 f . c f 2 2 d d d c c c c c 
            f 2 f . . f f 2 2 d d d d d f . 
            f 2 f . f 2 2 2 2 f f f f f . . 
            f 2 f f 2 2 2 2 2 2 2 f . . . . 
            . f f 2 2 2 2 f 2 f f 2 f . . . 
            . . . f 2 f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . f f 2 2 d f d d f d c . 
            . . . f d d 2 2 d f d d f d c . 
            f f . c d b 2 2 d d d d 2 2 d c 
            f 2 f c d b 2 2 d d c d d d d c 
            f 2 f . c f 2 2 d d d c c c c c 
            f 2 f . . f f 2 2 d d d d d f . 
            f 2 f f f 2 2 2 2 f f f f f . . 
            . f f 2 2 2 2 f 2 f f 2 f . . . 
            . . . f 2 f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `],
        250,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (inLevel == true) {
        if (flamingMonkeySkin == true) {
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f 2 f f 2 f 2 2 2 2 f . . 
                . . . f d b f d b f f 2 f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . . . 
                c d d d d c d d 2 2 b d c . f f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f . f 2 f 
                . . . . f 2 2 2 2 2 2 2 f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f d b f d b f f 2 f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . f 2 2 2 2 2 f . . . . . . 
                . . f d d d d 2 2 2 f . . . . . 
                . c d f d d f d 2 2 f f . . . . 
                . c d f d d f d 2 2 d d f . . . 
                c d 2 2 d d d d 2 2 b d c . f f 
                c d d d d c d d 2 2 b d c f 2 f 
                c c c c c d d d 2 2 f c . f 2 f 
                . f d d d d d 2 2 f f . . f 2 f 
                . . f f f f f 2 2 2 2 f f f 2 f 
                . . . f 2 f f 2 f 2 2 2 2 f f . 
                . . . f d b f d b f f 2 f . . . 
                . . . f d d c d d b b d f . . . 
                . . . . f f f f f f f f f . . . 
                `],
            250,
            true
            )
        }
        if (flamingMonkeySkin == false) {
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyStillLeft`,
            250,
            true
            )
        }
    }
    if (flamingMonkeySkin == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f 2 f f 2 f 2 2 2 2 f . . 
            . . . f d b f d b f f 2 f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . . . 
            c d d d d c d d 2 2 b d c . f f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f . f 2 f 
            . . . . f 2 2 2 2 2 2 2 f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f d b f d b f f 2 f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 2 2 2 2 2 f . . . . . . 
            . . f d d d d 2 2 2 f . . . . . 
            . c d f d d f d 2 2 f f . . . . 
            . c d f d d f d 2 2 d d f . . . 
            c d 2 2 d d d d 2 2 b d c . f f 
            c d d d d c d d 2 2 b d c f 2 f 
            c c c c c d d d 2 2 f c . f 2 f 
            . f d d d d d 2 2 f f . . f 2 f 
            . . f f f f f 2 2 2 2 f f f 2 f 
            . . . f 2 f f 2 f 2 2 2 2 f f . 
            . . . f d b f d b f f 2 f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `],
        250,
        true
        )
    }
    if (flamingMonkeySkin == false) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . f f 
            c d d d d c d d e e b d c f e f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `],
        250,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    LevelstartReady = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    LevelstartReady = true
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inLevel == true) {
        facingRight = true
        facingLeft = false
        if (flamingMonkeySkin == false) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyWalkRight`,
            200,
            true
            )
        }
        if (flamingMonkeySkin == true) {
            animation.stopAnimation(animation.AnimationTypes.All, mySprite2)
            animation.runImageAnimation(
            mySprite2,
            assets.animation`flamingMonkeyWalkRight`,
            200,
            true
            )
        }
    }
    facingRight = true
    facingLeft = false
    if (flamingMonkeySkin == false) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`flamingMonkeyWalkRight`,
        200,
        true
        )
    }
    if (flamingMonkeySkin == true) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`flamingMonkeyWalkRight`,
        200,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (inLevel == true) {
        if (facingRight == true) {
            animation.runImageAnimation(
            mySprite2,
            assets.animation`monkeyClimbWallLeftCling`,
            500,
            true
            )
        }
    }
    if (facingLeft == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f e f f e e e f e e f . 
            . . . . f d b f f f d f f d f . 
            . . . . f d d b b d d c d d f . 
            . . . . . f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . . . 
            d d e e e e e e e e e d c . f f 
            b e e e e e e e e e f c . f e e 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f d b f f f d f f d f . 
            . . . . f d d b b d d c d d f . 
            . . . . . f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f e e e e e e e f . . . . . 
            . f f e e e e e e e f f . . . . 
            d d e e e e e e e e e d f . . . 
            d d e e e e e e e e e d c . f f 
            d d e e e e e e e e e d c f e e 
            b e e e e e e e e e f c . f e f 
            . b e e e e e e e f f . . f e f 
            . . f f f f f e e e e f f f e f 
            . . . . f e e e e e e e e e e f 
            . . . . f d b f f f d f f d f . 
            . . . . f d d b b d d c d d f . 
            . . . . . f f f f f f f f f . . 
            `],
        250,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f e e f e e e f f e f . . . . 
            . f d f f d f f f b d f . . . . 
            . f d d c d d b b d d f . . . . 
            . . f f f f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            . . . c d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e e e e e e e e e e f . . . . 
            . f d f f d f f f b d f . . . . 
            . f d d c d d b b d d f . . . . 
            . . f f f f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e e e e e f . . 
            . . . . f f e e e e e e e f f . 
            . . . f d e e e e e e e e e d d 
            f f . c d e e e e e e e e e d d 
            e e f c d e e e e e e e e e d d 
            f e f . c f e e e e e e e e e b 
            f e f . . f f e e e e e e e b . 
            f e f f f e e e e f f f f f . . 
            f e e e e e e e e e e f . . . . 
            . f d f f d f f f b d f . . . . 
            . f d d c d d b b d d f . . . . 
            . . f f f f f f f f f . . . . . 
            `],
        250,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    LevelstartReady = false
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (facingLeft == true) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`monkeyWalkLeft`,
        200,
        true
        )
    }
    if (facingRight == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e f e e e e f e f f e f . . . 
            . f f e e e e f e f b d f . . . 
            . . . f d b f b d c d d f . . . 
            . . . f f f b d d f f f . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            f e f e e e e f e f f e f . . . 
            . f f e e e e b d f f e f . . . 
            . . . f e f b d d f b d f . . . 
            . . . f d b f f f c d d f . . . 
            . . . f f f . . . f f f . . . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    LevelstartReady = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    LevelstartReady = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    LevelstartReady = true
})
let LevelstartReady = false
let touchingWallLeft = false
let facingRight = false
let facingLeft = false
let touchingwallright = false
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let inLevel = false
let level1clear = false
let flamingMonkeySkin = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
controller.moveSprite(mySprite, 50, 50)
flamingMonkeySkin = false
level1clear = false
forever(function () {
    if (inLevel == true) {
        if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
            mySprite2.setVelocity(0, 75)
            controller.moveSprite(mySprite2, 50, 0)
        }
        if (!(mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile0`))) {
            if (!(mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile1`))) {
                mySprite2.setVelocity(0, 75)
                controller.moveSprite(mySprite2, 50, 0)
            }
        }
    }
})
