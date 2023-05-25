import connectDB from './Infrastructure/database/conection';
import app from './Infrastructure/rest-api/';

(async () => {
    await connectDB()
    app.listen();
})()