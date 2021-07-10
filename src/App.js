import "./App.css";
import TodoApp from "./components/TodoApp";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
