const u = document.URL;
const uri_regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
const uri = u.match(uri_regex);
const new_u = `https://app.ddc-as.com/bsd-gather/servlet/${uri}.pjson?act=s&n=1000&q=%22t%3E2000/01/01%2000:00:00%22`;
window.location.href = new_u;
