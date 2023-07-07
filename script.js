function togglemode() {

    const html = document.documentElement
html.classList.toggle('light')

const img = document.querySelector("#profile img")

if(html.classList.contains('light')){

    img.setAttribute('src','./poli1.jpeg')
}

else{

    img.setAttribute('src','./poli.jpeg')
}

}

