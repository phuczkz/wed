const body = document.querySelector('body');
const initialTheme = 'light';


const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
}
const toggleTheme = () => {
    const acciveTheme = localStorage.getItem('theme');
    alert('ban da an vao day');
    console.log('ban da an vao logo');
    if (acciveTheme === 'light') {
        setTheme('dark');
    } else setTheme('light');
}
const setThemeOnInit = () =>{
    const savedTheme = localStorage.getItem('theme');
    savedTheme
    ?body.setAttribute('data-theme', savedTheme)
    :setTheme(initialTheme);
}
setThemeOnInit();