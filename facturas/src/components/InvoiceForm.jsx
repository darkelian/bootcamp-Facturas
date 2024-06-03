import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InvoiceForm() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ id: '', description: '', unitPrice: '', quantity: '' });
  const [invoice, setInvoice] = useState({
    invoiceNumber: '1',
    clientName: 'Edgar Morillo',
    id: '12345',
    phone: '3445588',
    email: 'lucho@dato.com',
  });

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const addProduct = () => {
    if (product.id && product.description && product.unitPrice && product.quantity) {
      setProducts([...products, { ...product, subtotal: product.unitPrice * product.quantity }]);
      setProduct({ id: '', description: '', unitPrice: '', quantity: '' });
    }
  };

  const removeProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const calculateTotals = () => {
    const subtotal = products.reduce((acc, prod) => acc + prod.subtotal, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    return { subtotal, iva, total };
  };

  const { subtotal, iva, total } = calculateTotals();

  return (
    <div className="container mt-5">
      <h2 className="text-center">Factura</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <label>Número de Factura:</label>
          <input
            type="number"
            className="form-control"
            name="invoiceNumber"
            value={invoice.invoiceNumber}
            onChange={handleInvoiceChange}
          />
        </div>
        <div className="col-md-6">
          <label>Nombre del Cliente:</label>
          <input
            type="text"
            className="form-control"
            name="clientName"
            value={invoice.clientName}
            onChange={handleInvoiceChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label>Cédula:</label>
          <input
            type="number"
            className="form-control"
            name="id"
            value={invoice.id}
            onChange={handleInvoiceChange}
          />
        </div>
        <div className="col-md-6">
          <label>Teléfono:</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={invoice.phone}
            onChange={handleInvoiceChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={invoice.email}
            onChange={handleInvoiceChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="ID Producto"
            value={product.id}
            onChange={(e) => setProduct({ ...product, id: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Descripción"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Valor Unitario"
            value={product.unitPrice}
            onChange={(e) => setProduct({ ...product, unitPrice: parseFloat(e.target.value) })}
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Cantidad"
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: parseInt(e.target.value) })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12 text-center">
          <button className="btn btn-success" onClick={addProduct}>Agregar Producto</button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, index) => (
            <tr key={index}>
              <td>{prod.id}</td>
              <td>{prod.description}</td>
              <td>{prod.unitPrice.toFixed(2)}</td>
              <td>{prod.quantity}</td>
              <td>{prod.subtotal.toFixed(2)}</td>
              <td><button className="btn btn-danger" onClick={() => removeProduct(index)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>IVA (16%): ${iva.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default InvoiceForm;
