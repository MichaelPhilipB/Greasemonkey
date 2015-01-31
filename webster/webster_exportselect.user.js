// ==UserScript==
// @name           webster_exportselect
// @namespace      mpb
// @description    Select the kind of export at the Webster Bank site.
// @include        https://www.websteronline.com/bank/com.websterbank.servlets.DS?action=df_transaction-ExportList
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
  getElementById('export_type').selectedIndex = 1;
  getElementById('lastStatement').checked = true;

  getElementByName('export_form').submit();
}

main();
