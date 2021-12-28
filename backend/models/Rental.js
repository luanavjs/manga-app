//USER -> userId, bookId
const mongoose = require('mongoose')
const {model,Schema} = mongoose

const RentalSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User", //hago referencia al schema de User
            required: true
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: "Book", //hago ref al schema de Book
            required: true
        }
    }
)

module.exports = model("Rental", RentalSchema)