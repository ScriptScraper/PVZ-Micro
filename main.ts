// Frame events and game startups will go here
scene.setBackgroundImage(assets.image`backgroundDay`)
scroller.setBackgroundScrollOffset(-32, 0)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)

spriteutils.createRenderable(-999, function(screen: Image) {
    screen.drawTransparentImage(assets.image`grassDayNormal`, 0, 0)
})

