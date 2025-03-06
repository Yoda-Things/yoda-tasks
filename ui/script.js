let currentTitle = "";
let currentMaxCount = 0;
let currentIcon = "";
let currentColor = "";

window.addEventListener("message", function (event) {
    var e = event.data
    if (e.action === "showTask") {
        if (e.count !== undefined) {
            appendProgTaskUI(null, e.count);
        }
        else {
            appendProgTaskUI(e.title, e.count, e.maxcount, e.icon, e.color);
        }
    }
});

function test() {
    appendProgTaskUI("Pickup the garbage cans", 5, 10, "fa-solid fa-truck-field", "rgb(0,255,170)")
}

function updateTask() {
    window.postMessage({
        action: "showTask",
        count: 6
    });
}

function appendProgTaskUI(title, count, maxcount, icon, color) {
    if (count !== maxcount) {
        if (title !== null) currentTitle = title;
        if (maxcount !== undefined) currentMaxCount = maxcount;
        if (icon !== undefined) currentIcon = icon;
        if (color !== undefined) currentColor = color;
        const container = document.querySelector(".prog-task-container");
        container.style.display = 'none'
        container.innerHTML = "";
        container.style.display = 'flex'
        container.classList.remove("fade-in");
        void container.offsetWidth;
        container.classList.add("fade-in");
        const progressBarWidth = 16.5 * (count / currentMaxCount);
        const newContent = `
            <div class="left-part-cont">
                <i class="${currentIcon}"></i>
            </div>
            <div class="right-part-cont">
                <div class="prog-title">${currentTitle}</div>
                <div class="progbar-container">
                    <div class="progbar-progress" style="width: ${progressBarWidth}vw"></div>
                </div>
                <div class="task-info">${count}/${currentMaxCount}</div>
            </div>
        `;

        container.innerHTML = newContent;
    } else {
        container.innerHTML = ""
        container.style.display = 'none'
    }
}
