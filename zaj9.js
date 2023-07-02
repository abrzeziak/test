// --form valid.--
function fcheck(a) {
    a.style.backgroundColor = '#fff'
    if (isNaN(a.value) || a.value<0 || a.value>120) {
        alert(a.value+' nie jest wiekiem człowieka. Podaj poprawną wartość.')
    }
    else {
        console.log(a.value)
    }
}
function ffocus(a) {
    a.style.backgroundColor = '#afa'
}

// --Card menu--
function over(b) {
    // console.log(b)
    y = document.getElementsByClassName('i')
    // console.log(y)

    for (x=0; x<y.length; x++) {
        y[x].style.visibility = 'hidden'
    }
    
    iId = b.nextElementSibling.getAttribute('id')
    console.log(iId)
    i = document.getElementById(iId)
    i.style.visibility = 'visible'
}
function out(c) {
    c.style.visibility = 'hidden'
}