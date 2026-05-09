import React from \"react\";
import ReactDOM from \"react-dom/client\";
import App from \"@/App\";

// Portfolio is served via /public/index.html (pure HTML)
// React mounts into the hidden #root div and renders null
const rootEl = document.getElementById(\"root\");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}