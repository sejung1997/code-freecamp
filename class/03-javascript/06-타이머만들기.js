let isStarted = false
const refresh = () => {

  if(isStarted === flase) {
    isStarted = true
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("authNum").innerText = token

    let time = 179
    setInterval(function() {
      if(time >=  0) {
          const min = String(Math.floor(time/60)).padStart(2,"0")
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
