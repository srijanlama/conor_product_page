// DocumentTimeline
function getFrameSize(h, w, p) {
    let potrait_holder = document.getElementById('potrait-holder')
    let price = document.getElementById('price')
    potrait_holder.style.height = `${h}px`
    potrait_holder.style.width = `${w}px`
    price.innerText = p;

}

function changeMatColor(hex) {
    let mat_color = document.getElementById('image-content')
    mat_color.style.border = `9px solid ${hex}`;
}

function clearFrame(e) {
    console.log('hello');
    e.preventDefault();
    let frame_image = document.getElementById('frame_image')
    frame_image.style.display = "none"
    return false
}
//
let frame_link = document.querySelectorAll('.frame-link')
frame_link.forEach((element, index) => {
    // console.log(element);
    element.addEventListener('click', function() {
        // let img = element.firstChild.innerHtML;
        let current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace("active", "");
        element.childNodes[0].className += "active";
        console.log(element.childNodes[0]);
        document.getElementById('frame_image').src = `./images/frame/frame-${index + 1}.png`
    })
})