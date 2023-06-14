import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pm = db.define(
  "pm",
  {
    sideId: {
      type: DataTypes.STRING,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
    },
    namaSide: {
      type: DataTypes.STRING,
    },
    koordinatSite: {
      type: DataTypes.STRING,
    },
    tipeSite: {
      type: DataTypes.STRING,
    },
    modelSite: {
      type: DataTypes.STRING,
    },

    idCustomer: {
      type: DataTypes.INTEGER,
    },
    phasa: {
      type: DataTypes.INTEGER,
    },
    dayaKVA: {
      type: DataTypes.INTEGER,
    },
    rAmpere: {
      type: DataTypes.INTEGER,
    },
    sAmpere: {
      type: DataTypes.INTEGER,
    },
    tAmpere: {
      type: DataTypes.INTEGER,
    },
    rnVoltage: {
      type: DataTypes.INTEGER,
    },
    ngVoltage: {
      type: DataTypes.INTEGER,
    },
    tAmpereP: {
      type: DataTypes.INTEGER,
    },
    snVoltage: {
      type: DataTypes.INTEGER,
    },
    rAmpereP: {
      type: DataTypes.INTEGER,
    },
    tnVoltage: {
      type: DataTypes.INTEGER,
    },
    sAmpereP: {
      type: DataTypes.INTEGER,
    },
    COS: {
      type: DataTypes.STRING,
    },
    tipeCOS: {
      type: DataTypes.STRING,
    },
    arester: {
      type: DataTypes.STRING,
    },
    tipeArester: {
      type: DataTypes.STRING,
    },
    rWarna: {
      type: DataTypes.STRING,
    },
    tWarna: {
      type: DataTypes.STRING,
    },
    gWarna: {
      type: DataTypes.STRING,
    },
    sWarna: {
      type: DataTypes.STRING,
    },
    nWarna: {
      type: DataTypes.STRING,
    },
    rMM: {
      type: DataTypes.INTEGER,
    },
    tMM: {
      type: DataTypes.INTEGER,
    },
    gMM: {
      type: DataTypes.INTEGER,
    },
    sMM: {
      type: DataTypes.INTEGER,
    },
    nMM: {
      type: DataTypes.INTEGER,
    },
    temuanKWH: {
      type: DataTypes.STRING,
    },
    rekomendasiKWH: {
      type: DataTypes.STRING,
    },
    suhu: {
      type: DataTypes.INTEGER,
    },
    tanggalAC: {
      type: DataTypes.DATEONLY,
    },
    externalAlarm: {
      type: DataTypes.STRING,
    },
    doorOpen: {
      type: DataTypes.STRING,
    },
    PLNof: {
      type: DataTypes.STRING,
    },
    hightTemp: {
      type: DataTypes.STRING,
    },
    genset: {
      type: DataTypes.STRING,
    },
    smokeFire: {
      type: DataTypes.STRING,
    },
    perangkatEA: {
      type: DataTypes.STRING,
    },
    exhaustFan: {
      type: DataTypes.STRING,
    },
    lampu: {
      type: DataTypes.STRING,
    },
    bangunanFisik: {
      type: DataTypes.STRING,
    },
    pintuShelter: {
      type: DataTypes.STRING,
    },
    temuanEnv: {
      type: DataTypes.STRING,
    },
    rekomendasiEnv: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Pm;
