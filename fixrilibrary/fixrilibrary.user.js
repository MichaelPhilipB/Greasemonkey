// ==UserScript==
// @name          Fix RI Library
// @namespace     http://mebrady.net/
// @description   Script to fix up the RI Library site.
// @include       http://library.provlib.org/search/*/request*
// @include       https://catalog.oslri.net/iii/cas/login?*
// ==/UserScript==

function findElem(tagName, attrName, attrValue)
{
  var allElems = document.getElementsByTagName(tagName);
  var theElem = null;
  for (var i = 0; i < allElems.length; i++) {
    if (allElems[i].getAttribute(attrName) == attrValue) {
      if (theElem != null) {
        var msg = "Error trying to find a node of type '" + tagName + "' " +
	  "with a(n) '" + attrName + "' with a value of '" + attrVal + "'. " +
	  "I expected to only find one node, but multiple nodes were found.";
	GM_log(msg);
	alert(msg);
      } 
      theElem = allElems[i];
    }
  }
  return theElem;
}


// Change the bar code field to be of type 'text' instead of 'password'
// so Firefox will use autocomplete on it.
var codeField = findElem('input', 'name', 'code');
if (codeField != null) {
  codeField.setAttribute("type", "text");
  //codeField.setAttribute("value", "21332000611212");
  codeField.setAttribute("value", "21332000671604");
}

// Change the PIN field to be of type 'text' instead of 'password'
// so Firefox will use autocomplete on it.
var pinField = findElem('input', 'name', 'pin');
if (pinField != null) {
  pinField.setAttribute("type", "text");
  pinField.setAttribute("value", "1234");
}
