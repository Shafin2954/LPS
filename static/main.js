function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active')
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')


function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj0 = document.getElementById("value0");
animateValue(obj0, 0, obj0.innerHTML, 3000);
const obj1 = document.getElementById("value1");
animateValue(obj1, 0, obj1.innerHTML, 3000);
const obj2 = document.getElementById("value2");
animateValue(obj2, 0, obj2.innerHTML, 1000);
const obj3= document.getElementById("value3");
animateValue(obj3, 0, obj3.innerHTML, 1000);
const obj4 = document.getElementById("value4");
animateValue(obj4, 0, obj4.innerHTML, 1000);


   // Get the modal
   var modal = document.getElementById('id01');
            
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }

