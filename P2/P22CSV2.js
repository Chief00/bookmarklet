var u = document.URL.split("=");
u.pop();
u.push("getsrcspcsv");
window.location.href = u.join("=");