const express = require('express');
const app = express();
const port = 3000;

// Ruta para obtener información adaptada al frontend
app.get('/api/data', (req, res) => {
    // Aquí podrías hacer llamadas a otras APIs o bases de datos
    const data = {
        message: 'Esta aplicacion muestra las mascotas',
        frontend: 'React App',
        user: 'Julian (Alvarado + Duran)'
    };
    res.json(data);
});

app.listen(port, () => {
    console.log(`BFF server running at http://localhost:${port}`);
});