const iconClasses = {
    "00": "one",
    "01": "two",
    "02": "three",
    "10": "four",
    "11": "five",
    "12": "six",
    "20": "seven",
    "21": "eight",
    "22": "nine"
}

export const classSelector = (event) => {
    const boxElements = [
        ["00", "01", "02"],
        ["10", "11", "12"],
        ["20", "21", "22"]
    ];

    for (const row of boxElements) {
        for (const boxId of row) {
            const boxElement = document.getElementById(boxId);
            if (boxElement.contains(event.target)) {
                return iconClasses[boxId];
            }
        }
    }
    throw new Error("Invalid Click");
}