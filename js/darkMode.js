let dark_mode_button = document.querySelector('.dark-mode-button');
let dark_mode_button_ident = document.querySelector('.dark-mode-button-ident')
let change = false;

dark_mode_button.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')

    if(change==true){
        dark_mode_button_ident.style.left = "1px";
        change = false;

    }else if(change==false){
        dark_mode_button_ident.style.left = "20px";
        change = true;

    }
    
    

}