import LoginView from "./views/LoginView";
import TodoView from "./views/TodoView";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useState } from "react";

function App() {
const [user, setUser] = useState(null);

    return (
      <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
      {user ? <TodoView /> : <LoginView />}
      </Container>
     
    </div>
    )
}

export default App
