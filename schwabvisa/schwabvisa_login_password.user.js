// ==UserScript==
// @name           schwabvisa_login_password.user.js
// @namespace      mpb
// @description    Log in to the Schwab Visa site.
// @include        https://www.ibsnetaccess.com/NASApp/NetAccess/verifyCustAdditionalInfo.action
// ==/UserScript==

function getPassword()
{
  var password = GM_getValue('password');

  if (!password) {
    password = prompt('What password shall we use to log in here?');
    if (password) {
      GM_setValue('password', password);
    }
  }

  return password;
}

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
  getElementByName("password").setAttribute("value", getPassword());

  getElementById("pwd_form.id").submit();
}

main();
