var x = 0
   var y = 0
   var score = 0
   var quiz1 = document.querySelector(".eq1")
   var quiz2 = document.querySelector(".eq2")
   var btn = document.querySelector('button')
   var ans1 = document.querySelectorAll('input')[0]
   var ans2 = document.querySelectorAll('input')[1]
       function get_number(){
           digit = Math.floor(Math.random()*10)-5;
        return digit   
       }
       function get_equation(){
       x = get_number();
       y = get_number();
       
       first_digit =get_number()
       second_digit =get_number()
       if(second_digit>-1){
       second_digit = '+'+second_digit;
       }
       
       third_digit =get_number()
       
       forth_digit =get_number()
       if(forth_digit>-1){
       forth_digit = '+'+forth_digit;
       }
       
       sol1 = eval(first_digit*x+second_digit*y)
       sol2 = eval(third_digit*x+forth_digit*y)
       eq1 = `${first_digit}x${second_digit}y = ${sol1}`
       eq2 = `${third_digit}x${forth_digit}y  = ${sol2}`
       if (eq1==eq2){
       get_equation()
       }
       document.querySelector('.eq1').innerText = eq1
       document.querySelector('.eq2').innerText = eq2
       }
       
       btn.addEventListener("click", () => {
       if (x == ans1.value && y == ans2.value)  {
       result = "correct";
       score++;
       } else {
       result = "wrong";
       if (score > 0) {
       score--;
       }
       }
       document.querySelector(".box h1").innerText = score;
       document.querySelector("#result").innerText = result;
       
       document.querySelector("#result").style.display = "block";
       document.querySelector(".answer").style.display = "none";
       document.querySelector(".eq1").style.display = "none"
       document.querySelector(".eq2").style.display = "none"
       document.querySelector(".button-5").style.display = "none";
       
       setTimeout(() => {
       
       quiz1.innerText = ""
       quiz2.innerText = ""
       get_equation()
       
       document.querySelector("#result").style.display = "none";
       document.querySelector(".answer").style.display = "flex";
       document.querySelectorAll("input")[0].value = ""
       document.querySelectorAll("input")[1].value = ""
       document.querySelector(".eq1").style.display = "block"
       document.querySelector(".eq2").style.display = "block"
       document.querySelector(".button-5").style.display = "block";
       
       }, 750);
       });