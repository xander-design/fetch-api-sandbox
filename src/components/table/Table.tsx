import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { InvoiceType } from "../../types/invoice";
import "./table.css";

export default function Table() {
  const [rows, setRows] = useState<InvoiceType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: InvoiceType[]) => setRows(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const handleRowClick = (row: InvoiceType) => {
    navigate(`/detail/${row.invoiceId}`, { state: { row } });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Title</th>
          <th>Project Name</th>
          <th>Project Reference</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.invoiceId} onClick={() => handleRowClick(row)}>
            <Link to={`/detail/${row.invoiceId}`} className="table-link">
              <td>{row.invoiceNumber}</td>
              <td>{row.invoiceTitle}</td>
              <td>{row.projectName}</td>
              <td>{row.projectReference}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
