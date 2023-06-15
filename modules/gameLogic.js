import { getIsCross, getIconType } from "./iconCreator.js"

const numberDict = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

const allWinningPos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 7, 7]
]

let isRunning = true

let cross_pos = []
let circle_pos = []

export const updatePos = () => {
    const icons = document.getElementsByClassName(getIconType())
    for (let i = 0; i < icons.length; i++) {
        let posClassName = icons[i].classList[2]
        // we use ! here as this function is called after iconCreator and iconCreator inverts is_cross
        if (!getIsCross()) { // refactor
            cross_pos.push(numberDict[posClassName])
            // removes duplicates in array
            cross_pos = [...new Set(cross_pos)]
        } else {
            circle_pos.push(numberDict[posClassName])
            circle_pos = [...new Set(circle_pos)]
        }
    }
    // console.log(cross_pos, circle_pos)
}

const allFilled = () => {
    return (cross_pos.length + circle_pos.length == 9)
}

export const isWinner = () => {
    updatePos()
    for (let i = 0; i < allWinningPos.length; i++) {
        // To check membership of winning pos in board pos
        // [3, 6, 9].every(element => [9, 6, 7, 3].includes(element) -> true
        if (allWinningPos[i].every(element => cross_pos.includes(element))) {
            isRunning = false
            return "cross wins"
        } else if (allWinningPos[i].every(element => circle_pos.includes(element))) {
            isRunning = false
            return "circle wins"
        } else if (allFilled()) {
            isRunning = false
            return "draw"
        } else continue
    }
}

export const getIsRunning = () => {
    return isRunning
}