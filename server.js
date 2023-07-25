const express = require('express');
const prisonRoutes = require('./routes/prisons');

const app = express();
app.use(express.json());
app.use('/api/v1/prison', prisonRoutes)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
