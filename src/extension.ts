
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';


export function activate(context: vscode.ExtensionContext) {

	console.log('ToDo is active!');
	context.subscriptions.push(
		vscode.commands.registerCommand('todo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri); 
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
