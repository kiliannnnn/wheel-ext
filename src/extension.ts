import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        ['javascript', 'typescript'],
        {
            provideCompletionItems(document, position, token, context) {
                const stringUtilities = [
                    {
                        label: 'toTitleCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a string to title case (e.g., "hello world" -> "Hello World").'
                    },
                    {
                        label: 'reverse',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Reverses the characters in a string (e.g., "hello" -> "olleh").'
                    },
                    {
                        label: 'containsIgnoreCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Checks if a string contains a substring, ignoring case.'
                    },
                    {
                        label: 'truncate',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Truncates a string to a specified length and adds ellipsis if needed.'
                    },
                    {
                        label: 'toSnakeCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a string to snake_case.'
                    },
                    {
                        label: 'toPascalCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a string to PascalCase.'
                    },
                    {
                        label: 'toCamelCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a string to camelCase.'
                    },
                    {
                        label: 'toKebabCase',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a string to kebab-case.'
                    },
                ];

                const arrayUtilities = [
                    {
                        label: 'chunk',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Splits an array into chunks of the specified size.'
                    },
                    {
                        label: 'average',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Calculates the average of numerical values in an array.'
                    },
                    {
                        label: 'unique',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Removes duplicate elements from an array.'
                    },
                    {
                        label: 'flatten',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Flattens a nested array into a single-level array.'
                    },
                    {
                        label: 'groupBy',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Groups array elements by a callback function.'
                    },
                ];

                const objectUtilities = [
                    {
                        label: 'deepClone',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Creates a deep clone of an object.'
                    },
                    {
                        label: 'merge',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Merges two objects, combining their properties.'
                    },
                ];

                const numberUtilities = [
                    {
                        label: 'clamp',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Clamps a number within a specified range.'
                    },
                    {
                        label: 'isPrime',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Checks if a number is prime.'
                    },
                    {
                        label: 'toOrdinal',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a number to its ordinal form (e.g., 1 -> "1st").'
                    },
                    {
                        label: 'toRoman',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Converts a number to Roman numerals.'
                    },
                ];

                const dateUtilities = [
                    {
                        label: 'isWeekend',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Checks if a date falls on a weekend.'
                    },
                    {
                        label: 'addDays',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Adds the specified number of days to a date.'
                    },
                    {
                        label: 'startOfWeek',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Gets the start of the week for a given date.'
                    },
                    {
                        label: 'format',
                        kind: vscode.CompletionItemKind.Function,
                        documentation: 'Formats a date into a specified format (default: "yyyy-mm-dd").'
                    },
                ];

                const allUtilities = [
                    ...stringUtilities,
                    ...arrayUtilities,
                    ...objectUtilities,
                    ...numberUtilities,
                    ...dateUtilities,
                ];

                const completionItems = allUtilities.map(util => {
                    const item = new vscode.CompletionItem(util.label, util.kind);
                    item.documentation = util.documentation;
                    return item;
                });

                return completionItems;
            }
        },
        '.'
    );

    const hoverProvider = vscode.languages.registerHoverProvider(
        ['javascript', 'typescript'], 
        {
            provideHover(document, position, token) {
                const wordRange = document.getWordRangeAtPosition(position);
                const word = document.getText(wordRange);

                const stringUtilities: Record<string, string> = {
                    toTitleCase: 'Converts a string to title case (e.g., "hello world" -> "Hello World").',
                    reverse: 'Reverses the characters in a string (e.g., "hello" -> "olleh").',
                    containsIgnoreCase: 'Checks if a string contains a substring, ignoring case.',
                    truncate: 'Truncates a string to a specified length and adds ellipsis if needed.',
                    toSnakeCase: 'Converts a string to snake_case.',
                    toPascalCase: 'Converts a string to PascalCase.',
                    toCamelCase: 'Converts a string to camelCase.',
                    toKebabCase: 'Converts a string to kebab-case.',
                };

                const arrayUtilities: Record<string, string> = {
                    chunk: 'Splits an array into chunks of the specified size.',
                    average: 'Calculates the average of numerical values in an array.',
                    unique: 'Removes duplicate elements from an array.',
                    flatten: 'Flattens a nested array into a single-level array.',
                    groupBy: 'Groups array elements by a callback function.',
                };

                const objectUtilities: Record<string, string> = {
                    deepClone: 'Creates a deep clone of an object.',
                    merge: 'Merges two objects, combining their properties.',
                };

                const numberUtilities: Record<string, string> = {
                    clamp: 'Clamps a number within a specified range.',
                    isPrime: 'Checks if a number is prime.',
                    toOrdinal: 'Converts a number to its ordinal form (e.g., 1 -> "1st").',
                    toRoman: 'Converts a number to Roman numerals.',
                };

                const dateUtilities: Record<string, string> = {
                    isWeekend: 'Checks if a date falls on a weekend.',
                    addDays: 'Adds the specified number of days to a date.',
                    startOfWeek: 'Gets the start of the week for a given date.',
                    format: 'Formats a date into a specified format (default: "yyyy-mm-dd").',
                };

                // Check if the word is one of the utility function names and return the documentation
                if (stringUtilities[word]) {
                    return new vscode.Hover(stringUtilities[word]);
                }
                if (arrayUtilities[word]) {
                    return new vscode.Hover(arrayUtilities[word]);
                }
                if (objectUtilities[word]) {
                    return new vscode.Hover(objectUtilities[word]);
                }
                if (numberUtilities[word]) {
                    return new vscode.Hover(numberUtilities[word]);
                }
                if (dateUtilities[word]) {
                    return new vscode.Hover(dateUtilities[word]);
                }

                return null;
            }
        }
    );

    context.subscriptions.push(completionProvider, hoverProvider);
}

export function deactivate() {}
