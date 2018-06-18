/**
 * Auto.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:"string"
    },
    colorUno:{
      type:"string"},
    colorDos:{
      type:"string"
    },
    chasis:{
      type:"number"
    },
    nombreModelo:{
      type:"string"
    },
    anio:{
      type:"number"
    },
    idConductor:{
      model:"Conductor"
    }
  },

};

