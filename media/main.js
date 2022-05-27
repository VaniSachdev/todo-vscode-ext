

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    // communicated w extension
    const vscode = acquireVsCodeApi();

    const button = document.getElementById('button');
    console.log("hello there from JS!");
    

}());

