import { FormControl } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import axios from "axios";
import { BASE_API_URL } from "utils/Constanst";
import { useParams } from "react-router-dom";
const Kwh = (props) => {
  const [idCustomer, setIdCustomer] = useState("");
  const [phasa, setPhasa] = useState("");
  const [dayaKVA, setDayaKVA] = useState("");
  const [rAmpere, setRAmpere] = useState("");
  const [sAmpere, setSAmpere] = useState("");
  const [tAmpere, setTAmpere] = useState("");
  const [rnVoltage, setRnVoltage] = useState("");
  const [ngVoltage, setNgVoltage] = useState("");
  const [tAmpereP, setTAmpereP] = useState("");
  const [snVoltage, setSnVoltage] = useState("");
  const [rAmpereP, setRAmpereP] = useState("");
  const [tnVoltage, setTnVoltage] = useState("");
  const [sAmpereP, setSAmpereP] = useState("");
  const [COS, setCOS] = useState("");
  const [tipeCOS, setTipeCOS] = useState("");
  const [arester, setArester] = useState("");
  const [tipeArester, setTipeArester] = useState("");
  const [rWarna, setRWarna] = useState("");
  const [tWarna, setTWarna] = useState("");
  const [gWarna, setGWarna] = useState("");
  const [sWarna, setSWarna] = useState("");
  const [nWarna, setNWarna] = useState("");
  const [rMM, setRMM] = useState("");
  const [tMM, setTMM] = useState("");
  const [gMM, setGMM] = useState("");
  const [sMM, setSMM] = useState("");
  const [nMM, setNMM] = useState("");
  const [temuanKWH, setTemuanKWH] = useState("");
  const [rekomendasiKWH, setRekomendasiKWH] = useState("");

  const { pm } = props;
  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm({
    /*    defaultValues: {
      idCustomer: pm.idCustomer,
      phasa: pm.phasa,
      dayaKVA: pm.dayaKVA,
      rAmpere: pm.rAmpere,
      sAmpere: pm.sAmpere,
      tAmpere: pm.tAmpere,
      rnVoltage: pm.rnVoltage,
      ngVoltage: pm.ngVoltage,
      tAmpereP: pm.tAmpereP,
      snVoltage: pm.snVoltage,
      rAmpereP: pm.rAmpereP,
      tnVoltage: pm.tnVoltage,
      sAmpereP: pm.sAmpereP,
      COS: pm.COS,
      tipeCOS: pm.tipeCOS,
      arester: pm.arester,
      tipeArester: pm.tipeArester,
      rWarna: pm.rWarna,
      tWarna: pm.tWarna,
      gWarna: pm.gWarna,
      sWarna: pm.sWarna,
      nWarna: pm.nWarna,
      rMM: pm.rMM,
      tMM: pm.tMM,
      gMM: pm.gMM,
      sMM: pm.sMM,
      nMM: pm.nMM,
      temuanKWH: pm.temuanKWH,
      rekomendasiKWH: pm.rekomendasiKWH,
    }, */
  });
  const history = useHistory();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    // Lakukan sesuatu dengan nilai yang dipilih
  };

  const onSubmit = (data) => {
    props.updatePM(data);
    console.log(data);

    props.history.push("/environtment");
  };

  const getKwhByID = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/pm/sbackbone/${id}`);
      setIdCustomer(response.data.idCustomer);
      setPhasa(response.data.phasa);
      setDayaKVA(response.data.dayaKVA);
      setRAmpere(response.data.rAmpere);
      setSAmpere(response.data.sAmpere);
      setTAmpere(response.data.tAmpere);
      setRnVoltage(response.data.rnVoltage);
      setNgVoltage(response.data.ngVoltage);
      setTAmpere(response.data.tAmpere);
      setSnVoltage(response.data.snVoltage);
      setRAmpereP(response.data.rAmpereP);
      setTnVoltage(response.data.tnVoltage);
      setSAmpereP(response.data.sAmpereP);
      setCOS(response.data.COS);
      setTipeCOS(response.data.tipeCOS);
      setArester(response.data.arester);
      setTipeArester(response.data.tipeArester);
      setRWarna(response.data.rWarna);
      setTWarna(response.data.tWarna);
      setGWarna(response.data.gWarna);
      setSWarna(response.data.sWarna);
      setNWarna(response.data.nWarna);
      setRMM(response.data.rMM);
      setTMM(response.data.tMM);
      setGMM(response.data.gMM);
      setSMM(response.data.sMM);
      setNMM(response.data.nMM);
      setTemuanKWH(response.data.temuanKWH);
      setRekomendasiKWH(response.data.rekomendasiKWH);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getKwhByID();
  }, []);

  /* const SavePM = async (event) => {
    event.preventDefault();
    try {
      const { pm } = props;
      const updateData = {
        idCustomer: idCustomer,
        phasa: phasa,
        dayaKVA: dayaKVA,
        rAmpere: rAmpere,
        sAmpere: sAmpere,
        tAmpere: tAmpere,
        rnVoltage: rnVoltage,
        ngVoltage: ngVoltage,
        tAmpereP: tAmpereP,
        snVoltage: snVoltage,
        rAmpereP: rAmpereP,
        tnVoltage: tnVoltage,
        sAmpereP: sAmpereP,
        COS: COS,
        tipeCOS: tipeCOS,
        arester: arester,
        tipeArester: tipeArester,
        rWarna: rWarna,
        tWarna: tWarna,
        gWarna: gWarna,
        sWarna: sWarna,
        nWarna: nWarna,
        rMM: rMM,
        tMM: tMM,
        gMM: gMM,
        sMM: sMM,
        nMM: nMM,
        temuanKWH: temuanKWH,
        rekomendasiKWH: rekomendasiKWH,
      };
      await axios.post(`http://localhost:5000/pm`, {
        ...pm,
        ...updateData,
      });
      history.push("/environtment");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }; */
  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-10 offset-md-2">
        <h1>KWH</h1>
        <Form.Group as={Row} controlId="idCustomer" className="mb-12 p-2">
          <Form.Label column sm="3">
            ID Customer
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              name="idCustomer"
              value={idCustomer}
              readOnly
              /*     onChange={(e) => setIdCustomer(e.target.value)}  */

              autoComplete="off"
              /*   {...register("idCustomer", {
                required: "First name is required.",
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="phasa" className="mb-12 p-2">
          <Form.Label column sm="3">
            phasa
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              name="phasa"
              value={phasa}
              readOnly
              /*     value={phasa}
              onChange={(e) => setPhasa(e.target.value)} */
              /* autoComplete="off"
              {...register("phasa", {
                required: "Phasa is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="dayaKVA" className="mb-12 p-2">
          <Form.Label column sm="3">
            Daya (KVA)
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              name="dayaKVA"
              autoComplete="off"
              value={dayaKVA}
              readOnly
              /*  value={dayaKVA}
              onChange={(e) => setDayaKVA(e.target.value)} */
              /*  {...register("dayaKVA", {
                required: "Daya (KVA) is required.",
                pattern: {
                  message: "Daya (KVA)  should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="kapasitasMCB" className="mb-12 p-2">
          <Form.Label column sm="3">
            Kapasitas MCB
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="number"
              placeholder="R (ampere)"
              name="rAmpere"
              value={rAmpere}
              readOnly
              /*   value={rAmpere}
              onChange={(e) => setRAmpere(e.target.value)} */
              autoComplete="off"
              /*   {...register("rAmpere", {
                required: "R Ampere is required.",
                pattern: {
                  message: "R Ampere should contain only characters.",
                },
              })} */
            />
          </Col>

          <Col sm="3">
            <Form.Control
              type="number"
              name="sAmpere"
              /*  value={sAmpere}
              onChange={(e) => setSAmpere(e.target.value)} */
              placeholder="S (ampere)"
              value={sAmpere}
              readOnly
              autoComplete="off"
              /*  {...register("sAmpere", {
                required: "S Ampere is required.",
                pattern: {
                  message: "S Ampere should contain only characters.",
                },
              })} */
            />
          </Col>

          <Col sm="3">
            <Form.Control
              type="number"
              name="tAmpere"
              /* value={tAmpere}
              onChange={(e) => setTAmpere(e.target.value)} */
              placeholder="T (ampere)"
              value={tAmpere}
              readOnly
              /*  autoComplete="off"
              {...register("tAmpere", {
                required: "T Ampere is required.",
                pattern: {
                  message: "T Ampere should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="pengukuranPhasa" className="mb-12 p-2">
          <Row>
            <Form.Label column sm="3">
              Pengukuran Phasa
            </Form.Label>

            <Col sm="3">
              <Form.Control
                type="number"
                placeholder="R-N Voltage"
                name="rnVoltage"
                value={rnVoltage}
                readOnly
                /*   value={rnVoltage}
                onChange={(e) => setRnVoltage(e.target.value)} */
                autoComplete="off"
                /*  {...register("rnVoltage", {
                  required: "R Ampere is required.",
                  pattern: {
                    message: "R Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="ngVoltage"
                placeholder="N-G Voltage"
                value={ngVoltage}
                readOnly
                /*   value={ngVoltage}
                onChange={(e) => setNgVoltage(e.target.value)} */
                autoComplete="off"
                /*  {...register("ngVoltage", {
                  required: "N-G Voltage is required.",
                  pattern: {
                    message: "N-G Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="tAmpereP"
                /*  value={tAmpereP}
                onChange={(e) => setTAmpereP(e.target.value)} */
                placeholder="T (ampere)"
                autoComplete="off"
                value={tAmpere}
                readOnly
                /*  {...register("tAmpereP", {
                  required: "T Ampere is required.",
                  pattern: {
                    message: "T Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 3, offset: 3 }}>
              <Form.Control
                type="number"
                placeholder="S-N Voltage"
                name="snVoltage"
                value={snVoltage}
                readOnly
                /*  value={snVoltage}
                onChange={(e) => setSnVoltage(e.target.value)} */
                /*  autoComplete="off"
                {...register("snVoltage", {
                  required: "S-N Voltage is required.",
                  pattern: {
                    message: "S-N Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="rAmpereP"
                /*  value={rAmpereP}
                onChange={(e) => setRAmpereP(e.target.value)} */
                placeholder="R (Ampere)"
                value={rAmpere}
                readOnly
                /*  autoComplete="off"
                {...register("rAmpereP", {
                  required: "T-N Voltage is required.",
                  pattern: {
                    message: "T-N Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 3, offset: 3 }}>
              <Form.Control
                type="number"
                name="tnVoltage"
                /*  value={tnVoltage}
                onChange={(e) => setTnVoltage(e.target.value)} */
                placeholder="T-N Voltage"
                autoComplete="off"
                value={tnVoltage}
                readOnly
                /*  {...register("tnVoltage", {
                  required: "T-N Voltage is required.",
                  pattern: {
                    message: "T-N Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="sAmpereP"
                /* value={sAmpereP}
                onChange={(e) => setSAmpereP(e.target.value)} */
                placeholder="S (ampere)"
                autoComplete="off"
                value={sAmpere}
                readOnly
                /*    {...register("sAmpereP", {
                  required: "S Ampere is required.",
                  pattern: {
                    message: "S Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Row} controlId="COS" className="mb-12 p-2">
          <Form.Label column sm="3">
            COS
          </Form.Label>
          <Col sm="4">
            <Form.Control
              arial-label="Pilih COS"
              as="select"
              name="COS"
              type="text"
              custom
              value={COS}
              readOnly
              /*  value={COS}
              onChange={(e) => setCOS(e.target.value)} */
              /*  {...register("COS", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
              onChange={handleSelectChange}
            >
              <option value="Ada">ADA</option>
              <option value="Tidak Ada">Tidak Ada</option>
            </Form.Control>
          </Col>

          <Col sm={{ span: 5 }}>
            <Form.Control
              type="text"
              name="tipeCOS"
              placeholder="Tipe COS"
              value={tipeCOS}
              readOnly
              /*   value={tipeCOS}
              onChange={(e) => setTipeCOS(e.target.value)} */
              autoComplete="off"
              /*   {...register("tipeCOS", {
                required: "S Ampere is required.",
                pattern: {
                  message: "S Ampere should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="arester" className="mb-12 p-2">
          <Form.Label column sm="3">
            Arester
          </Form.Label>
          <Col sm="4">
            <Form.Control
              arial-label="Pilih Arester"
              as="select"
              type="text"
              name="arester"
              custom
              value={arester}
              readOnly
              /*  value={arester}
              onChange={(e) => setArester(e.target.value)} */
              /*  {...register("arester", {
                required: "Tanggal is required.",
                pattern: {
                  message: "First name should contain only characters.",
                },
              })} */
              onChange={handleSelectChange}
            >
              <option value="Ada">ADA</option>
              <option value="Tidak Ada">Tidak Ada</option>
            </Form.Control>
          </Col>

          <Col sm={{ span: 5 }}>
            <Form.Control
              type="text"
              name="tipeArester"
              placeholder="Tipe Arester"
              autoComplete="off"
              value={tipeArester}
              readOnly
              /*  value={tipeArester}
              onChange={(e) => setTipeArester(e.target.value)} */
              /*  {...register("tipeArester", {
                required: "Tipe Arestere is required.",
                pattern: {
                  message: "Tipe Arester should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="kabelOutputKWH" className="mb-12 p-2">
          <Row>
            <Col md={{ span: 6, offset: 6 }}>
              <Form.Label>Kabel Output KWH</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col sm="3">
              <Form.Label>Warna </Form.Label>
            </Col>

            <Col sm="3">
              <Form.Control
                type="text"
                name="rWarna"
                placeholder="R-Warna"
                value={rWarna}
                readOnly
                /*  value={rWarna}
                onChange={(e) => setRWarna(e.target.value)} */
                /*  autoComplete="off"
                {...register("rWarna", {
                  required: "R-Warna is required.",
                  pattern: {
                    message: "T-N Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="text"
                name="tWarna"
                placeholder="T-Warna"
                value={tWarna}
                readOnly
                /*   value={tWarna}
                onChange={(e) => setTWarna(e.target.value)} */
                /*  autoComplete="off"
                {...register("tWarna", {
                  required: "T Ampere is required.",
                  pattern: {
                    message: "T Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="text"
                name="gWarna"
                placeholder="G-Warana"
                autoComplete="off"
                value={gWarna}
                readOnly
                /*  value={gWarna}
                onChange={(e) => setGWarna(e.target.value)} */
                /*   {...register("gWarna", {
                  required: "G Ampere is required.",
                  pattern: {
                    message: "G Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 3, offset: 3 }}>
              <Form.Control
                type="text"
                name="sWarna"
                placeholder="S-Warna"
                autoComplete="off"
                value={sWarna}
                readOnly
                /*   value={sWarna}
                onChange={(e) => setSWarna(e.target.value)} */
                /*  {...register("sWarna", {
                  required: "S-Warna is required.",
                  pattern: {
                    message: "S-Warna should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="text"
                name="nWarna"
                placeholder="N-Warna"
                autoComplete="off"
                value={nWarna}
                readOnly
                /*   {...register("nWarna", {
                  required: "T Ampere is required.",
                  pattern: {
                    message: "T Ampere should contain only characters.",
                  },
                })} */
                /*  value={nWarna}
                onChange={(e) => setNWarna(e.target.value)} */
              />
            </Col>
          </Row>

          <Row>
            <Col sm="3">
              <Form.Label>Luas Penampang</Form.Label>
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="rMM"
                autoComplete="off"
                placeholder="R(MM)"
                value={rMM}
                readOnly
                /*  value={rMM}
                onChange={(e) => setRMM(e.target.value)} */
                /*  {...register("rMM", {
                  required: "R-Warna is required.",
                  pattern: {
                    message: "T-N Voltage should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="tMM"
                /* value={tMM}
                onChange={(e) => setTMM(e.target.value)} */
                placeholder="T (MM)"
                autoComplete="off"
                value={tMM}
                readOnly
                /*   {...register("tMM", {
                  required: "T Ampere is required.",
                  pattern: {
                    message: "T Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="gMM"
                placeholder="G (MM)"
                autoComplete="off"
                value={gMM}
                readOnly
                /* value={gMM}
                onChange={(e) => setGMM(e.target.value)} */
                /*   {...register("gMM", {
                  required: "G Ampere is required.",
                  pattern: {
                    message: "G Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 3, offset: 3 }}>
              <Form.Control
                type="number"
                name="sMM"
                placeholder="S (MM)"
                autoComplete="off"
                value={sMM}
                readOnly
                /*  value={sMM}
                onChange={(e) => setSMM(e.target.value)} */
                /*   {...register("sMM", {
                  required: "S-Warna is required.",
                  pattern: {
                    message: "S-Warna should contain only characters.",
                  },
                })} */
              />
            </Col>

            <Col sm="3">
              <Form.Control
                type="number"
                name="nMM"
                placeholder="N (MM)"
                value={nMM}
                readOnly
                /* value={nMM}
                onChange={(e) => setNMM(e.target.value)} */
                /*    autoComplete="off"
                {...register("nMM", {
                  required: "T Ampere is required.",
                  pattern: {
                    message: "T Ampere should contain only characters.",
                  },
                })} */
              />
            </Col>
          </Row>
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
              name="temuanKWH"
              value={temuanKWH}
              readOnly
              /* value={temuanKWH}
              onChange={(e) => setTemuanKWH(e.target.value)} */
              /*  autoComplete="off"
              {...register("temuanKWH", {
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
              name="rekomendasiKWH"
              value={rekomendasiKWH}
              readOnly
              /*  value={rekomendasiKWH}
              onChange={(e) => setRekomendasiKWH(e.target.value)} */
              /*  autoComplete="off"
              {...register("rekomendasiKWH", {
                required: "Rekomendasi is required.",
                pattern: {
                  message: "Rekomendasi should contain only characters.",
                },
              })} */
            />
          </Col>
        </Form.Group>

        {/*  <Form.Group as={Row} controlId="buttom" className="mb-12 p-2">
          <Col sm={{ span: 3, offset: 3 }}>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Col>
        </Form.Group> */}
      </div>
    </Form>
  );
};

export default Kwh;
