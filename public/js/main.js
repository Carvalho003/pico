const header = document.getElementById('header')
const headerClassList = header.classList;

let scrollLevel = window.scrollY;
window.addEventListener('scroll', () => {

  let actualScrollLevel = window.scrollY;
  console.log(actualScrollLevel)
  if (actualScrollLevel >= (scrollLevel + 200)) {
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide')
      scrollLevel = actualScrollLevel;
    }
  } else if(actualScrollLevel <= (scrollLevel - 100)) {
    if (headerClassList.contains('scrollHide')) {
      headerClassList.remove('scrollHide')
      scrollLevel = actualScrollLevel;
    }
  }
  
})

setInterval(() =>{
  scrollLevel = window.scrollY;
},1000)

const redirectLogin = () => {
  window.location.href = '/login';
}