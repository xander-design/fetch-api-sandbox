import { BrowserRouter, Route, Routes } from "react-router-dom";

import TableDetail from "./components/table-detail/table-detail";
import Table from "./components/table/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/detail/:id" element={<TableDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
