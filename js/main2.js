
//DINAMICKI ISPIS UL LISTE

var liValue=["", "New arrivals", "About", "Locations", "Contact", "Documentation"];
var liHref=["", "index.html #portfolio", "index.html #about", "index.html #team", "index.html #contact", "documentation.pdf"];

var ulList=document.getElementById("bs-example-navbar-collapse-1");
var tagUl=document.createElement("ul");
tagUl.classList.add("nav");
tagUl.classList.add("navbar-nav");
tagUl.classList.add("navbar-right");

for(var i=0; i<liValue.length; i++){
    var tagLi=document.createElement("li");
    var tagA=document.createElement("a");
    if(i==0){
        tagLi.classList.add("hidden");
        tagA.classList.add("#page-top");
    }
    else{
        tagA.classList.add("page-scroll");
        tagA.setAttribute("href", liHref[i]);
    }
        var textTagA=document.createTextNode(liValue[i]);
         tagA.appendChild(textTagA);
         tagLi.appendChild(tagA);    
         tagUl.appendChild(tagLi);
}

ulList.appendChild(tagUl);

//GALERIJA1

var arrayPicHref=["images/gall4.jpg", "images/gall6.jpg", "images/gall5.jpg"];
var arrayPicAlt=["gall4", "gall5", "gall6"];
var arrayPicH3=["WOODEN WARDROBE", "METALIC CHAIR&TABLE SET", "LIGHT WOODEN WARDROBE"];
var arrayDivText=["200 euros", "400 euros", "100 euros SALE"];
var arrayPtext=["Need storage? But in style? Come an check it out NOW!", "The most beautiful way to decorate your home while in style...", "You saw it right here.SALE time, but only in the store-come visit us."];

var picID=document.getElementById("picPic");
   for(var c=0; c<arrayPicHref.length; c++){ 
var picDiv=document.createElement("div");
picDiv.classList.add("col-md-4");
picID.appendChild(picDiv);
var picDiv1=document.createElement("div");
picDiv1.classList.add("team-item");
picDiv.appendChild(picDiv1);
var picDiv2=document.createElement("div");
picDiv2.classList.add("team-image");
picDiv2.setAttribute("id", "myGallery");
picDiv1.appendChild(picDiv2);
var picA=document.createElement("a");
picA.setAttribute("href",arrayPicHref[c]); 
picDiv2.appendChild(picA);
var picImg=document.createElement("img");
picImg.setAttribute("src", arrayPicHref[c]);
picImg.classList.add("img-responsive");
picImg.classList.add("center-block");
picImg.setAttribute("alt", arrayPicAlt[c]);
picA.appendChild(picImg);
var picDiv3=document.createElement("div");
picDiv3.classList.add("team-text");
picDiv1.appendChild(picDiv3);
var picH3=document.createElement("h3");
var picH3Text=document.createTextNode(arrayPicH3[c]);
picH3.appendChild(picH3Text);
picDiv3.appendChild(picH3);
var picDiv4=document.createElement("div");
picDiv4.classList.add("team-position");
var picDivText=document.createTextNode(arrayDivText[c]);
picDiv4.appendChild(picDivText);
picDiv3.appendChild(picDiv4);
var picP=document.createElement("p");
var picPText=document.createTextNode(arrayPtext[c]);
picP.appendChild(picPText);
picDiv3.appendChild(picP);
}


//GALERIJA2

var arrayPicHref=["images/gall7.jpg", "images/gall8.jpg", "images/gall9.jpg"];
var arrayPicAlt=["gall7", "gall8", "gall9"];
var arrayPicH3=["BROWN MIRROR", "WOODEN SHELVES", "METALIC MIRROR"];
var arrayDivText=["100 euros", "190 euros", "140 euros SALE"];
var arrayPtext=["So many choices, come to our gallery for the whole selection.", "Beautiful wood made into a storage unit.","Round mirror - simple and neat-minimalistic"];


var picID=document.getElementById("picPic1");
   for(var c=0; c<arrayPicHref.length; c++){ 
var picDiv=document.createElement("div");
picDiv.classList.add("col-md-4");
picID.appendChild(picDiv);
var picDiv1=document.createElement("div");
picDiv1.classList.add("team-item");
picDiv.appendChild(picDiv1);
var picDiv2=document.createElement("div");
picDiv2.classList.add("team-image");
picDiv2.setAttribute("id", "myGallery");
picDiv1.appendChild(picDiv2);
var picA=document.createElement("a");
picA.setAttribute("href",arrayPicHref[c]); 
picDiv2.appendChild(picA);
var picImg=document.createElement("img");
picImg.setAttribute("src", arrayPicHref[c]);
picImg.classList.add("img-responsive");

picImg.setAttribute("alt", arrayPicAlt[c]);
picA.appendChild(picImg);
var picDiv3=document.createElement("div");
picDiv3.classList.add("team-text");
picDiv1.appendChild(picDiv3);
var picH3=document.createElement("h3");
var picH3Text=document.createTextNode(arrayPicH3[c]);
picH3.appendChild(picH3Text);
picDiv3.appendChild(picH3);
var picDiv4=document.createElement("div");
picDiv4.classList.add("team-position");
var picDivText=document.createTextNode(arrayDivText[c]);
picDiv4.appendChild(picDivText);
picDiv3.appendChild(picDiv4);
var picP=document.createElement("p");
var picPText=document.createTextNode(arrayPtext[c]);
picP.appendChild(picPText);
picDiv3.appendChild(picP);
}

//FOOTER-LI

var arrayFHref=["https://www.facebook.com/FurnitureGallery.gr","https://www.instagram.com/furnituregallery59/", "https://www.linkedin.com/in/marija-vucicevic-6692671b2/", "sitemap.xml", "rss.xml"];
var arrayClass=["fa-facebook", "fa-instagram", "fa-linkedin", "fa-sitemap", "fa-rss"];

var footerID=document.getElementById("liLI2");
var footerUl=document.createElement("ul");
footerUl.setAttribute("id", "liLI");
footerID.appendChild(footerUl);
      for(var a=0; a<arrayFHref.length; a++){
var footerLi=document.createElement("li");
footerUl.appendChild(footerLi);
var footerA=document.createElement("a");
footerA.setAttribute("href", arrayFHref[a]);
footerA.setAttribute("target", "_blank");
footerLi.appendChild(footerA);
var footerI=document.createElement("i");
footerI.classList.add("fa");
footerI.classList.add(arrayClass[a]);
footerA.appendChild(footerI);

}