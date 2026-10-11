// Plant classes will go here
class Plant {
    // Stats
    maxToughness: number
    toughness: number
    behaviorInterval: number
    currentInterval: number

    // Postion
    column: number = 0
    row: number = 0

    // Animation
    frameIndex = 0
    frameInterval = 83
    plantImage: Image
    frames: Image[]

    constructor(maxToughness: number, behaviorInterval: number, currentInterval: number, plantImage: Image, frames: Image[]) {
        this.maxToughness = maxToughness
        this.toughness = maxToughness
        this.behaviorInterval = behaviorInterval
        this.currentInterval = currentInterval
    }
    behaviorAI() {}
    onHitAI(damage: number) {}
    animationController() {}
}

class Peashooter extends Plant {
    constructor() {
        super(300, 1500, 900, assets.image`peashooterSprite`, [])
    }
    behaviorAI() {
        if (this.currentInterval <= 0) {
            this.currentInterval -= game.eventContext().deltaTimeMillis
        } else {
            this.currentInterval = this.behaviorInterval
        }
    }
    onHitAI(damage:number) {
        this.toughness -= damage
    }
    animationController() {
        
    }
}