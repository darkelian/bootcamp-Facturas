# 🧾 Proyecto de Facturación 🧾

## URL de Ejecución 🌐
- Puedes ver la aplicación en línea en la siguiente URL: [Ejecutar Proyecto](https://tu-url-de-ejecucion.com)

## Vistas 📸
<div align="center">
  <img src="" alt="Vista 1">
</div>

## Autor:
**Brayan Elian Peña Jaimes**

## Descripción
Este es un proyecto de una aplicación de facturación desarrollado como parte de un ejercicio práctico. La aplicación permite a los usuarios crear y gestionar facturas de manera sencilla, incluyendo la posibilidad de agregar productos y calcular subtotales, IVA y total.

## Estructura del Proyecto 📁
El proyecto está organizado en los siguientes archivos:

- **`index.html`**: Contiene la estructura principal del contenido.
- **`styles.css`**: Define los estilos y la apariencia visual del formulario de facturación.
- **`InvoiceForm.jsx`**: Componente principal de React que maneja la lógica de la aplicación.
- **`App.jsx`**: Punto de entrada de la aplicación de React.

## Funcionalidades ✨
- 📝 Creación y edición de facturas con campos para número de factura, nombre del cliente, cédula, teléfono y correo electrónico.
- ➕ Adición de productos a la factura con ID, descripción, valor unitario y cantidad.
- 💰 Cálculo automático de subtotales, IVA y total de la factura.
- ❌ Eliminación de productos de la factura.
- 🎨 Interfaz de usuario amigable y responsiva utilizando Bootstrap.

## Clases y Funciones Principales 🛠️

### Componentes en `InvoiceForm.jsx`
- **Estado `invoice`**: Maneja la información de la factura, incluyendo número de factura, nombre del cliente, cédula, teléfono y correo electrónico.
- **Estado `products`**: Maneja la lista de productos agregados a la factura.
- **Estado `product`**: Maneja la información del producto actual que se está agregando.

### Funciones en `InvoiceForm.jsx`
- **`handleInvoiceChange(e)`**: Actualiza el estado de la factura cuando se editan los campos.
- **`addProduct()`**: Agrega un nuevo producto a la lista de productos.
- **`removeProduct(index)`**: Elimina un producto de la lista de productos.
- **`calculateTotals()`**: Calcula los totales de la factura (subtotal, IVA, total).

## Instalación y Ejecución 🚀
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Navega al directorio del proyecto:
   ```bash
   cd bootcamp-Facturas/facturas
   
3. Instala dependencias:
   ```bash
   npm install

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
