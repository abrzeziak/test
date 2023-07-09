// function name() {}

// document.body.onload = function () {}

document.addEventListener('DOMContentLoaded', function () {
    canva = document.getElementById('c1')
    if (!canva.getContext) {throw new Error('Brak f. "getContext"')}
    ccontent = canva.getContext('2d')

    // ccontent.strokeRect(400,50,50,50)
    ccontent.fillRect(400,50,50,50)
    ccontent.clearRect(410,60,30,30)

    ccontent.fillStyle = '#aa0'
    ccontent.fillRect(100,200,200,100)
    ccontent.clearRect(185,249,30,50)
    ccontent.clearRect(120,230,30,30)
    ccontent.clearRect(250,230,30,30)

    ccontent.beginPath()
    // ccontent.strokeStyle = '#642'
    ccontent.fillStyle = '#642'
    ccontent.moveTo(90,200)
    ccontent.lineTo(120,175)
    ccontent.lineTo(280,175)
    ccontent.lineTo(310,200)
    // ccontent.stroke()
    ccontent.fill()
    ccontent.closePath()
    
    ccontent.beginPath()
    ccontent.fillStyle = '#ff0'
    ccontent.arc(350,150,20,0,360)
    ccontent.fill()
    ccontent.closePath()
})
