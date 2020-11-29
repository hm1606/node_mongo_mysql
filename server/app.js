require("./config/config");

const express = require("express");
const app = express();

// ========================================
// Requerimos body-parser y lo configuramos
// ========================================
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// ========================================

// ======
// Routes
// ======
app.get("/usuarios", (req, res) => {
  res.json({ msg: "get Usuarios" });
});

app.post("/usuarios", (req, res) => {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      msg: "El nombre es necesario",
    });
  } else {
    res.status(200).json({
      ok: true,
      msg: "post Usuarios",
      persona: body,
    });
  }
});

app.put("/usuarios/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    msg: `modificando ${id}`,
    id,
  });
});

app.delete("/usuarios", (req, res) => {
  res.json({ msg: "delete Usuarios" });
});
// ======

// ==============================
// PONEMOS EL SERVIDOR A ESCUCHAR
// ==============================
app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto: ", process.env.PORT);
});
// ==============================
