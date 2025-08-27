import React from 'react';
import Editor from '@monaco-editor/react';
// import './CodeEditor.css';

const languageMap = {
  71: "python",
  73: "r",
  82: "sql",
  74: "html",
  63: "javascript",
  78: "typescript",
  62: "java",
  50: "c",
  54: "cpp",
  51: "csharp",
  60: "go",
  68: "php",
  83: "swift",
  75: "rust",
  72: "ruby",
};

export default function CodeEditor({ value, onChange, languageId, input, onInputChange, output }) {
  const monacoLanguage = languageMap[languageId] || 'plaintext';

  return (
    <div className="main-container">
      {/* Left Side - Code Editor */}
      <div className="left-editor">
        <Editor
          height="100%"
          language={monacoLanguage}
          value={value}
          onChange={(val) => onChange(val || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            tabSize: 2,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            roundedSelection: true,
            padding: { top: 12 }
          }}
        />
      </div>

      {/* Right Side - Input and Output */}
      <div className="right-panel">
        {/* Input Section */}
        <div className="input-box">
          <h4>Input</h4>
          <textarea
            placeholder="Enter input here"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
          />
        </div>

        {/* Output Section */}
        <div className="output-box">
          <h4>Output</h4>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
