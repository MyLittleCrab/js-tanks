/**
 * Simple tank game implementation with ES6 classes
 * @version 1.0.0
 * @author Tank Game Developer
 */

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer between min and max
 */
function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

/**
 * Game state and configuration
 */
class GameState {
    constructor() {
        this.windoww = document.documentElement.clientWidth;
        this.windowh = document.documentElement.clientHeight;
        this.kills = 0;
        this.enemycount = Math.floor(this.windowh * this.windoww * 0.000015);
        this.freeze = 4; // freeze before start the game
        this.enemies = [];
        this.player = null;
        
        this.initializeAudio();
        this.setupEventListeners();
        this.initializeUI();
    }
    
    /**
     * Initialize audio settings
     */
    initializeAudio() {
        const music = document.getElementById('music');
        if (music) {
            music.volume = 0.1;
        }
    }
    
    /**
     * Initialize UI elements positioning
     */
    initializeUI() {
        const killsElement = document.getElementById('kills');
        if (killsElement) {
            killsElement.style.left = (this.windoww - 150) + 'px';
        }
    }
    
    /**
     * Setup keyboard event listeners
     */
    setupEventListeners() {
        document.onkeydown = (event) => this.handleKeyDown(event);
        document.onkeyup = (event) => this.handleKeyUp(event);
    }
    
    /**
     * Handle keydown events
     * @param {KeyboardEvent} event - The keyboard event
     */
    handleKeyDown(event) {
        if (!this.player) return;
        
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                this.player.start('up');
                break;
            case 40: // down
            case 83: // s
                this.player.start('down');
                break;
            case 37: // left
            case 65: // a
                this.player.start('left');
                break;
            case 39: // right
            case 68: // d
                this.player.start('right');
                break;
            case 32: // space
                this.player.shot();
                break;
            case 13: // enter
                this.restart();
                break;
        }
    }
    
    /**
     * Handle keyup events
     * @param {KeyboardEvent} event - The keyboard event
     */
    handleKeyUp(event) {
        if (!this.player) return;
        
        switch (event.keyCode) {
            case 38: // up
            case 87:
            case 40: // down
            case 83:
            case 37: // left
            case 65:
            case 39: // right
            case 68:
                this.player.stop();
                break;
        }
    }
    
    /**
     * Restart the game
     */
    restart() {
        this.kills = 0;
        
        // Destroy all enemies
        for (let i = 0; i < this.enemycount; i++) {
            if (this.enemies[i]) {
                this.enemies[i].destroy();
                this.enemies[i].create();
            }
        }
        
        // Recreate player
        if (this.player) {
            this.player.create();
        }
        
        // Update UI
        const killsElement = document.getElementById('kills');
        const messageElement = document.getElementById('message');
        if (killsElement) killsElement.innerText = 'Kills: 0';
        if (messageElement) messageElement.innerText = '';
    }
    
    /**
     * Increment kill counter
     */
    incrementKills() {
        this.kills++;
        const killsElement = document.getElementById('kills');
        if (killsElement) {
            killsElement.innerText = `Kills: ${this.kills}`;
        }
    }
    
    /**
     * Show game over message
     */
    gameOver() {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.innerHTML = 'GAME OVER<br>Press ENTER to continue';
        }
    }
}

/**
 * Tank class representing both player and enemy tanks
 */
class Tank {
    /**
     * Create a tank
     * @param {boolean} isEnemy - Whether this tank is an enemy
     * @param {string} filename - Image filename for the tank
     */
    constructor(isEnemy = true, filename = 'media/unnamed.png') {
        this.isTraveling = false;
        this.isEnemy = isEnemy;
        this.filename = filename;
        this.image = null;
        this.pleft = 0;
        this.ptop = 0;
        this.way = 'up';
    }
    
    /**
     * Create and display the tank on screen
     */
    create() {
        if (!this.image) {
            this.pleft = getRandomInt(1, gameState.windoww - 50);
            this.ptop = getRandomInt(1, gameState.windowh - 50);
            
            this.image = document.createElement('img');
            this.image.src = this.filename;
            this.image.style.position = 'absolute';
            this.image.style.left = this.pleft + 'px';
            this.image.style.top = this.ptop + 'px';
            
            document.body.appendChild(this.image);
            this.way = 'up';
        }
    }
    
    /**
     * Move the tank in specified direction
     * @param {string} way - Direction to move ('up', 'down', 'left', 'right')
     */
    go(way) {
        if (!this.image) return;
        
        switch (way) {
            case 'up':
                this.image.style.transform = 'rotate(0deg)';
                this.ptop -= 3;
                break;
            case 'down':
                this.image.style.transform = 'rotate(180deg)';
                this.ptop += 3;
                break;
            case 'left':
                this.image.style.transform = 'rotate(-90deg)';
                this.pleft -= 3;
                break;
            case 'right':
                this.image.style.transform = 'rotate(90deg)';
                this.pleft += 3;
                break;
        }
        
        this.image.style.left = this.pleft + 'px';
        this.image.style.top = this.ptop + 'px';
        
        // Check boundaries
        if ((this.pleft < 0 && way === 'left') || 
            (this.pleft > (gameState.windoww - 50) && way === 'right') ||
            (this.ptop < 0 && way === 'up') ||
            (this.ptop > (gameState.windowh - 50) && way === 'down')) {
            this.stop();
        }
        
        if (this.isTraveling) {
            setTimeout(() => this.go(way), 10);
        }
    }
    
    /**
     * Start moving in specified direction
     * @param {string} way - Direction to move
     */
    start(way) {
        if (!this.isTraveling) {
            this.way = way;
            this.isTraveling = true;
            this.go(way);
        }
    }
    
    /**
     * Stop tank movement
     */
    stop() {
        this.isTraveling = false;
    }
    
    /**
     * Destroy the tank and remove from DOM
     */
    destroy() {
        this.stop();
        if (this.image && this.image.parentNode) {
            document.body.removeChild(this.image);
            delete this.image;
        }
        this.pleft = -200;
        this.ptop = -200;
    }
    
    /**
     * Fire a bullet from the tank
     */
    shot() {
        if (this.image) {
            const bullet = new Bullet();
            bullet.create(this);
        }
    }
    
    /**
     * AI autoplay for enemy tanks
     */
    autoplay() {
        const rnd = getRandomInt(1, 5);
        const delay = getRandomInt(1, 1000);
        
        switch (rnd) {
            case 1:
                this.start('up');
                break;
            case 2:
                this.start('down');
                break;
            case 3:
                this.start('left');
                break;
            case 4:
                this.start('right');
                break;
            case 5:
                this.shot();
                break;
        }
        
        if (rnd < 5) {
            setTimeout(() => this.stop(), delay);
        }
        setTimeout(() => this.autoplay(), delay + 100);
    }
}

/**
 * Bullet class for projectiles
 */
class Bullet {
    constructor() {
        this.isFlying = false;
        this.image = null;
        this.pleft = 0;
        this.ptop = 0;
        this.isEnemy = true;
    }
    
    /**
     * Create bullet from parent tank
     * @param {Tank} parent - The tank that fired this bullet
     */
    create(parent) {
        if (!this.image) {
            this.pleft = parent.pleft + 14;
            this.ptop = parent.ptop + 14;
            this.isEnemy = parent.isEnemy;
            
            this.image = document.createElement('img');
            this.image.src = 'media/pixel.png';
            this.image.style.position = 'absolute';
            this.image.style.left = this.pleft + 'px';
            this.image.style.top = this.ptop + 'px';
            
            document.body.appendChild(this.image);
            this.start(parent.way);
        }
    }
    
    /**
     * Destroy bullet and remove from DOM
     */
    destroy() {
        if (this.image && this.image.parentNode) {
            document.body.removeChild(this.image);
            delete this.image;
        }
        this.stop();
    }
    
    /**
     * Start bullet flight
     * @param {string} way - Direction to fly
     */
    start(way) {
        this.isFlying = true;
        this.fly(way);
    }
    
    /**
     * Stop bullet flight
     */
    stop() {
        this.isFlying = false;
    }
    
    /**
     * Move bullet and handle collisions
     * @param {string} way - Direction to fly
     */
    fly(way) {
        switch (way) {
            case 'up':
                this.ptop -= 12;
                break;
            case 'down':
                this.ptop += 12;
                break;
            case 'left':
                this.pleft -= 12;
                break;
            case 'right':
                this.pleft += 12;
                break;
        }
        
        this.image.style.left = this.pleft + 'px';
        this.image.style.top = this.ptop + 'px';
        
        // Check collisions
        if (!this.isEnemy) {
            // Player bullet hitting enemies
            for (let i = 0; i < gameState.enemycount; i++) {
                const enemy = gameState.enemies[i];
                if (enemy && this.isColliding(enemy)) {
                    this.destroy();
                    enemy.destroy();
                    gameState.incrementKills();
                    
                    // Respawn enemy after delay
                    setTimeout(() => enemy.create(), 1000);
                    return;
                }
            }
        } else {
            // Enemy bullet hitting player
            if (gameState.player && this.isColliding(gameState.player)) {
                this.destroy();
                gameState.player.destroy();
                gameState.gameOver();
                return;
            }
        }
        
        // Check boundaries
        if (this.pleft < 0 || this.pleft > (gameState.windoww - 7) ||
            this.ptop < 0 || this.ptop > (gameState.windowh - 7)) {
            this.destroy();
            return;
        }
        
        if (this.isFlying) {
            setTimeout(() => this.fly(way), 6);
        }
    }
    
    /**
     * Check collision with a tank
     * @param {Tank} tank - Tank to check collision with
     * @returns {boolean} True if collision detected
     */
    isColliding(tank) {
        return (this.pleft >= tank.pleft) &&
               (this.pleft <= (tank.pleft + 40)) &&
               (this.ptop >= tank.ptop) &&
               (this.ptop <= (tank.ptop + 40));
    }
}

/**
 * Game initialization and startup
 */
class Game {
    /**
     * Initialize the game
     */
    static init() {
        window.gameState = new GameState();
        Game.begin();
    }
    
    /**
     * Begin game countdown and setup
     */
    static begin() {
        gameState.freeze--;
        const messageElement = document.getElementById('message');
        
        if (gameState.freeze > 0) {
            if (messageElement) {
                messageElement.innerText = gameState.freeze + '!';
            }
            setTimeout(Game.begin, 1000);
        } else {
            if (messageElement) {
                messageElement.innerText = 'FIGHT!';
                setTimeout(() => messageElement.innerText = '', 1000);
            }
            
            // Create player tank
            gameState.player = new Tank(false, 'media/unnamed2.png');
            gameState.player.create();
            
            // Create enemy tanks
            gameState.enemies = [];
            for (let i = 0; i < gameState.enemycount; i++) {
                gameState.enemies[i] = new Tank(true, 'media/unnamed.png');
                gameState.enemies[i].create();
                gameState.enemies[i].autoplay();
            }
        }
    }
}

// Start the game when page loads
setTimeout(() => Game.init(), 1000);