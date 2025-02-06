const express = require('express');
const app = express();
const { adminRoute , userRoute, coursesRoute } = require('./Routes')

app.use(express.json());

app.use("api/v1/user/",userRoute);
app.use("api/v1/admin/",adminRoute);
app.use("api/v1/coures/",coursesRoute);

app.listen(3000);