(function(){"use strict";const s=require("electron").ipcRenderer;let r=!1;const o={onElectron:!0,useParentPostMessage:!0,postMessage:(e,n)=>{s.sendToHost(e,n)},onMessage:(e,n)=>{s.on(e,n)},focusIframeOnCreate:!0,onIframeLoaded:e=>{e.contentWindow.onbeforeunload=()=>r?(o.postMessage("do-reload"),!1):(console.log("prevented webview navigation"),!1);let n=!1;e.contentWindow.addEventListener("mousedown",()=>{n=!0});const d=t=>{n||o.postMessage("synthetic-mouse-event",{type:t.type,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY})};e.contentWindow.addEventListener("mouseup",t=>{d(t),n=!1}),e.contentWindow.addEventListener("mousemove",d)},rewriteCSP:e=>e.replace(/vscode-resource:(?=(\s|;|$))/g,"vscode-webview-resource:")};o.onMessage("devtools-opened",()=>{r=!0}),document.addEventListener("DOMContentLoaded",e=>{window.onmessage=n=>{s.sendToHost(n.data.command,n.data.data)}}),require("../../browser/pre/main")(o)})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c185983a683d14c396952dd432459097bc7f757f/core/vs/workbench/contrib/webview/electron-browser/pre/electron-index.js.map
