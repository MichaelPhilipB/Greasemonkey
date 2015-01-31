// ==UserScript==
// @name           webster_export
// @namespace      mpb
// @description    Export a quicken file at the Webster Bank site.
// @include        https://www.websteronline.com/bank/com.websterbank.servlets.DS
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
  getElementByName('history_form').submit();
}

main();
