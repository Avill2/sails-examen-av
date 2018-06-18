/**
 * Conductor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:"String"
    },
    apellido:{
      type:"String"
    },
    fechaNacimiento:{
      type:"Date"
    },
    numeroAutos:{
      type: "number"
    },
    licenciaValida:{
      type:"Boolean"
    },
    autos:{
      collection:"Auto",
      via:"idConductor"
    }
  },

};

