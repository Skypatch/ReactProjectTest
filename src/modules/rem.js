function SetFont () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px' ;
}

SetFont()

window.onresize = SetFont
