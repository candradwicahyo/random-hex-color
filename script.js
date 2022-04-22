window.onload = () => {
  
  const colorBox = document.querySelector('.color-box');
  const input = document.querySelector('.input');
  
  function randomHexColorCode() {
    let string = '#';
    const randomString = 'abcdef0123456789';
    
    for (let i = 0; i < 6; i++) {
      string += randomString[Math.floor(Math.random() * randomString.length)];
    }
    
    colorBox.style.backgroundColor = string;
    input.value = string.toUpperCase();
  }
  
  randomHexColorCode();
  
  // generate button
  const generateButton = document.querySelector('#generate');
  generateButton.addEventListener('click', () => randomHexColorCode());
  
  function copy() {
    const copyButton = document.querySelector('#copy');
    copyButton.addEventListener('click', () => {
      input.select();
      document.execCommand("copy");
      swal.fire({
        icon: 'success',
        text: 'code has been copied!',
        position: 'center'
      })
    });
  }
  
  copy();
}