import "./App.css";
import TodoApp from "./components/TodoApp";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <TodoApp />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
