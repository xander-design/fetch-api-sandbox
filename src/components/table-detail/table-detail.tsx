import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { InvoiceType } from "../../types/invoice";
import "./table-details.css";

export default function TableDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const passedRow = (location.state as { row?: InvoiceType })?.row;

  const [row, setRow] = useState<InvoiceType | null>(passedRow ?? null);

  // If we didn't receive the row via state, load it from the JSON file
  useEffect(() => {
    if (row) return;

    fetch("/api/data.json")
      .then((r) => r.json())
      .then((data: InvoiceType[]) => {
        const found = data.find((item) => item.invoiceId === Number(id));
        setRow(found ?? null);
      })
      .catch((e) => console.error("Failed to load data for detail view", e));
  }, [id, row]);

  if (!row) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <h2>Details for {row.invoiceTitle}</h2>
      <table>
        <tbody>
          <tr>
            <td className="label">ID:</td>
            <td className="data-value">{row.invoiceId}</td>
          </tr>
          <tr>
            <td className="label">Invoice Number:</td>
            <td className="data-value">{row.invoiceNumber}</td>
          </tr>
          <tr>
            <td className="label">Title:</td>
            <td className="data-value">{row.invoiceTitle}</td>
          </tr>
          <tr>
            <td className="label">Project Name:</td>
            <td className="data-value">{row.projectName}</td>
          </tr>
          <tr>
            <td className="label">Project Reference:</td>
            <td className="data-value">{row.projectReference}</td>
          </tr>
          <tr>
            <td className="label">Date Created:</td>
            <td className="data-value">{row.dateCreated}</td>
          </tr>
          <tr>
            <td className="label">Due Date:</td>
            <td className="data-value">{row.dueDate}</td>
          </tr>
          <tr>
            <td className="label">Buyer:</td>
            <td className="data-value">{row.buyer.name}</td>
          </tr>
          <tr>
            <td className="label">Supplier:</td>
            <td className="data-value">{row.supplier.name}</td>
          </tr>
          <tr>
            <td className="label">VAT Rate:</td>
            <td className="data-value">{row.vatRate}</td>
          </tr>
          <tr>
            <td className="label">Subtotal:</td>
            <td className="data-value">{row.subTotal}</td>
          </tr>
          <tr>
            <td className="label">VAT Total:</td>
            <td className="data-value">{row.vatTotal}</td>
          </tr>
          <tr>
            <td className="label">Total:</td>
            <td className="data-value">{row.total}</td>
          </tr>
          <tr>
            <td className="label">Invoice Type:</td>
            <td className="data-value">{row.invoiceType}</td>
          </tr>
          <tr>
            <td className="label">Status:</td>
            <td className="data-value">{row.status}</td>
          </tr>
          <tr>
            <td className="label">Number of Items:</td>
            <td className="data-value">{row.invoiceItems.length}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/" className="link">
        ← Back to table
      </Link>
    </>
  );
}
