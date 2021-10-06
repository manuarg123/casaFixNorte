function countdown(i){document.write('<p class="presupuesto_script">' + i + '</p>'); if(i<= 1){
        return;
}else{
    countdown(i-1);
}
    
    }
countdown(1);
