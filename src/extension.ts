import * as vscode from "vscode";

// The Better Comments tag configuration based on your settings
const enhancedCommentTags = [
  {
    tag: "//",
    color: "#6272a4",
    strikethrough: true,
    underline: false,
    backgroundColor: "transparent",
  },
  {
    tag: "EXPLANATION:",
    color: "#ff70b3",
    strikethrough: false,
    underline: false,
    backgroundColor: "transparent",
  },
  {
    tag: "TODO:",
    color: "#ffc66d",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "FIXME:",
    color: "#ff6e6e",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "BUG:",
    color: "#f8f8f2",
    strikethrough: false,
    backgroundColor: "#bb80ff",
  },
  {
    tag: "HACK:",
    color: "#ffffa5",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "NOTE:",
    color: "#94f0ff",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "INFO:",
    color: "#c798e6",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "IDEA:",
    color: "#80ffce",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "DEBUG:",
    color: "#ff2975",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "WHY:",
    color: "#ff9580",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "WHAT THIS DO:",
    color: "#FBBF24",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "CONTEXT:",
    color: "#d8ff80",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "CRITICAL:",
    color: "#FFFFFF",
    strikethrough: false,
    backgroundColor: "#9F1239",
  },
  {
    tag: "REVIEW:",
    color: "#A5B4FC",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "OPTIMIZE:",
    color: "#4ADE80",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "SECTION:",
    color: "#f1a18e",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "NEXT STEP:",
    color: "#ba6645",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "SECURITY:",
    color: "#cff028",
    strikethrough: false,
    backgroundColor: "#44475a",
  },
  {
    tag: "PERFORMANCE:",
    color: "#d7ffad",
    strikethrough: false,
    backgroundColor: "transparent",
  },
  {
    tag: "DEPRECATED:",
    color: "#8b8098",
    strikethrough: true,
    backgroundColor: "#44475a",
  },
  {
    tag: "API:",
    color: "#c798e6",
    strikethrough: false,
    backgroundColor: "transparent",
  },
];

export function activate(context: vscode.ExtensionContext) {
  console.log("Better Comments Enhanced is now active");

  // Check if Better Comments is installed
  const betterCommentsExtension = vscode.extensions.getExtension(
    "aaron-bond.better-comments"
  );
  if (!betterCommentsExtension) {
    vscode.window.showErrorMessage(
      "Better Comments Enhanced requires the Better Comments extension. Please install it first."
    );
    return;
  }

  // Apply enhanced comment styles when extension activates
  applyEnhancedCommentStyles();

  // Register command to manually apply styles
  const disposable = vscode.commands.registerCommand(
    "better-comments-enhanced.applyStyles",
    () => {
      applyEnhancedCommentStyles();
      vscode.window.showInformationMessage(
        "Enhanced comment styles applied successfully!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

function applyEnhancedCommentStyles() {
  const betterCommentsConfig =
    vscode.workspace.getConfiguration("better-comments");
  betterCommentsConfig
    .update("tags", enhancedCommentTags, vscode.ConfigurationTarget.Global)
    .then(
      () => {
        console.log("Enhanced comment styles applied successfully");
      },
      (error) => {
        console.error("Error applying enhanced comment styles:", error);
        vscode.window.showErrorMessage(
          "Failed to apply enhanced comment styles. Check console for details."
        );
      }
    );
}

export function deactivate() {}
