document.addEventListener('DOMContentLoaded', function() {
    const colorBox=document.getElementById('color-box');
    const colorBtn=document.getElementById('change-color-btn');

    function getRandomColor() {
        const letters ="0123456789ABCDEF";
        let colors="#"; /*the string value '#'. It's often used as a starting point for building 
        hexadecimal color codes, where the hash symbol (#) typically precedes the color code digits.*/ 
for(var i=0;i<6 ;i++){
    colors += letters[Math.floor(Math.random() * 16)];
}
return colors;

    }
    colorBtn.addEventListener('click', function () {
        colorBox.style.backgroundColor = getRandomColor();
      });

});