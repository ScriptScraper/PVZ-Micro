//Plant classes will be defined here
class Plant extends sprites.ExtendableSprite {
    toughness: number
    sunCost: number
    behaviorInterval: number
    currentInterval: number
    constructor(toughness: number, sunCost: number, behaviorInterval: number) {
        super(img`.`, SpriteKind.Plant)
        this.toughness = toughness
        this.sunCost = sunCost
        this.behaviorInterval = behaviorInterval
        this.currentInterval = behaviorInterval
    }
    behaviorAI() {}
    onHitAI(damage: number) {}
    animationController() {}
}

class Peashooter extends Plant {
    constructor() {
        super(300, 100, randint(68, 75))
    }
    behaviorAI() {
        if (this.currentInterval <= 0) {

        } else {
            this.currentInterval -= 1
        }
    }
    onHitAI(damage: number) {
        this.toughness -= damage
    }
    animationController() {
        
    }
}