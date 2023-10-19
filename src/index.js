import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send("<h1>Bienvenido a la pagina del mejor desarrollador Backend</h1>");
});

app.get("/about", (req, res) => {
   res.send("<h1>Acerca de La mejor pagina de desarrollo Backend </h1>");
});

app.use((req, res) => {
   res.status(404).send("<h1>Lastimosamente esta ruta no exite mi loco</h1>");
});

app.listen(3000, () => {
   console.log("Server on port", 3000);
});
