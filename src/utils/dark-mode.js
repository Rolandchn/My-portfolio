

const darkMode = () => {   
    document.body.classList.toggle('light-mode');
    
    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light-mode');
    }
    else{
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
    }
};


export default darkMode;