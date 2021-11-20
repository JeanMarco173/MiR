function createRobot(px, py){
    let x = px;
    let y = py;
    return {
        getX() {
            return x
        },
        getY() {
            return y
        },
        getPosition() {
            return x + "," + y
        },
        moveUp() {
            y++
            return validator() ? y : 'posición fuera de límites'
        },
        moveDown() {
            y--
            return validator() ? y : 'posición fuera de límites'
        },
        moveRight() {
            x++
            return validator() ? x : 'posición fuera de límites'
        },
        moveLeft() {
            x--
            return validator() ? x : 'posición fuera de límites'
        }
    }
    function validator() {
        if ((x >= 0 && x < 11) && (y >= 0 && y < 11)) return true
        else return false
    }
}

module.exports = createRobot