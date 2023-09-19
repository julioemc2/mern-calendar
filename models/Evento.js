const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, // esto va a indicar a Mongoose que va a ser
                                    // una referencia, y se especifica con ref
        ref: 'Usuario',
        required: true
    }

});

// aplica para visualizar __v y _id al momento de usar el metodo toJSON, y se vera como id en vez de __id
EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return  object;
})


module.exports = model( 'Evento', EventoSchema );