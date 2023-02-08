let array = [1, 2, 3, 4];
let arrayTwo = new Array("Sam", "eniola", "sofo", "Laju"); //we initialize it already
let arrayThree = new Array(12)
//console.log(arrayThree.length);

Array.prototype.lol = function () {
    for (let i = 0; i < arrayTwo.length; i++) {
        this[i] = this[i].toUpperCase()
    }
    return this;
}

//console.log(arrayTwo.lol())
arrayTwo.push("Yemi")
//console.log(arrayTwo.lol())
arrayTwo.pop()
//console.log(arrayTwo.lol())
arrayTwo.shift()
//console.log(arrayTwo.lol())
arrayTwo.unshift("kehinde")
//console.log(arrayTwo.lol())

//console.log()

let result = arrayTwo.lol()
result.slice(1,3)
//console.log(result)

let rel = "I love you";
//console.log(rel.repeat(5))

let arrayPractice = []

arrayPractice.push(["Car", 2000, ["Toyota", "Nissan"]])
arrayPractice.push(["Truck", 500, ["Ford"]])
arrayPractice.push(["Bike", 6500, ["Honda"]])
arrayPractice.push(["Scooter", 1500, ["Null"]])

//console.log(arrayPractice)

//console.table(arrayPractice)
//console.time(arrayPractice)
//console.info()

for (let i = 0; i < arrayPractice.length; i++) {
    //console.log("************************************************")
    //console.log(arrayPractice[i])
}
//console.log("************************************************")


//console.log()
//console.log(arrayPractice)


let raw_arr = new Array(4);

raw_arr.push([200, 50, 300, 5])
raw_arr.push([10, 25, 7, 100])
raw_arr.push([25, 20, 70, 45])
raw_arr.push([500, 170, 11, 35])

//console.table(raw_arr)
//console.log()

//console.log(raw_arr)

let row = 0;
let start = 2;
let end = 3;

for (let i = start; i < row; end++) {
    //console.log(i)

}

//For in - gets the index
//For of - gets the value

counter = 1
for (let loop = "loop", i = 0;  i < 5; counter * 2, i++) {

}

//for i - both the value and the index

arr = [23, 34, 56, 78, 12]

for (const rawArrKey in raw_arr) {
    console.log(rawArrKey)
}

for (const rawArrElement of raw_arr) {
    console.log(rawArrElement)
}

arr.forEach((number) => {
    console.log(number ** 2);

});

let classRoom = {
    cohort10: {
        name: "Dekanorbs",
        total: "34",
        graduated: true,
},
    cohort13: {
        name: "Starlinks",
        total: "98",
        graduated: false,
    },
    cohort14: {
        name: "Regnos",
        total: "46",
        graduated: false,
    }
}

for (const classRoomKey in classRoom) {
        console.log(classRoomKey)
}

for (const classRoomKey in classRoom) {
    console.log(classRoom[classRoomKey].total);

}

for (i of Object.entries(classRoom)) {
    console.log(i);

}