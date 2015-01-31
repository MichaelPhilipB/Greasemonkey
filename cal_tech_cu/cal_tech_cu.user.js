// ==UserScript==
// @name           cal_tech_cu
// @namespace      mpb
// @description    Log in to the Cal Tech CU site.
// @include        https://www.cefcuonline.org/
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

function main()
{
  getElementByName('userid').value = 'mpb123';
  getElementByName('password').value = getPassword();

  var form = getElementByName('Login');
  form.submit();
}

// Lots of stuff happens in the body onload, so this makes our main()
// function run after that.
window.addEventListener("load", main, false);
