const refresh = () => {

  const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
  document.getElementById("auth").innerText = token
  document.getElementById("auth").style.color = "#" + token;
  document.getElementById("button").style.backgroundColor = "red"

  document.getElementById("button").setAttribute("style","background-color: setcolor") 

}
let students = ['철수', '영희', '도우너', '말포이', '도비']

function greetingStudents(props) {
  for(i = 0; i < props.length; i++) {
    console.log(`${props[i]}님 반갑습니다`)
  }
}
greetingStudents(students)
