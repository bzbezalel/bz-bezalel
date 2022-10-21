var menuBtn = document.getElementById("menuBtn")
    var sideNav  = document.getElementById("sideNav")
    var menu = document.getElementById("menu")
    sideNav.style.right = "-250px";
    menuBtn.onclick = function (){
      if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png";
      }
      else{
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";
      }
    }


    const countdown = () => {
      const countDate = new Date ("November 7, 2022 00:00:00").getTime()
      const now = new Date ().getTime();
      const gap = countDate - now;
    
    
    //how time works
    const second = 1000;
    const minute = second *60;
    const hour = minute *60;
    const day = hour *24;
    
    //calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute )/ second);
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    
    
    };
    
    setInterval(countdown, 1000);


    document.querySelector(".clickme").addEventListener("click", () => {
      document.querySelectorAll(".hidden").forEach((item) => {
        item.classList.toggle("showing");
      });
    });