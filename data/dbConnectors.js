import mongoose from "mongoose";



async function connectMongo() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/widgets');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("ERROR connecting to MongoDB", error)
    }
}

connectMongo()

const widgetSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    soldout:String,
    stores:Array
})

const Widgets = mongoose.model('widgets', widgetSchema);

export { Widgets }