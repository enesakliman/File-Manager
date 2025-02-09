import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import FolderView from "./pages/FolderView.jsx";
import { ModalProvider } from "./context/modal-context/modal-context.jsx";
import { ViewProvider } from "./context/view-context/view-context.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ViewProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FolderView />} />
            <Route path="folder/:id" element={<FolderView />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ViewProvider>
    <App />
  </QueryClientProvider>
);
