// cursor javascript

const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
// smooth scroll js

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i =0;i<navMenuAnchorTags.length;i++){
        navMenuAnchorTags[i].addEventListener('click',function(event){
            event.preventDefault(); // this will stop the direct scroll on clicking the anchor tag as it is its default behaviour
            var targetSecID = this.textContent.split(" ").join("").trim().toLowerCase(); //trim removes white space from before and after the text
            var targetSec = document.getElementById(targetSecID);
            interval = setInterval(function(){
                scrollVertically(targetSec);
            },1);
                
    });
}

            function scrollVertically(targetSec){
                var targetSecCoordinates = targetSec.getBoundingClientRect();
                if(targetSecCoordinates.top<=0){
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,10);
            }
// hamburger

const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-menu');
hamburger.addEventListener('click',() =>{
    console.log('clicked');
    navUl.classList.toggle('show');
})
// skill-bar-animation

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;
            function initialiseBars(){
                for(let bar of progressBars){
                    bar.style.width = 0 + '%';
                }
            }

            function fillBars(){
                for(let bar of progressBars){
                    let targetWidth = bar.getAttribute('data-bar-width');
                    let currentWidth = 0;
                    let interval = setInterval(function(){
                        if(currentWidth > targetWidth){
                            clearInterval(interval);
                            return;
                        }
                        currentWidth++;
                        bar.style.width = currentWidth + '%';
                    },10);
                }
            }

            function checkScroll(){
                //we have to check whether skill container is visible
                var coordinates = skillsContainer.getBoundingClientRect();
                    if( !animationDone && coordinates.top<=window.innerHeight){  
                        // window.innerHeight give us the viewport height

                        animationDone = true;
                        fillBars();
                    }else if(coordinates.top>window.innerHeight){

                        animationDone = false;
                        initialiseBars();
                    }
            }