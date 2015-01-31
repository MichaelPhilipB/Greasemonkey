// ==UserScript==
// @name           hrpassport
// @namespace      mpb
// @description    Log in to the HR Passport site.
// @include        https://www.hrpassport.com/Link2HR.eng?/Saf/Entry/Signon-form.htm
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
  getElementByName('Pers_Key').setAttribute('value', '00001072906');
  getElementByName('Pin').setAttribute('value', getPassword());

  window.wrappedJSObject.ffSignonOnSubmit();
  getElementByName('SWLogonForm').submit();
}

main();
