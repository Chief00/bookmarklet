var u = document.URL.split("/");
u.pop();
var dt = new Date();
u.push(`?action=theme&from=1970-05-01T00:00:00.000Z&to=${dt.getYear()+1901}-07-13T00:00:00.000Z`);
window.location.href = u.join("/");