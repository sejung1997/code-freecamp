const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
undefined
if(profile.age >= 20) {
    console.log("성인입니다")
}
else if(profile.age >=8 && profile.age <= 19) {
    console.log("학생입니다")
}
else {
    console.log("어린이입니다")
}
VM1587:5 학생입니다

let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]


for(let i = 0; i < persons.length; i++) {
    if(persons[i].age > 18) {
        console.log(persons[i].name + "님은 성인입니다")
    } else {
        console.log(persons[i].name + "님은 미성년자입니다.")
    }
}
// VM1068:5 철수님은 미성년자입니다.
// VM1068:3 영희님은 성인입니다
// VM1068:5 도우너님은 미성년자입니다.
// VM1068:5 말포이님은 미성년자입니다.
// VM1068:5 도비님은 미성년자입니다.
// undefined
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
// undefined

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + " " + fruits[i].title)
}