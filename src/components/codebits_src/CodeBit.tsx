import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeBits from "./pages/CodeBits";

const queryClient = new QueryClient();

const CodeBit = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Routes>
          <Route path="/" element={<CodeBits />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default CodeBit ;
