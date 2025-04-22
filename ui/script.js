let currentTitle = "";
let currentMaxCount = 0;
let currentIcon = "";
let currentColor = "";

window.addEventListener("message", function (event) {
    var e = event.data
    if (e.action === "showTask") {
        appendProgTaskUI(e.title, e.count, e.maxcount, e.icon, e.color);
    } else if (e.action === "showSimpleTask") {
        showSimpleTaskUI(e.title, e.message);
    } else if (e.action === "cancelSimpleTask") {
        cancelSimpleTask();
    }
});

function updateTask() {
    window.postMessage({
        action: "showTask",
        count: 6
    });
}

function appendProgTaskUI(title, count, maxcount, icon, color) {
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
        if (count !== currentMaxCount) {
            const newContent = `
                <div class="left-part-cont">
                    <i class="${currentIcon}"></i>
                </div>
                <div class="right-part-cont">
                    <div class="prog-title">${currentTitle}</div>
                    <div class="progbar-container">
                        <div class="progbar-progress" style="width: ${progressBarWidth}vw; background-color: ${currentColor}"></div>
                    </div>
                    <div class="task-info">${count}/${currentMaxCount}</div>
                </div>`;
            container.innerHTML = newContent;
        } else {
            const newContent = `
                <div class="left-part-cont">
                    <div class="success-animation" style="width:5vw; height: 4.5vw;">
                         <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" height="4.5vw" width="5vw" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                    </div>
                </div>
                <div class="right-part-cont">
                    <div class="prog-title">${currentTitle}</div>
                    <div class="progbar-container">
                        <div class="progbar-progress" style="width: ${progressBarWidth}vw; background-color: ${currentColor}"></div>
                    </div>
                    <div class="task-info">${count}/${currentMaxCount}</div>
                </div>`;
            container.innerHTML = newContent;
            setTimeout(() => {
                container.style.display = 'none'
                container.innerHTML = "";
                 currentTitle = "";
                 currentMaxCount = 0;
                 currentIcon = "";
                 currentColor = "";
            }, 3000);
        }
}

function showSimpleTaskUI(title, message) {
    const container = document.querySelector(".simple-task-container");
    container.style.display = 'none';
    container.innerHTML = "";
    container.style.display = 'flex';
    container.classList.remove("fade-in");
    void container.offsetWidth;
    container.classList.add("fade-in");
    let content = message;
    const newContent = `
        <div class="simple-task-box">
            <div class="simple-task-header">
                <h2>${title}</h2>
            </div>
            <div class="simple-task-message">
                <h3>${content}</h3>
            </div>
        </div>`;

    container.innerHTML = newContent;
}

function cancelSimpleTask() {
    const container = document.querySelector(".simple-task-container");
    container.style.display = 'none';
    container.innerHTML = "";
}
