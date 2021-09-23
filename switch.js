// const metaTags = document.querySelectorAll("meta")
// metaTags.forEach((meta) => {
//     if (meta.name == 'theme-color') {
//         console.log(meta)
//         meta.setAttribute('content', 'black')
//         console.log(meta)
//     }

// })
// console.log(themeColor); 
// console.log(upBody);

/*const btn = document.getElementById('swch');
console.log('btn');
const upBody = document.getElementsByClassName('whole');
console.log('upBody');
const mainBody = document.querySelector('body');

btn.addEventListener('click', () => {
    mainBody.classList.toggle('whitebody');
} );
 btn.addEventListener('click', () => {
     upBody.getElementsByClassName.toggle('wholeTwo');
     
});*/
// localStorage.setItem('theme', 'themeName');
localStorage.setItem('theme', 'darkTheme');
localStorage.getItem('theme');
const btn = document.getElementById('swch');
const theme = window.localStorage.getItem('theme');
const btnColor = document.getElementsByClassName('slider'); console.log(btnColor);
if(theme === 'darkTheme') document.body.classList.add('darkTheme');
btn.addEventListener('click', () =>{
    document.body.classList.toggle('darkTheme');
    if(theme === 'darkTheme') {
        window.localStorage.setItem('theme', 'lightTheme');
    }
    else window.localStorage.setItem('theme', 'darkTheme');
    
    //    document.body.classList.toggle('slider');
});






