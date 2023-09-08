import React from "react";
import Crypt from "./components/Crypt";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Crypt />
    </ChakraProvider>
  );
}

export default App;
