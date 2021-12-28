//USER -> register and rent books (USER, ADMIN)
const mongoose = require('mongoose')
const { model, Schema } = mongoose

const UserSchema = Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true // Por si ingresan nombre con un espacio "Luana " -> "Luana"
        },
        email:{
            type: String,
            required: true,
            trim: true,
            unique: true // El email tiene que ser único, puede haber nombres iguales pero no emails
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true,
            enum: ["ADMIN","USER"], // Enum -> Solo va a haber estas dos opciones
            default: "USER"
        },
        favorites:{
            type: [],
            ref: "Book"
        }

    }
)

UserSchema.methods.toJSON = function () {
    const {password, __v, ...user} = this.toObject()
    return user
}

module.exports = model("User", UserSchema)