import express from "express";
import { Logout, Register, getUsers, login } from "../controllers/Users.js";
// function yang user tidak dapat diakses jika tidak login
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshtoken } from "../controllers/RefreshToken.js";
import {
  getSbackboneGood,
  getSbackboneWarning,
  getSbackboneDanger,
  getBackboneGood,
  getBackboneWarning,
  getBackboneDanger,
  getDistribusiGood,
  getDistribusiWarning,
  getDistribusiDanger,
  getAksesGood,
  getAksesWarning,
  getAksesDanger,
  getLastmileCPEGood,
  getLastmileCPEWarning,
  getLastmileCPEDanger,
  getStatusGood,
  getStatusWarning,
  getStatusDanger,
  savePm,
  getSbackboneById,
  getSbackbone,
  getSbackboneCount,
} from "../controllers/Pm.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", login);
router.get("/token", refreshtoken);
router.delete("/logout", Logout);

//list pop
router.get("/pm/sbackbone", getSbackbone);
router.get("/pm/sbackbone/:id", getSbackboneById);

//Pm
router.get("/pm/count/good", getStatusGood);
router.get("/pm/count/warning", getStatusWarning);
router.get("/pm/count/danger", getStatusDanger);

router.get("/pm/count/sbackbonegood", getSbackboneGood);
router.get("/pm/count/sbackbonewarning", getSbackboneWarning);
router.get("/pm/count/sbackbonedanger", getSbackboneDanger);

router.get("/pm/count/sbackbonecount", getSbackboneCount);

router.get("/pm/count/backbonegood", getBackboneGood);
router.get("/pm/count/backbonewarning", getBackboneWarning);
router.get("/pm/count/backbonedanger", getBackboneDanger);

router.get("/pm/count/distribusigood", getDistribusiGood);
router.get("/pm/count/distribusiwarning", getDistribusiWarning);
router.get("/pm/count/distribusidanger", getDistribusiDanger);

router.get("/pm/count/aksesgood", getAksesGood);
router.get("/pm/count/akseswarning", getAksesWarning);
router.get("/pm/count/aksesdanger", getAksesDanger);

router.get("/pm/count/lastmilecpegood", getLastmileCPEGood);
router.get("/pm/count/lastmilecpewarning", getLastmileCPEWarning);
router.get("/pm/count/lastmilecpedanger", getLastmileCPEDanger);

router.post("/pm", savePm);

export default router;
