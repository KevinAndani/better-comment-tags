import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Register command to apply the comment tags
  let disposable = vscode.commands.registerCommand(
    "better-comment-tags.apply",
    () => {
      const config = vscode.workspace.getConfiguration();

      // Define your custom tags
      const customTags = [
        {
          tag: "//",
          color: "#6272a4", // **Dracula Comment Color - Keep this subdued as default
          strikethrough: true,
          underline: false,
          backgroundColor: "transparent",
        },
        {
          tag: "EXPLAIN:",
          // "color": "#bd72ff", // **Dracula Comment Color - Keep this subdued as default
          color: "#ff70b3",
          strikethrough: false,
          underline: false,
          backgroundColor: "transparent",
        },
        {
          tag: "TODO:",
          color: "#ffc66d", // **Brighter Dracula Orange - More Saturation** -  Increased pop against code
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "FIXME:",
          color: "#ff6e6e", // **Brighter Dracula Red - More Saturation** -  Even more attention-grabbing red
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "BUG:",
          color: "#f8f8f2", // Dracula Foreground (White-ish) - Keep for text visibility
          strikethrough: false,
          backgroundColor: "#bb80ff", // **Slightly Brighter Dracula Purple BG** - More prominent purple background
        },
        {
          tag: "HACK:",
          color: "#ffffa5", // **Brighter Dracula Yellow - Pure Yellow Tone** - Clear Yellow warning
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "NOTE:",
          color: "#94f0ff", // **Brighter Dracula Cyan -  More Luminous Cyan** -  Highly visible cyan
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "INFO:",
          color: "#c798e6", // **Brighter Dracula Green - More Vibrant Green** -  Livelier green for info
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "IDEA:",
          color: "#80ffce", // **Lighter & More Saturated Dracula Purple** - More Pastel Purple - Softer but still distinct idea color
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "DEBUG:",
          color: "#ff2975", // **Dracula Pink - Stands out but not as urgent as FIXME/BUG
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "WHY:",
          color: "#ff9580", // Coral/salmon - completely distinct from code colors
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "CONTEXT:",
          color: "#d8ff80", // Lime - unique from other colors
          strikethrough: false,
          backgroundColor: "transparent",
        },
        {
          tag: "CRITICAL:",
          color: "#FFFFFF", // White text
          strikethrough: false,
          backgroundColor: "#9F1239", // Deep red background
        },
      ];

      // Apply the configuration
      config.update(
        "better-comments.tags",
        customTags,
        vscode.ConfigurationTarget.Global
      );

      vscode.window.showInformationMessage(
        "Enhanced comment tags applied successfully!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
