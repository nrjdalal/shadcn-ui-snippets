const vscode = require("vscode")

function activate(context) {
  let disposable = [
    vscode.commands.registerCommand("shadcn.ls", () => {
      // run ls command

      const terminal = vscode.window.createTerminal("shadcn")
      terminal.show()
      terminal.sendText("ls")
    }),

    vscode.commands.registerCommand("shadcn.pwd", () => {
      // run pwd command
      const terminal = vscode.window.createTerminal("shadcn")
      terminal.show()
      terminal.sendText("pwd")
    }),
  ]
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
