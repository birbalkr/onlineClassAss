import app from "./app/app.js";
import connectToDB from './config/db.js'
// import seedProducts from "./seed/product.seed.js";



await connectToDB()
// await seedProducts();

app.listen(3000, () => {
    console.log("Server is running.....");

})