function changePhone1 () {
  const phone1 = document.getElementById("phone1").value 

  if(phone1.length === 3) {
    document.getElementById("phone2").focus()
  }
}

function changePhone2 () {
  const phone2 = document.getElementById("phone2").value 

  if(phone2.length === 4) {
    document.getElementById("phone3").focus()
  }
}
function changePhone3 () {
  const phone3 = document.getElementById("phone3").value 

  if(phone3.length === 4) {
    document.getElementById("btn__transmit").disabled = false
  }
}
const refresh = () => {
  let isStarted = false

  if(isStarted === false) {
    isStarted = true
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("authNum").innerText = token
    document.getElementById("btn__complete").disabled = false
    document.getElementById("btn__complete").setAttribute("style", "background-color: yellow")

    let time = 10
    setInterval(function() {
      if(time >=  0) {
          const min = String(Math.floor(time/60)).padStart(1,"0")
          const sec = String(time%60).padStart(2,"0")
          // const timer = `${min} : ${sec}`
          const timer = min + ":" + sec
          document.getElementById("time").innerText = timer

          time--

      }
      else {
        document.getElementById("btn__complete").disabled = true
        
      }
    }, 1000)
  }else {
    alert("너 이미 실행했어")
  }
  
}
const complete = () => {
  window.alert("인증이 완료되없습니다")
  clearInterval(setInterval())
  document.getElementById("signin").disabled = false
  document.getElementById("signin").setAttribute("style", "background-color: yellow")

}
function checkValidation() {

  const email = document.getElementById("email").value
  const name = document.getElementById("name").value
  const password1 = document.getElementById("password1").value
  const password2 = document.getElementById("password2").value

  
  if(email !== "" && name !== "" && password1 !== "" && password2 !== ""){
    if(password1 === password2) {
      window.alert("가입을 축하드립니다")
      document.getElementById("mybutton").disabled = false;
    }
    else {
      window.alert("비밀번호를 확인해주세요")
    }
      
  } else {
      document.getElementById("mybutton").setAttribute("style", "background-color: none")
      document.getElementById("mybutton").disabled = true;
  }
}