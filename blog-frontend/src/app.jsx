import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Blog from "./pages/blog/Blog";

import { h } from 'preact';
import { Router, Route } from 'preact-router';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Route path="/" component={Blog} />
      {/* <Route path="/about" component={About} />
      <Route default component={NotFound} /> */}
    </Router>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} class="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://preactjs.com" target="_blank">
    //       <img src={preactLogo} class="logo preact" alt="Preact logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + Preact</h1>
    //   <div class="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/app.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p class="read-the-docs">
    //     Click on the Vite and Preact logos to learn more
    //   </p>
    // </>
  );
}
