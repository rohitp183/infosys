const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./middlewares/errorHandlers');
const caseRoutes = require('./routes/caseRoutes');
const cors = require('cors');

const app = express();
const port = 8181;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/cases', caseRoutes);
app.use(errorHandlers)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

