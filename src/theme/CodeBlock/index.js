import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
//import 'highlight.js/styles/github.css'; // 选择一个样式
import 'highlight.js/styles/atom-one-dark.css';

const CodeBlock = ({ children, className }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(codeRef.current);  // 高亮显示
  }, []);

  const language = className?.replace(/language-/, '') || 'plaintext';

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {children.trim()}
      </code>
    </pre>
  );
};

export default CodeBlock;
