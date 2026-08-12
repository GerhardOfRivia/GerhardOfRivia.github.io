/*
 * TIME AND DATE
 */
function getTime() {
    var spacetime = document.getElementById("spacetime");
    if (!spacetime) {
        return;
    }

    var currentTime = new Date();
    var hour    = currentTime.getHours();
    var min     = currentTime.getMinutes();
    var sec     = currentTime.getSeconds();
    var time    = ((hour < 10) ? "0" : "") + hour;
    time += ((min < 10) ? ":0" : ":") + min;
    time += ((sec < 10) ? ":0" : ":") + sec;

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var nam     = currentTime.getDay();
    var day     = currentTime.getDate();
    var mon     = currentTime.getMonth();
    var yer     = currentTime.getFullYear();
    var date    = dayNames[nam] + " " + monthNames[mon] + " " + day + " " + yer;

    spacetime.textContent = time + " " + date;
}

function addChatMessage(container, text, role) {
    var message = document.createElement("p");
    message.className = "chat-message chat-message--" + role;
    message.textContent = text;
    container.appendChild(message);
}

function setupChat() {
    var form = document.getElementById("chat-form");
    var input = document.getElementById("chat-input");
    var messages = document.getElementById("chat-messages");

    if (!form || !input || !messages) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var prompt = input.value.trim();
        if (!prompt) {
            return;
        }

        var hint = messages.querySelector(".chat-panel__hint");
        if (hint) {
            hint.remove();
        }

        addChatMessage(messages, prompt, "user");
        addChatMessage(messages, "I'm sorry, Dave. I'm afraid I can't do that.", "assistant");
        input.value = "";
        input.focus();
        messages.scrollTop = messages.scrollHeight;
    });
}


function switchThemeToDark() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (window.matchMedia('(prefers-color-scheme: dark)').matches || currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    switchThemeToDark();
}

document.addEventListener("DOMContentLoaded", function () {
    getTime();
    setupChat();
    setInterval(getTime, 1000);
});
