let t = document.getElementById('target');
t.addEventListener('click', alert_one);
function alert_one() { alert(1); };
t.addEventListener('click',alert_two);
function alert_two() { alert(2); };
