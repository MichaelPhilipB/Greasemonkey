// ==UserScript==
// @name           webster_username
// @namespace      mpb
// @description    Fill in the user name at the Webster Bank site.
// @include        https://www.websteronline.com/personal/personal-homepage.html
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

function main()
{
  //alert('webster');

  getElementById('userid').setAttribute('autocomplete', 'on');
  getElementById('fakeusername').setAttribute('autocomplete', 'on');

  getElementById('userid').setAttribute('value', 'mpb123');

  getElementById('logonbox').submit();
}

main();
