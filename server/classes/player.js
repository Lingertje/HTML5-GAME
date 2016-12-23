const Entity = require('./entity');

class Player extends Entity {

    /**
     * Represents a player
     * @constructor
     * @param {string} id The player's id (Most of the time this is the socket id)
     * @param {number} xPos Position of the player on the x axis
     * @param {number} yPos Position of the player on the y axis
     */
    constructor (id, xPos, yPos) {
        super(xPos, yPos);

        this.id = id;
        this.maxSpd = 5;
        this.pressed = {
            left 	: false,
            right 	: false,
            up 		: false,
            down 	: false
        };
    }

    /**
     *
     * @description Checks if a certain key is pressed and updates the position accordingly
     */
    updatePosition(){
        let position = this.getPosition();

        if (this.pressed.right) {
            position.xPos += this.maxSpd;
        }
        if (this.pressed.left) {
            position.xPos -= this.maxSpd;
        }
        if (this.pressed.up) {
            position.yPos -= this.maxSpd;
        }
        if (this.pressed.down) {
            position.yPos += this.maxSpd;
        }

        this.setPosition(position.xPos, position.yPos);
    }

    /**
     *
     * @description Fires with the equipped weapon
     */
    shoot () {

    }
}

module.exports = Player;