const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("Rota do artigo");
});

router.get("/admin/articles", (req, res) => {
    res.send("Rota de adm no artigo");
});

module.exports = router;