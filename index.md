# Welcome to Josh's Bookmarklets

## Contents
* [Bookmarklets](#bookmarklets)
* [Jira](#jira)
* [OneView](#oneview)
* [P2](#p2)

## Bookmarklets
A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. All my bookmarklets are auto updating, so you will always have the latest version.

### Adding a Bookmarklet
For ease of use all you have to do is drag the link to the bookmark into your bookmark toolbar
![adding a bookmark](https://gosnippet.com/blog-img/bookmarklet_anim.gif)

## Jira
I have created some bookmarklets that will make using Jira easier

### Template Bug
This is a description template for the issue type Bug.
<a href="javascript:void%20function(e){var%20a=function(e){e.getScript(%22https://chief00.github.io/Jira/template_bug.js%22,function(){})},t=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(t)a(e);else{var%20n=document.createElement(%22script%22);n.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,n.onload=n.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||a(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(n)}(window.jQuery);">\[Jira\] Bug Template</a>

### Template Issue
This is a description template for the issue type Story.
<a href="javascript:void%20function(e){var%20a=function(e){e.getScript(%22https://chief00.github.io/Jira/template_issue.js%22,function(){})},t=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(t)a(e);else{var%20n=document.createElement(%22script%22);n.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,n.onload=n.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||a(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(n)}(window.jQuery);">\[Jira\] Story Template</a>

## OneView

### Themer
This themes the current project
<a href="javascript:void%20function(e){var%20a=function(e){e.getScript(%22https://chief00.github.io/OneView/Themer.js%22,function(){})},t=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(t)a(e);else{var%20n=document.createElement(%22script%22);n.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,n.onload=n.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||a(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(n)}(window.jQuery);">[OV] Themer</a>

### Version Number
This gets the version number of the current OneView
<a href="javascript:void%20function(e){var%20a=function(e){e.getScript(%22https://chief00.github.io/OneView/VersionNumber.js%22,function(){})},t=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(t)a(e);else{var%20n=document.createElement(%22script%22);n.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,n.onload=n.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||a(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(n)}(window.jQuery);">[OV] Version Number</a>

## P2
These scripts will not auto update, you will find the latest version here

### 1000 Results
This returns 1000 results when in the P2 project JSON view
<a href="javascript:void%20function(){var%20n=document.URL;n=n.split(%22%3F%22)[0],n+=%22%3Fact=s%26n=1000%26q=%2522t%253E2000/01/01%252000:00:00%2522%22,window.location.href=n}();">[P2] 1000 Results</a>

### Property Maps to CSV
This exports all the property maps to a CSV file
<a href="javascript:void%20function(){var%20o=document.URL.split(%22=%22);o.pop(),o.push(%22getsrcpmcsv%22),window.location.href=o.join(%22=%22)}();">[P2] PM2CSV</a>

### Source Paths to CSV
This exports all the property maps to a CSV file
<a href="javascript:void%20function(){var%20o=document.URL.split(%22=%22);o.pop(),o.push(%22getsrcspcsv%22),window.location.href=o.join(%22=%22)}();">[P2] SP2CSV</a>