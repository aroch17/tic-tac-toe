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

let cross_pos = []
let circle_pos = []

export const isWinner = () => {
    const icons = document.getElementsByClassName(getIconType())
    for (let i = 0; i < icons.length; i++) {
        let posClassName = icons[i].classList[2]
        // we use ! here as this function is called after iconCreator and iconCreator inverts is_cross
        if (!getIsCross()) {
            cross_pos.push(numberDict[posClassName])
            // removes duplicates in array
            cross_pos = [...new Set(cross_pos)]
        } else {
            circle_pos.push(numberDict[posClassName])
            circle_pos = [...new Set(circle_pos)]
        }
    }
    console.log(cross_pos, circle_pos)
}
