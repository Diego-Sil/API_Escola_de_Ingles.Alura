'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        funcaoValidadora: function (dado){
          if (!/^[\sa-zA-ZÀ-ÿ]+$/.test(dado)) {
            
            throw new Error ('O campo deve conter somente letras e acentos.')
          }
          if (dado.length < 3) throw new Error('O campo nome deve ter mais que 3 caracteres')
        }
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        funcaoValidadora: function (dado){
          
          if (dado !== 'estudante' && dado !== 'docente') {
            throw new Error('O campo aceita apenas o valores docente e estudante')
          }
        }
      }
    }
  }, {
    paranoid: true,
    defaultScope: {
      where: {ativo: true}
    },
    scopes: {
      todos: { where: {} }
    }
  })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scopes: {status: 'confirmado'},
      as: 'AulasMatriculadas'
    })

  }
  return Pessoas
}