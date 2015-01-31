// ==UserScript==
// @name           webster_gotoexport
// @namespace      mpb
// @description    Redirect to the Webster Bank export page.
// @include        https://www.websteronline.com/bank/ds?action=df_accountbalances-AccountBalance
// ==/UserScript==

function main()
{
  window.location.href = "https://www.websteronline.com/bank/com.websterbank.servlets.DS?action=df_transaction-ExportList";
}

main();
