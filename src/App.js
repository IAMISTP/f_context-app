import "./App.css";
import OrderPage from "./pages/OrderPage";
import SummarayPage from "./pages/SummaryPage";

function App() {
  return (
    <div className="App" style={{ padding: "4rem" }}>
      <OrderPage />
      <SummarayPage />
    </div>
  );
}

export default App;
