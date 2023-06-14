import { FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import axios from "axios";

const Cover = (props) => {
  /*   const [sideId, setSideId] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [namaSide, setNamaSide] = useState("");
  const [koordinatSite, setKoordinatSite] = useState("");
  const [tipeSite, setTipeSite] = useState("");
  const [modelSite, setModelSite] = useState(""); */
  const { pm } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      sideId: pm.sideId,
      tanggal: pm.tanggal,
      namaSide: pm.namaSide,
      koordinatSite: pm.koordinatSite,
      tipeSite: pm.tipeSite,
      modelSite: pm.modelSite,
    },
  });
  const history = useHistory();
  /*  const SavePM = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pm", {
        sideId: sideId,
        tanggal: tanggal,
        namaSide: namaSide,
        koordinatSite: koordinatSite,
        tipeSite: tipeSite,
        modelSite: modelSite,
      });
      history.push("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }; */

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    /*  console.log(selectedOption); */
    // Lakukan sesuatu dengan nilai yang dipilih
  };

  const onSubmit = (data) => {
    props.updatePM(data);

    /* history.push("/kwh"); */
    props.history.push("/kwh");
    console.log(data);
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-10 offset-md-2">
        <h1>Cover</h1>
        <Form.Group as={Row} controlId="sideId" className="mb-12 p-2">
          <Form.Label column sm="3">
            Side ID
          </Form.Label>
          <Col sm="9">
            <Form.Control
              /*  value={sideId}
              onChange={(e) => setSideId(e.target.value)} */
              type="text"
              name="sideId"
              autoComplete="off"
              {...register("sideId", {
                required: "First name is required.",
                /* pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First name should contain only characters.",
                }, */
              })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="tanggal" className="mb-12 p-2">
          <Form.Label column sm="3">
            Tanggal Pelaksana
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="date"
              name="tanggal"
              /* value={tanggal}
              onChange={(e) => setTanggal(e.target.value)} */
              autoComplete="off"
              {...register("tanggal", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="namaSide" className="mb-12 p-2">
          <Form.Label column sm="3">
            Nama Site
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="namaSide"
              autoComplete="off"
              {...register("namaSide", {
                required: "Nama Side is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })}
              /*  value={namaSide}
              onChange={(e) => setNamaSide(e.target.value)} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="koordinatSite" className="mb-12 p-2">
          <Form.Label column sm="3">
            Koordinat Site
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="koordinatSite"
              autoComplete="off"
              {...register("koordinatSite", {
                required: "Koordinat Site is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })}
              /*  value={koordinatSite}
              onChange={(e) => setKoordinatSite(e.target.value)} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="tipeSite" className="mb-12 p-2">
          <Form.Label column sm="3">
            Tipe Site
          </Form.Label>
          <Col sm="9">
            <Form.Select
              {...register("tipeSite", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })}
              /* value={tipeSite}
            onChange={(e) => setTipeSite(e.target.value)} */
              arial-label="Pilih Tipe Site"
              as="select"
              name="tipeSite"
              custom
              onChange={handleSelectChange}
            >
              <option>Pilih Tipe Site</option>
              <option value="Super Backbone">Super Backbone</option>
              <option value="Backbone">Backbone</option>
              <option value="Distribusi">Distribusi</option>
              <option value="Akses">Akses</option>
              <option value="Lastmile CPE">Lastmile CPE</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="modelSite" className="mb-12 p-2">
          <Form.Label column sm="3">
            Model Site
          </Form.Label>
          <Col sm="9">
            <Form.Control
              {...register("modelSite", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })}
              /*  value={modelSite}
              onChange={(e) => setModelSite(e.target.value)} */
              arial-label="Pilih Model Site"
              as="select"
              name="modelSite"
              custom
              onChange={handleSelectChange}
            >
              <option>Pilih Model Site</option>
              <option value="Shelter CKD">Shelter CKD</option>
              <option value="Distribusi">Distribusi</option>
              <option value="Shelter Permanen">Shelter Permanen</option>
              <option value="PLC">PLC</option>
              <option value="ODC">ODC</option>
              <option value="Mikro POP">Mikro POP</option>
              <option value="Mini POP">Mini POP</option>
              <option value="OLT Gantung">OLT Gantung</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="temuan" className="mb-12 p-2">
          <Col sm={{ span: 3, offset: 3 }}>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Col>
        </Form.Group>
      </div>
    </Form>
  );
};

export default Cover;
