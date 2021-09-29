var u = document.URL.split("/").slice(0,4);
u.push("version", "about.faces");
window.location.href = u.join("/");