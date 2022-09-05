import { createContext } from "react";

const ApiContext = createContext("http://127.0.0.1:8000/api/", () => {});

export default ApiContext;
