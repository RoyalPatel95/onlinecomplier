import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { runCode, fetchResult } from "./services/api";
import "./App.css";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import Footer from "./components/Footer";

function App() {
  const defaultCodeMap = {
    python: `a = int(input())\nb = int(input())\nprint("Sum:", a + b)`,
    r: `# R code example\nprint("Hello, R!")`,
    sql: `SELECT * FROM table_name;`,
    html_css: `<!DOCTYPE html>\n<html>\n<head>\n<style>\n body { font-family: Arial; }\n</style>\n</head>\n<body>\n<h1>Hello, HTML/CSS!</h1>\n</body>\n</html>`,
    typescript: `console.log("Hello, TypeScript!");`,
    java: `import java.util.Scanner;\npublic class Main {\n public static void main(String[] args) {\n  Scanner sc = new Scanner(System.in);\n  int a = sc.nextInt();\n  int b = sc.nextInt();\n  System.out.println("Sum: " + (a + b));\n }\n}`,
    c: `#include <stdio.h>\nint main() {\n int a, b;\n scanf("%d %d", &a, &b);\n printf("Sum: %d\\n", a + b);\n return 0;\n}`,
    cpp: `#include <iostream>\nusing namespace std;\nint main() {\n int a, b;\n cin >> a >> b;\n cout << "Sum: " << a + b << endl;\n return 0;\n}`,
    csharp: `using System;\nclass Program {\n static void Main() {\n  Console.WriteLine("Hello, C#!");\n }\n}`,
    go: `package main\nimport "fmt"\nfunc main() {\n fmt.Println("Hello, Go!")\n}`,
    php: `<?php\necho "Hello, PHP!";\n?>`,
    swift: `print("Hello, Swift!")`,
    rust: `fn main() {\n println!("Hello, Rust!");\n}`,
    ruby: `puts "Hello, Ruby!"`,
  };

  const languages = [
    { id: 71, value: "python", label: "Python (3.8.1)" },
    { id: 73, value: "r", label: "R (4.0.0)" },
    { id: 82, value: "sql", label: "SQL" },
    { id: 74, value: "html_css", label: "HTML/CSS" },
    { id: 74, value: "typescript", label: "TypeScript" },
    { id: 62, value: "java", label: "Java (OpenJDK 13.0.1)" },
    { id: 50, value: "c", label: "C (GCC 9.2.0)" },
    { id: 54, value: "cpp", label: "C++ (GCC 9.2.0)" },
    { id: 51, value: "csharp", label: "C# (Mono 6.6.0)" },
    { id: 60, value: "go", label: "Go (1.14)" },
    { id: 68, value: "php", label: "PHP (7.4)" },
    { id: 83, value: "swift", label: "Swift (5.1.5)" },
    { id: 73, value: "rust", label: "Rust (1.41)" },
    { id: 72, value: "ruby", label: "Ruby (2.7.0)" },
  ];

  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(defaultCodeMap["cpp"]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const terminalRef = useRef(null);
  const term = useRef(null);

  useEffect(() => {
    const xterm = new Terminal({ cols: 80, rows: 15, convertEol: true });
    xterm.open(terminalRef.current);
    xterm.write("Output will appear here...\r\n");
    term.current = xterm;
    return () => xterm.dispose();
  }, []);

  const handleRunCode = async () => {
    setLoading(true);
    term.current.write("\r\nRunning code...\r\n");
    try {
      const language_id = languages.find((l) => l.value === language).id;
      const { token } = await runCode({
        language_id,
        source_code: code,
        stdin: input,
      });

      let result = null;
      while (!result || result.status.id < 3) {
        result = await fetchResult(token);
        if (result.status.id === 1 || result.status.id === 2) {
          await new Promise((r) => setTimeout(r, 1000));
        } else break;
      }

      if (result.stdout) term.current.write(result.stdout + "\r\n");
      else if (result.stderr) term.current.write(result.stderr + "\r\n");
      else if (result.compile_output) term.current.write(result.compile_output + "\r\n");
      else term.current.write("Unknown error occurred.\r\n");
    } catch (err) {
      term.current.write("Error connecting to server.\r\n");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>⚡ Online Compiler</h1>

      <select
        value={language}
        onChange={(e) => {
          const lang = e.target.value;
          setLanguage(lang);
          setCode(defaultCodeMap[lang] || "// Write your code here...");
          setInput("");
          term.current.reset();
          term.current.write("Output will appear here...\r\n");
        }}
        className="language-selector"
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="editor-output-wrapper">
        <div className="code-editor">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            value={code}
            onChange={(val) => setCode(val)}
          />
        </div>

        <div className="right-panel">
          <h2>Input (stdin):</h2>
          <textarea
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type input here, line by line"
          ></textarea>

          <h2>Output:</h2>
          <div ref={terminalRef} className="terminal"></div>
        </div>
      </div>

      <button onClick={handleRunCode} disabled={loading} className="run-button">
        {loading ? "Running..." : "Run Code"}
      </button>

      <Footer />
    </div>
  );
}

export default App;
