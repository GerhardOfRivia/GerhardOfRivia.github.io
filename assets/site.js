/*
 * GOOGLE ANALYTICS
 */ 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-81176820-1', 'auto');
ga('send', 'pageview');

/*
 * TIME AND DATE
 */
function getTime(){
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

    document.getElementById("spacetime").innerHTML = time + " " + date;
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

// get time once so as to avoid 1s delay
getTime();
setInterval(getTime, 1000);
