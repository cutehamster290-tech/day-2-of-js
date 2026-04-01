const buttons = document.querySelectorAll(".menuButton")
const effectName = "click-effect"

function animation(value, scale) {
    value.style.transform = 'scale(' + scale + ')'
}

function addEffect(value) {
    value.classList.add("onfocus")
    value.classList.add(effectName)

    setTimeout(
        function() {
            value.classList.remove(effectName)
            value.classList.remove("onfocus")
        },
        100
    );
}

function renderEffect(value) {

   if (value.classList.contains("onfocus")) {
        return
   } else {
        addEffect(value)
   }
}

function showBar() {
    document.querySelectorAll('.menuButton').forEach(btn => {
            if (btn.classList.contains("nof")) {return} else {
                btn.hidden = !btn.hidden
            }
        }
    )
}

function changeArrow(value) {
    if (value.textContent === ">") {
        addEffect(value)
        value.textContent = '<'
    } else {
        value.textContent = '>'
    }
}

buttons.forEach(
    function(value, index) {
        value.addEventListener(
            "click", function() {
                renderEffect(value)
            }
        )
    }
)

/*
let i=0

while (i<buttons.length) {
    const div = document.querySelector(".mainMenu")
    buttons.forEach(
        function(value, index) {
            const valueText = value.textContent
            const valueClass = value.classList
            const onmouseover = value.getAttribute("onmouseover")
            const onmouseout = value.getAttribute("onmouseout")
            value.remove()

            const [class1, class2] = valueClass
            const classConfig = `<button${class1, class2, onmouseover, onmouseout}>`
            
            const textConfig = `${valueText}</button>`
            const html = classConfig + textConfig
            div.innerHTML += html

        }

    )
    i+=3
}
*/