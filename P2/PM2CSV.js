var u = document.URL.split("=");
u.pop();
u.push("getsrcpmcsv");
window.location.href = u.join("=");