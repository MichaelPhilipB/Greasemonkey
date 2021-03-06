// ==UserScript==
// @name           schwabvisa_login.user.js
// @namespace      mpb
// @description    Log in to the Schwab Visa site.
// @include        https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay
// ==/UserScript==

function getElementById(id)
{
  var element = document.getElementById(id);
  if (!element) {
    alert('Error: Element "' + id + '" not found.');
  }
  return element;
}

function getElementByName(name)
{
  var elements = document.getElementsByName(name);
  if (elements.length != 1) {
    alert('Error: Expected to find one element named "' + name + '", ' +
          'but found ' + elements.length + '.');
  }
  return elements.item(0);
}

function getElementByTagName(tagName)
{
  var elements = document.getElementsByTagName(tagName);
  if (elements.length != 1) {
    alert('Error: Expected to find one element with tag "' + name + '", ' +
          'but found ' + elements.length + '.');
  }
  return elements.item(0);
}

function main()
{
  getElementByName("username").setAttribute("value", "mpb234");

  getElementByTagName("form").submit();
}

main();
