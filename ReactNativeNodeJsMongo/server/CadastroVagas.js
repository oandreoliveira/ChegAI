const mongoose = require('mongoose')

const CadastroVagasSchema = new mongoose.Schema({
    nameCompany: String,
    email: String,
    phone: String,
    description: String,
    picture: String,
    vacancyCode: String,
})


mongoose.model("CadastroVagas", CadastroVagasSchema)