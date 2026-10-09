//Plant classes will be defined here
class Plant extends sprites.ExtendableSprite{
    toughness: number
    sunCost: number

    constructor(toughness: number, sunCost: number) {
        super(img`.`, SpriteKind.Player)
        this.toughness = toughness
        this.sunCost = sunCost
    }

    
}