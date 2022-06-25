import React from "react";
import { APP_PAGES } from "./AppView";
import RouterConfig from "./Routes/RouterConfig";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Routes/Authentication/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
