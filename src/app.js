import 'dotenv/config';
import express                  from "express";

import {rutaCarrito, rutaProductos} from './rutas/index.js'

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/productos', rutaCarrito)
app.use('/api/carrito', rutaProductos)

const server = app.listen(PORT, () => {
    console.log(`server funcionando en port http://localhost:${PORT}`);
  });
  server.on("error", (err) => console.error(err));
  
