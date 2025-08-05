import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const templates = {
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`,
  python: `print("Hello, Python!")`,
  javascript: `console.log("Hello, JavaScript!");`
};

const languageMap = {
  cpp: "cpp",
  python: "python",
  javascript: "javascript"
};

export default function CodeCompiler() {
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState(templates.cpp);
  const [output, setOutput] = useState("");

  const runCode = async () => {
    setOutput("Running...");
    try {
      const response = await fetch("https://piston.zyrosite.com/api/v2/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          language: languageMap[language],
          source: code
        })
      });
      const result = await response.json();
      setOutput(result.output || result.run.output || "No output");
    } catch (err) {
      setOutput("Error running code");
    }
  };

  const formatCode = () => {
    alert("Code formatting is a placeholder.");
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setCode(templates[lang]);
    setOutput("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "3.0rem", marginBottom: "16px", fontWeight: "bold", textAlign: "center",color: "white" }}>
        Code Compiler
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px", justifyContent: "center" }}>
        <button
          onClick={() => handleChangeLanguage("cpp")}
          style={{ backgroundColor: "#3B82F6", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          C++
        </button>
        <button
          onClick={() => handleChangeLanguage("python")}
          style={{ backgroundColor: "#FACC15", color: "black", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Python
        </button>
        <button
          onClick={() => handleChangeLanguage("javascript")}
          style={{ backgroundColor: "#10B981", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          JavaScript
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div>
          <Editor
            height="400px"
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
          />
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <button
              onClick={runCode}
              style={{ backgroundColor: "#16A34A", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
              Run
            </button>
            <button
              onClick={formatCode}
              style={{ backgroundColor: "#4B5563", color: "white", padding: "8px 16px", border: "none", borderRadius: "6px", cursor: "pointer" }}
            >
              Format
            </button>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#000000",
            color: "#22C55E",
            padding: "16px",
            borderRadius: "6px",
            height: "400px",
            overflowY: "auto",
            whiteSpace: "pre-wrap"
          }}
        >
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}
