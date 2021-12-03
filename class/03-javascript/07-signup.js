function checkValidation() {

  const email = document.getElementById("email").value
  const password1 = document.getElementById("password1").value
  const password2 = document.getElementById("password2").value

  // 이메일칸이 비어있지 않아야 하고
  // 비밀번호칸도 비어있지 않아야 하고
  // 확인창도 비어있지 않아야 한다.
  if(email !== "" && password1 !== "" && password2 !== ""){
      // 버튼을 활성화한다
      document.getElementById("mybutton").setAttribute("style", "background-color: yellow")
      document.getElementById("mybutton").disabled = false;
  } else {
      // 버튼을 비활성화한다
      document.getElementById("mybutton").setAttribute("style", "background-color: none")
      document.getElementById("mybutton").disabled = true;
  }