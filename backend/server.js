const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./middlewares/errorHandlers');
const caseRoutes = require('./routes/caseRoutes');

const app = express();
const port = 8181;

app.use(bodyParser.json());

app.use('/api/cases', caseRoutes);

app.use(errorHandlers)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

