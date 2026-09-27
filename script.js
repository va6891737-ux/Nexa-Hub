// ==========================================
// NEXAHUB JAVA CODING
// ==========================================

function runJava() {

    const codeEditor = document.getElementById("codeEditor");
    const output = document.getElementById("output");

    if (!codeEditor || !output) {
        return;
    }

    const code = codeEditor.value;

    if (code.trim() === "") {
        output.textContent = "⚠️ Please write some Java code.";
        return;
    }

    let result = "";

    try {

        // ==========================================
        // STRING VARIABLES
        // ==========================================

        const stringVariables = {};

        const stringMatches = code.matchAll(
            /String\s+([a-zA-Z_]\w*)\s*=\s*"([^"]*)"\s*;/g
        );

        for (const match of stringMatches) {

            const variableName = match[1];
            const variableValue = match[2];

            stringVariables[variableName] = variableValue;
        }


        // ==========================================
        // INT VARIABLES
        // ==========================================

        const intVariables = {};

        const intMatches = code.matchAll(
            /int\s+([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;/g
        );

        for (const match of intMatches) {

            const variableName = match[1];
            const variableValue = Number(match[2]);

            intVariables[variableName] = variableValue;
        }


        // ==========================================
        // DOUBLE VARIABLES
        // ==========================================

        const doubleVariables = {};

        const doubleMatches = code.matchAll(
            /double\s+([a-zA-Z_]\w*)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/g
        );

        for (const match of doubleMatches) {

            const variableName = match[1];
            const variableValue = Number(match[2]);

            doubleVariables[variableName] = variableValue;
        }


        // ==========================================
        // PRINT STRING
        // System.out.println("Hello");
        // ==========================================

        const textPrintMatches = code.matchAll(
            /System\.out\.println\s*\(\s*"([^"]*)"\s*\)\s*;/g
        );

        for (const match of textPrintMatches) {

            result += match[1] + "\n";
        }


        // ==========================================
        // PRINT VARIABLE
        // System.out.println(a);
        // ==========================================

        const variablePrintMatches = code.matchAll(
            /System\.out\.println\s*\(\s*([a-zA-Z_]\w*)\s*\)\s*;/g
        );

        for (const match of variablePrintMatches) {

            const variable = match[1];

            if (stringVariables[variable] !== undefined) {

                result += stringVariables[variable] + "\n";

            }

            else if (intVariables[variable] !== undefined) {

                result += intVariables[variable] + "\n";

            }

            else if (doubleVariables[variable] !== undefined) {

                result += doubleVariables[variable] + "\n";

            }
        }


        // ==========================================
        // ADDITION
        // System.out.println(a + b);
        // ==========================================

        const additionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*([a-zA-Z_]\w*)\s*\+\s*([a-zA-Z_]\w*)\s*\)\s*;/g
        );

        for (const match of additionMatches) {

            const first = match[1];
            const second = match[2];

            let a;
            let b;

            if (intVariables[first] !== undefined) {
                a = intVariables[first];
            }
            else if (doubleVariables[first] !== undefined) {
                a = doubleVariables[first];
            }

            if (intVariables[second] !== undefined) {
                b = intVariables[second];
            }
            else if (doubleVariables[second] !== undefined) {
                b = doubleVariables[second];
            }

            if (a !== undefined && b !== undefined) {

                result += (a + b) + "\n";
            }
        }


        // ==========================================
        // SUBTRACTION
        // System.out.println(a - b);
        // ==========================================

        const subtractionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*([a-zA-Z_]\w*)\s*-\s*([a-zA-Z_]\w*)\s*\)\s*;/g
        );

        for (const match of subtractionMatches) {

            const first = match[1];
            const second = match[2];

            let a;
            let b;

            if (intVariables[first] !== undefined) {
                a = intVariables[first];
            }
            else if (doubleVariables[first] !== undefined) {
                a = doubleVariables[first];
            }

            if (intVariables[second] !== undefined) {
                b = intVariables[second];
            }
            else if (doubleVariables[second] !== undefined) {
                b = doubleVariables[second];
            }

            if (a !== undefined && b !== undefined) {

                result += (a - b) + "\n";
            }
        }


        // ==========================================
        // MULTIPLICATION
        // System.out.println(a * b);
        // ==========================================

        const multiplicationMatches = code.matchAll(
            /System\.out\.println\s*\(\s*([a-zA-Z_]\w*)\s*\*\s*([a-zA-Z_]\w*)\s*\)\s*;/g
        );

        for (const match of multiplicationMatches) {

            const first = match[1];
            const second = match[2];

            let a;
            let b;

            if (intVariables[first] !== undefined) {
                a = intVariables[first];
            }
            else if (doubleVariables[first] !== undefined) {
                a = doubleVariables[first];
            }

            if (intVariables[second] !== undefined) {
                b = intVariables[second];
            }
            else if (doubleVariables[second] !== undefined) {
                b = doubleVariables[second];
            }

            if (a !== undefined && b !== undefined) {

                result += (a * b) + "\n";
            }
        }


        // ==========================================
        // DIVISION
        // System.out.println(a / b);
        // ==========================================

        const divisionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*([a-zA-Z_]\w*)\s*\/\s*([a-zA-Z_]\w*)\s*\)\s*;/g
        );

        for (const match of divisionMatches) {

            const first = match[1];
            const second = match[2];

            let a;
            let b;

            if (intVariables[first] !== undefined) {
                a = intVariables[first];
            }
            else if (doubleVariables[first] !== undefined) {
                a = doubleVariables[first];
            }

            if (intVariables[second] !== undefined) {
                b = intVariables[second];
            }
            else if (doubleVariables[second] !== undefined) {
                b = doubleVariables[second];
            }

            if (a !== undefined && b !== undefined) {

                if (b === 0) {

                    result += "❌ Error: Cannot divide by zero.\n";

                }
                else {

                    result += (a / b) + "\n";
                }
            }
        }


        // ==========================================
        // DIRECT NUMBER ADDITION
        // System.out.println(10 + 20);
        // ==========================================

        const directAdditionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*(-?\d+)\s*\+\s*(-?\d+)\s*\)\s*;/g
        );

        for (const match of directAdditionMatches) {

            const a = Number(match[1]);
            const b = Number(match[2]);

            result += (a + b) + "\n";
        }


        // ==========================================
        // DIRECT NUMBER SUBTRACTION
        // ==========================================

        const directSubtractionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*(-?\d+)\s*-\s*(-?\d+)\s*\)\s*;/g
        );

        for (const match of directSubtractionMatches) {

            const a = Number(match[1]);
            const b = Number(match[2]);

            result += (a - b) + "\n";
        }


        // ==========================================
        // DIRECT NUMBER MULTIPLICATION
        // ==========================================

        const directMultiplicationMatches = code.matchAll(
            /System\.out\.println\s*\(\s*(-?\d+)\s*\*\s*(-?\d+)\s*\)\s*;/g
        );

        for (const match of directMultiplicationMatches) {

            const a = Number(match[1]);
            const b = Number(match[2]);

            result += (a * b) + "\n";
        }


        // ==========================================
        // DIRECT NUMBER DIVISION
        // ==========================================

        const directDivisionMatches = code.matchAll(
            /System\.out\.println\s*\(\s*(-?\d+)\s*\/\s*(-?\d+)\s*\)\s*;/g
        );

        for (const match of directDivisionMatches) {

            const a = Number(match[1]);
            const b = Number(match[2]);

            if (b === 0) {

                result += "❌ Error: Cannot divide by zero.\n";

            }
            else {

                result += (a / b) + "\n";
            }
        }


        // ==========================================
        // IF NOTHING WAS FOUND
        // ==========================================

        if (result.trim() === "") {

            result =
                "✅ Java code received.\n\n" +
                "Supported features:\n" +
                "• System.out.println()\n" +
                "• String variables\n" +
                "• int variables\n" +
                "• double variables\n" +
                "• Addition\n" +
                "• Subtraction\n" +
                "• Multiplication\n" +
                "• Division";
        }


        // ==========================================
        // SHOW OUTPUT
        // ==========================================

        output.textContent = result.trim();

    }

    catch (error) {

        output.textContent =
            "❌ Error:\n" + error.message;

    }
}


// ==========================================
// CLEAR CODE
// ==========================================

function clearCode() {

    const codeEditor = document.getElementById("codeEditor");
    const output = document.getElementById("output");

    codeEditor.value = "";

    output.textContent =
        'Click "Run Code" to see the output.';
}
