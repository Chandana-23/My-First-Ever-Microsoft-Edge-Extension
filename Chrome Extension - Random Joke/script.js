fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(data=>{
    document.getElementById("joke").innerHTML = data.attachments[0].text;
})