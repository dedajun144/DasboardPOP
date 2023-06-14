import { FormControl } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import axios from "axios";
import { BASE_API_URL } from "../utils/Constanst";
import Swal from "sweetalert2";
import { useState } from "react";

const Environtment = (props) => {
  const [suhu, setSuhu] = useState("");
  const [tanggalAC, setTanggalAC] = useState("");
  const [externalAlarm, setExternalAlarm] = useState("");
  const [doorOpen, setDoorOpen] = useState("");
  const [PLNof, setPLNof] = useState("");
  const [highTemp, setHighTemp] = useState("");
  const [genset, setGenset] = useState("");
  const [smokeFire, setsmokeFire] = useState("");
  const [perangkatEA, setPerangkatEA] = useState("");
  const [exhaustFan, setExhaustFan] = useState("");
  const [lampu, setLampu] = useState("");
  const [bangunanFisik, setBangunanFisik] = useState("");
  const [pintuShelter, setPintuShelter] = useState("");
  const [status, setStatus] = useState("");
  const [temuanEnv, setTemuanEnv] = useState("");
  const [rekomendasiEnv, setRekomendasiEnv] = useState("");

  const history = useHistory();
  /* const onSubmit = (data) => {
    props.updatePM(data);
    console.log(data);
    props.history.push("/kwh");
  }; */

  const SavePM = async (event) => {
    event.preventDefault();
    try {
      const { pm } = props;
      const updateData = {
        suhu: suhu,
        tanggalAC: tanggalAC,
        externalAlarm: externalAlarm,
        doorOpen: doorOpen,
        PLNof: PLNof,
        highTemp: highTemp,
        genset: genset,
        smokeFire: smokeFire,
        perangkatEA: perangkatEA,
        exhaustFan: exhaustFan,
        lampu: lampu,
        bangunanFisik: bangunanFisik,
        pintuShelter: pintuShelter,
        status: status,
        temuanEnv: temuanEnv,
        rekomendasiEnv: rekomendasiEnv,
      };
      await axios.post(`http://localhost:5000/pm`, {
        ...pm,
        ...updateData,
      });

      Swal.fire("Awesome!", "You are successfully save Data", "success").then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          props.resetPM();
          history.push("/cover");
        }
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data,
        });
        console.log("error", error.response.data);
      }
      /* if (error.response) {
        setMsg(error.response.data.msg);
      } */
    }
  };
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    /*  console.log(selectedOption); */
    // Lakukan sesuatu dengan nilai yang dipilih
  };
  return (
    <Form className="input-form" onSubmit={SavePM}>
      <div className="col-md-10 offset-md-2">
        <h1>Environtment</h1>

        <Form.Group as={Row} controlId="suhu" className="mb-12 p-2">
          <Form.Label column sm="3">
            Suhu (<span>&#8451;</span>)
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              name="suhu"
              value={suhu}
              onChange={(e) => setSuhu(e.target.value)}
              /*  autoComplete="off"
              {...register("suhu", {
                required: "First name is required.",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First name should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="tanggalAC" className="mb-12 p-2">
          <Form.Label column sm="3">
            Pembersihan AC Terakhir
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="date"
              name="tanggalAC"
              value={tanggalAC}
              onChange={(e) => setTanggalAC(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="ExternalAlarm" className="mb-12 p-2">
          <Form.Label column sm="3">
            External Alarm
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="externalAlarm"
              as="select"
              value={externalAlarm}
              onChange={(e) => setExternalAlarm(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>

          <Form.Label column sm="3">
            Door Open
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="doorOpen"
              as="select"
              value={doorOpen}
              onChange={(e) => setDoorOpen(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="ExternalAlarm" className="mb-12 p-2">
          <Form.Label column sm="3">
            PLN OFF
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="PLNOff"
              as="select"
              value={PLNof}
              onChange={(e) => setPLNof(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>

          <Form.Label column sm="3">
            High Temp
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="highTemp"
              as="select"
              value={highTemp}
              onChange={(e) => setHighTemp(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="ExternalAlarm" className="mb-12 p-2">
          <Form.Label column sm="3">
            Genset
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="genset"
              as="select"
              value={genset}
              onChange={(e) => setGenset(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>

          <Form.Label column sm="3">
            Smoke Fire
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="smokeFire"
              as="select"
              value={smokeFire}
              onChange={(e) => setsmokeFire(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="perangkatEA" className="mb-12 p-2">
          <Form.Label column sm="3">
            Perangkat EA
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="perangkatEA"
              value={perangkatEA}
              onChange={(e) => setPerangkatEA(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="saranaPenunjang" className="mb-12 p-2">
          <Form.Label column sm={{ span: 9, offset: 3 }}>
            Sarana Penunjang Lainnya
          </Form.Label>
        </Form.Group>

        <Form.Group as={Row} controlId="saranaPenunjang" className="mb-12 p-2">
          <Form.Label column sm="3">
            Exhaust Fan
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="exhaustFan"
              as="select"
              value={exhaustFan}
              onChange={(e) => setExhaustFan(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>

          <Form.Label column sm="3">
            lampu
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="lampu"
              as="select"
              value={lampu}
              onChange={(e) => setLampu(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="saranaPenunjang" className="mb-12 p-2">
          <Form.Label column sm="3">
            Bangunan Fisik
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="bangunanFisik"
              as="select"
              value={bangunanFisik}
              onChange={(e) => setBangunanFisik(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>

          <Form.Label column sm="3">
            Pintu Shelter
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="pintuShelter"
              as="select"
              value={pintuShelter}
              onChange={(e) => setPintuShelter(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih</option>
              <option value="OK">OK</option>
              <option value="NOT OK">NOT OK</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="statusPOP" className="mb-12 p-2">
          <Form.Label column sm="3">
            Status POP
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="status"
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              /*  autoComplete="off"
              {...register("tanggalAC", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            >
              {" "}
              <option>Pilih Status POP</option>
              <option value="Good">Good</option>
              <option value="Warning">Warning</option>
              <option value="Danger">Danger</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="temuan" className="mb-12 p-2">
          <Form.Label column sm="3">
            Temuan
          </Form.Label>
          <Col sm="9">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="temuanEnv"
              value={temuanEnv}
              onChange={(e) => setTemuanEnv(e.target.value)}
              /*  autoComplete="off"
              {...register("temuanEnv", {
                required: "Temuan is required.",
                pattern: {
                  message: "Temuan should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="rekomendasi" className="mb-12 p-2">
          <Form.Label column sm="3">
            Rekomendasi
          </Form.Label>
          <Col sm="9">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="rekomendasiEnv"
              value={rekomendasiEnv}
              onChange={(e) => setRekomendasiEnv(e.target.value)}
              /* autoComplete="off"
              {...register("rekomendasiKWH", {
                required: "Rekomendasi is required.",
                pattern: {
                  message: "Rekomendasi should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="temuan" className="mb-12 p-2">
          <Col sm={{ span: 3, offset: 3 }}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
        </Form.Group>
      </div>
    </Form>
  );
};

export default Environtment;
