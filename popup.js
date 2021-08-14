// let bgpage = chrome.extension.getBackgroundPage();
//
// let level = bgpage.lvl.trim();

chrome.storage.local.get("t_lvl", function(data) {
    var circ = document.getElementById("circ");
    if(typeof data.t_lvl == "undefined") {
        circ.className = '';

        circ.classList.add("center");
        circ.classList.add("orange");
        circ.classList.add("c100");
        circ.classList.add("p"+data.t_lvl.replace('%',''));

        document.getElementById('lvl').innerHTML = "0%";
    } else {
        circ.className = '';

        circ.classList.add("center");
        circ.classList.add("orange");
        circ.classList.add("c100");
        circ.classList.add("p"+data.t_lvl.replace('%',''));
        document.getElementById('lvl').innerHTML = data.t_lvl;
    }
});
