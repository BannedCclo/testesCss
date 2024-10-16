console.log('teste')

let lastDotTime = 0
const interval = 100
const colors = ['#fff', '#2f2', '#2f2']
const animations = ['fall1 .55s ease-in', 'fall2 .55s ease-in', 'fall3 .55s ease-in']
const body = document.querySelector("body");

document.addEventListener('click', (e) => {

    const explosion = document.createElement("div");
    explosion.classList.add("explosion")

    explosion.innerHTML = '<i class="fa-brands fa-whatsapp"></i>'

    let explosionX = e.x - body.getBoundingClientRect().left;
    let explosionY = e.y - body.getBoundingClientRect().top;

    let finalExplosionX = explosionX - explosion.offsetWidth / 2;
    let finalExplosionY = explosionY - explosion.offsetHeight / 2;

    explosion.style.top = `${finalExplosionY}px`;
    explosion.style.left = `${finalExplosionX}px`;

    document.body.appendChild(explosion)

    setTimeout(() => {
        explosion.remove()
    }, 500)

})

window.onmousemove = e =>{

    const currentTime = Date.now()

    const glow = document.createElement("div");
    glow.classList.add("glow")

    let glowX = e.x - body.getBoundingClientRect().left;
    let glowY = e.y - body.getBoundingClientRect().top;

    let finalGlowX = glowX - glow.offsetWidth / 2;
    let finalGlowY = glowY - glow.offsetHeight / 2;

    glow.style.top = `${finalGlowY}px`;
    glow.style.left = `${finalGlowX}px`;

    document.body.appendChild(glow)

    setTimeout(() => {
        glow.remove()
    }, 100)

    if (currentTime - lastDotTime > interval) {
        lastDotTime = currentTime;

    const element = document.createElement("div");
    element.classList.add("dot")
    
    
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    element.style.textShadow = `0px 0px 10px ${randomColor}`
    element.style.color = randomColor

    element.style.animation = randomAnimation
    element.innerHTML = '<i class="fa-brands fa-whatsapp"></i>'

    let axisX = e.x - body.getBoundingClientRect().left;
    let axisY = e.y - body.getBoundingClientRect().top;

    let finalX = axisX - element.offsetWidth / 2;
    let finalY = axisY - element.offsetHeight / 2;

    element.style.top = `${finalY}px`;
    element.style.left = `${finalX}px`;

    document.body.appendChild(element)

    //console.log(body.childNodes)

    setTimeout(() => {
        element.remove()
    }, 500)

}
 
}