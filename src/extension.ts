
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
	  vscode.window.registerWebviewViewProvider(
		"todo-sidebar",
		sidebarProvider
	  )
	);


	context.subscriptions.push(
		vscode.commands.registerCommand('todo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri); 
		})
	);


	context.subscriptions.push(
		vscode.commands.registerCommand('todo.refresh', () => {
			HelloWorldPanel.kill();
			HelloWorldPanel.createOrShow(context.extensionUri);

			setTimeout( () => {
				vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
			}, 500);

		})
	);

	context.subscriptions.push( 
		vscode.commands.registerCommand('todo.askQ', async () => {
			const answ = await vscode.window.showInformationMessage(
				'how are you doing?', 
				'good',
				 'bad');
			
			if (answ === "bad") {
				vscode.window.showInformationMessage('hope it gets better!');
			} else {
				console.log({ answ  });
			}
		})
	);


} 

export function deactivate() {}
