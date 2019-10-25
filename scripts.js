function myWork(theImg, theTitle, theInfo)
{
    this.src = theImg;
    this.title = theTitle;
    this.info = theInfo;
}

gd1 = new myWork
(
    "",
    "",
    ""
)


var gdAry = ["img/macro/fern.jpg", "img/macro/foxfire.jpg", "img/macro/memosa.jpg", "img/macro/foxfire_log.jpg"];
// var phtAry = [];
// var webAry = [];


var gd = document.getElementById('gdThumbs');
var pht = document.getElementById('phtThumbs');
var web = document.getElementById('webThumbs');

for (var i=0; i < gdAry.length; i++)
{
    
    gd.innerHTML += `<img onclick="openImg(this)" src=${gdAry[i]} alt="Aaron Mihalevich">`;

};

function openImg(img)
{
    document.getElementById('shadowBox').style.display = "block";
    document.getElementById('lgImg').src = img.src;
    document.getElementById('infoText').innerHTML = img.alt;

}

document.getElementById('close').addEventListener('click', close);

function close()
{
    document.getElementById('shadowBox').style.display = "none";
}
