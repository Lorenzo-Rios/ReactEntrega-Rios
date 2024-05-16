const express = require('express');
const path = require('path');
const mercadopago = require('mercadopago');
const bodyParser = require('body-parser');

// Crear una instancia de Express
const app = express();

// Configurar las credenciales de Mercado Pago
mercadopago.configure({
    access_token: 'TEST-1064011589305441-051617-ff47e43d14a835d658915e2e6a37392e-186113869'
});

// Middleware para parsear el body de las requests
app.use(bodyParser.json());

// Middleware para servir archivos estáticos de la carpeta 'build' (para React)
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint para crear preferencias de Mercado Pago
app.post('/create_preference', (req, res) => {
    const { items } = req.body;

    let preference = {
        items: items,
        back_urls: {
            success: "http://localhost:3000/success",
            failure: "http://localhost:3000/failure",
            pending: "http://localhost:3000/pending"
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({ id: response.body.id });
        }).catch(function (error) {
            console.log(error);
            res.status(500).send('Error creating preference');
        });
});

// Para todas las demás rutas, servir el archivo index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});