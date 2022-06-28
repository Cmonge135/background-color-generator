const btn = document.querySelector('.btn'); // generate btn
const body = document.querySelector('body');  // body
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; // options
const hex_value = document.querySelector('.hex');  // hex displayed
const copy = document.querySelector('.myCopy');  // copy btn

body.style.backgroundColor='#2E3135';
hex_value.innerHTML='#2E3135';
btn.addEventListener('click',function(){
    let hex_key = '#';
   for(let i=0; i<6; i++){
       const index = Math.floor(Math.random()*hex.length);
       hex_key = hex_key + hex[index];
    }
    hex_value.innerHTML=hex_key;
    document.querySelector('.myHex').value = hex_key;
    body.style.background = hex_key;
    body.style.transition = '1s';
});

hex_value.addEventListener('click',function(){  // change hex_value to copy to make the copy button copy the hex code
    let hex = document.querySelector('.myHex');

    hex.select();
    hex.setSelectionRange(0,99999);

    navigator.clipboard.writeText(hex.value);
    alert('Copied to clipboard: ' + hex.value);
});