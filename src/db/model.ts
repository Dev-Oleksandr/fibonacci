import {DataTypes} from "sequelize";
import mysql from './db'

export const Model = mysql.define('number', {
    ticket: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    fibonacci: {type: DataTypes.INTEGER, allowNull: false}
}, {timestamps: false})