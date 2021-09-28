
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






