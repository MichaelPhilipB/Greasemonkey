// ==UserScript==
// @name           webster_password
// @namespace      mpb
// @description    Fill in the password at the Webster Bank site.
// @include        https://www.websteronline.com/bank/login
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
  //alert('webster password');

  getElementById('password').setAttribute('value', getPassword());
  getElementById('ff').submit();
}

main();
