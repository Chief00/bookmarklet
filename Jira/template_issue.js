var template_issue = [
  {
    style: "h1",
    text: "Summary",
  },
  {
    style: "p",
    text: "",
  },
  {
    style: "hr",
    text: "",
  },
  {
    style: "h1",
    text: "Details",
  },
  {
    style: "p",
    text: "",
  },
  {
    style: "hr",
    text: "",
  },
  {
    style: "h1",
    text: "User Stories",
  },
  {
    style: "p",
    text: "As a (who wants to accomplish something)\nI want to (what they want to accomplish)\nSo that (why they want to accomplish that thing)",
  },
  {
    style: "hr",
    text: "",
  },
  {
    style: "h1",
    text: "Acceptance Criteria",
  },
  {
    style: "p",
    text: "",
  },
  {
    style: "hr",
    text: "",
  },
];
// If the create issue diaglog is open
if (document.getElementById("create-issue-dialog") != null) {
  // This is for creating a new issue from the create button
  var description = document.getElementById("description");
  for (var i = 0; i < template_issue.length; i++) {
    // paragraph is just the text
    if (template_issue[i]["style"] == "p") {
      var issue = template_issue[i]["text"];
      // line break is ----
    } else if (template_issue[i]["style"] == "hr") {
      var issue = "----";
      // Headers are the header style plus a period and space, then the text
    } else {
      var issue = template_issue[i]["style"] + ". " + template_issue[i]["text"];
    }
    // append new line after each one
    description.value += issue + "\n";
  }
} else {
  // This is for creating a new issue from the backlog
  var description = document.querySelector('[aria-label="Main content area"]');
  if (description.childElementCount == 1) {
    description.removeChild(description.firstChild);
  }
  for (var i = 0; i < template_issue.length; i++) {
    // Divider element
    if (template_issue[i]["style"] == "hr") {
      var e = document.createElement(template_issue[i]["style"]);
      // creating attributes for divider element
      var attr_class = document.createAttribute("class");
      var attr_content = document.createAttribute("contenteditable");
      attr_content.value = "false";
      // attaching attributes to element
      e.setAttributeNode(attr_class);
      e.setAttributeNode(attr_content);
    } else {
      // Create headers
      var e = document.createElement(template_issue[i]["style"]);
      e.innerHTML = template_issue[i]["text"];
    }
    description.appendChild(e);
  }
}
