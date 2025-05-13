
document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById("colorSelect").value = savedColor;
    }

    initiateAnimations();
});


document.getElementById("saveBtn").addEventListener("click", () => {
    const selectedColor = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("bgColor", selectedColor);
    alert("✅ Background color saved!");
});

function initiateAnimations() {
 

    const box1 = document.getElementById("animatedBox1");
    box1.addEventListener("click", () => {
        addAnimation(box1, "bounce");
    });

    const box2 = document.getElementById("animatedBox2");
    box2.addEventListener("click", () => {
        addAnimation(box2, "fade");
    });

    const box3 = document.getElementById("animatedBox3");
    box3.addEventListener("click", () => {
        addAnimation(box3, "slide");
    });


    function addAnimation(element, animationName) {
        element.style.animation = ""; 
        void element.offsetWidth; 
        element.style.animation = `${animationName} 1s`;

        element.addEventListener("animationend", () => {
            element.style.animation = "";
        }, {
            once: true
        });
    }


    const animatedButton = document.getElementById("animatedButton");
    animatedButton.addEventListener("click", () => {
        animatedButton.classList.add("pulse");
        animatedButton.addEventListener("animationend", () => {
            animatedButton.classList.remove("pulse");
        }, {
            once: true
        });
    });
}