var winheight, docheight, trackLength, throttlescroll;
function getmeasurements(){
    winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getDocHeight();
    trackLength = docheight - winheight;
}
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}
function amountscrolled(){
    var scrollTop = window.pageYOffset || 
            (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var percentageScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    changeTopAppearance(percentageScrolled);
    
}
 
getmeasurements();
 
window.addEventListener("resize", function(){
    getmeasurements();
}, false);
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll);
        throttlescroll = setTimeout(function(){ // throttle code inside scroll to once every 50 milliseconds
        amountscrolled();
    }, 1);
}, false);


function changeTopAppearance(percentageScrolled){
     var linkholder = document.querySelector("#banner .links");
    var logo = document.querySelector("#banner .links .link1 a img");
    var menu = document.querySelector("#banner .links .link2 .menu");
    var links = document.querySelectorAll("#banner .links .link2 a");
    if(percentageScrolled > 1){   
        linkholder.style.backgroundColor = "#FFF";
        linkholder.style.borderBottom = "1px solid #eee";
        logo.setAttribute("src","assets/blue.png");
        menu.setAttribute("src","assets/blackmenu.png");
        for(var i= 0; i < links.length; i++){
            links[i].style.color="#333";
            if(i === links.length-1){
                links[i].style.color="#FFF";
            }
        }
    }else{
         linkholder.style.backgroundColor = "rgba(0,0,0,0.3)";
        linkholder.style.borderBottom = "0.01px solid #666";
        logo.setAttribute("src","assets/white.png");
        menu.setAttribute("src","assets/whitemenu.png");
        for(var i= 0; i < links.length; i++){
            links[i].style.color="#FFF";
            if(i === links.length-1){
                links[i].style.color="#FFF";
            }
        }
    }
   
}
document.querySelector("#banner .links .link2 .menu").onclick = function(){
  document.getElementById("sidebar").style.display ="block";  
};
document.querySelector("#sidebar").onclick = function(){
  document.getElementById("sidebar").style.display ="none";  
};



window.onload = function(){
    document.getElementsByClassName("buttons")[0].onmouseover = function(){
         document.getElementsByClassName("info")[0].style.display = "block";
         document.getElementsByClassName("buttons")[0].style.transform = "rotate(270deg)";
     };
    document.getElementsByClassName("buttons")[0].onmouseout = function(){
         document.getElementsByClassName("info")[0].style.display = "none";
         document.getElementsByClassName("buttons")[0].style.transform = "rotate(180deg)";
     };
     document.getElementsByClassName("buttons")[1].onmouseover = function(){
         document.getElementsByClassName("info")[1].style.display = "block";
         document.getElementsByClassName("buttons")[1].style.transform = "rotate(270deg)";
     };
    document.getElementsByClassName("buttons")[1].onmouseout = function(){
         document.getElementsByClassName("info")[1].style.display = "none";
         document.getElementsByClassName("buttons")[1].style.transform = "rotate(180deg)";
     };
     document.getElementsByClassName("buttons")[2].onmouseover = function(){
         document.getElementsByClassName("info")[2].style.display = "block";
         document.getElementsByClassName("buttons")[2].style.transform = "rotate(270deg)";
     };
    document.getElementsByClassName("buttons")[2].onmouseout = function(){
         document.getElementsByClassName("info")[2].style.display = "none";
         document.getElementsByClassName("buttons")[2].style.transform = "rotate(180deg)";
     };
     document.getElementsByClassName("buttons")[3].onmouseover = function(){
         document.getElementsByClassName("info")[3].style.display = "block";
         document.getElementsByClassName("buttons")[3].style.transform = "rotate(270deg)";
     };
    document.getElementsByClassName("buttons")[3].onmouseout = function(){
         document.getElementsByClassName("info")[3].style.display = "none";
         document.getElementsByClassName("buttons")[3].style.transform = "rotate(180deg)";
     };
    
};




document.querySelector("#register .reg .registers .form p button").onclick = function(){
  sendMail();  
};

function sendMail(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var query = "name="+name+"&email="+email+"&description="+description;
    document.querySelector("#progress #progressBox div p").innerHTML = "sending message...";
    document.getElementById("progress").style.display="block";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST',"php/server.php", true);
    xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("progress").style.display="none";
            document.querySelector("#mess #messageBox  p").innerHTML =  this.responseText;
            document.getElementById("mess").style.display = "block";
        }
    };
    xmlHttp.send(query);
}




/*
 *javascript to call swipe.js slideshow code
*/

var element = document.getElementById('mySwipe');
            window.mySwipe = new Swipe(element, {
                      startSlide: 0,
                      speed: 1000,
                      auto: 30000,
                      draggable: false,
                      continuous: true,
                      autoRestart: false,
                      disableScroll: false, // prevent touch events from scrolling the page
                      stopPropagation: false, 
                      callback: function(index, elem, dir) {},
                      transitionEnd: function(index, elem) {}
            });
            mySwipe.enable();