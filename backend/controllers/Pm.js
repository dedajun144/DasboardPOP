import Pm from "../models/PmModel.js";
import { Sequelize } from "sequelize";
const { Op } = Sequelize;

export const getSbackbone = async (req, res) => {
  try {
    const sbackbone = await Pm.findAll();
    res.json(sbackbone);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSbackboneById = async (req, res) => {
  try {
    const sbackbone = await Pm.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(sbackbone[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getStatusGood = async (req, res) => {
  try {
    /* const Pm = await Pm.findAll();
    req.json(Pm); */

    const count = await Pm.count({
      where: {
        status: "Good",
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getStatusWarning = async (req, res) => {
  try {
    /* const Pm = await Pm.findAll();
    req.json(Pm); */

    const count = await Pm.count({
      where: {
        status: "Warning",
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getStatusDanger = async (req, res) => {
  try {
    /* const Pm = await Pm.findAll();
    req.json(Pm); */

    const count = await Pm.count({
      where: {
        status: "Danger",
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSbackboneCount = async (req, res) => {
  try {
    const sbackbone = await Pm.findAll({
      where: {
        tipeSite: "Super Backbone",
      },
    });
    res.json(sbackbone);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSbackboneGood = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Good" }, { tipeSite: "Super Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSbackboneWarning = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Warning" }, { tipeSite: "Super Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSbackboneDanger = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Danger" }, { tipeSite: "Super Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBackboneGood = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Good" }, { tipeSite: "Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBackboneWarning = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Warning" }, { tipeSite: "Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getBackboneDanger = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Danger" }, { tipeSite: "Backbone" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getDistribusiGood = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Good" }, { tipeSite: "Distribusi" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getDistribusiWarning = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Warning" }, { tipeSite: "Distribusi" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getDistribusiDanger = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Danger" }, { tipeSite: "Distribusi" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAksesGood = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Good" }, { tipeSite: "Akses" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAksesWarning = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Warning" }, { tipeSite: "Akses" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAksesDanger = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Danger" }, { tipeSite: "Akses" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getLastmileCPEGood = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Good" }, { tipeSite: "Lastmile CPE" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getLastmileCPEWarning = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Warning" }, { tipeSite: "Lastmile CPE" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getLastmileCPEDanger = async (req, res) => {
  try {
    const count = await Pm.count({
      where: {
        [Op.and]: [{ status: "Danger" }, { tipeSite: "Lastmile CPE" }],
      },
    });
    res.json(count);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const savePm = async (req, res) => {
  try {
    await Pm.create(req.body);
    res.json({
      message: "Data PM Tersimpan",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
