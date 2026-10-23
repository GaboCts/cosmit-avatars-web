
import { Sandpack } from '@codesandbox/sandpack-react'
import styles from './HtmlCssEditor.module.css'

const sandpackTheme = {
    colors: {
        surface1: '#101014',
        surface2: '#18181f',
        surface3: '#20202a',
        clickable: '#a09eaf',
        base: '#f5f4fa',
        disabled: '#777584',
        hover: '#b0a8ff',
        accent: '#8175ff',
        error: '#ff6b6b',
        errorSurface: '#2a1a1a',
    },
    syntax: {
        plain: '#e3e1ed',
        comment: '#777584',
        keyword: '#b0a8ff',
        tag: '#8175ff',
        punctuation: '#a09eaf',
        definition: '#b0a8ff',
        property: '#7dd3fc',
        selector: '#8175ff',
        operator: '#a09eaf',
        attrName: '#b0a8ff',
        attrValue: '#a7f3d0',
        number: '#fbbf24',
        string: '#a7f3d0',
        function: '#7dd3fc',
        boolean: '#fbbf24',
        regex: '#a7f3d0',
    },
    font: {
        body: 'Inter, system-ui, sans-serif',
        mono: "'Courier New', Courier, monospace",
        size: '13px',
        lineHeight: '1.6',
    },
}

const files = {
    "/index.html": {
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cosmit Avatars</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="card">
    <h1>¡Here is your avatar!</h1>

    <img src="https://cosmitavatars.space/avatar/twitch/xcosmo_" />

  </main>
</body>
</html>`,
        active: true,
    },

    "/styles.css": {
        code: `* {
  box-sizing: border-box;
}

body {
  background: #101014;
  color: #f5f4fa;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  margin: 20px;
  max-width: 420px;
  text-align: center;
  background: #18181f;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 16px;
}

h1 {
  color: #b0a8ff;
}
  
img {
  width: 190px;
  height: 190px;
}`,
    },
}

export default function HtmlCssEditor () {
    return (
        <section className={styles['html-css-editor']}>
            <Sandpack
                template="static"
                theme={sandpackTheme}
                files={files}
                options={{
                    showTabs: true,
                    wrapContent: true,
                    showLineNumbers: true,
                    editorHeight: 450,
                    editorWidthPercentage: 65,
                    visibleFiles: ["/index.html"],
                    activeFile: "/index.html",
                    autorun: true,
                }}
            />
        </section>
    );
}
