const btn = document.querySelector('button')
btn.addEventListener('click', getQR)
function getQR(){
    let user = document.querySelector('input').value
    let regex = /\W+/g //test for unwanted characters
    user = user.replace(regex, "") //replace unwanted characters with spaces
    //user = user.trim() //trim off whithe spaces 
let img = document.querySelector('img')
   let url = `http://api.qrserver.com/v1/create-qr-code/?data=${user}'&size=150x150`
   img.src = url
   let h2 = document.querySelector('h2')
   h2.innerHTML = user
}getQR()