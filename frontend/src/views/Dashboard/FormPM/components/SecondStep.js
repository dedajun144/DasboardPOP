import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function SecondStep() {
  const { register, handleSubmit, errors } = useForm();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    /* history.push("/kwh"); */
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  autoComplete="off"
                  {...register("first_name", {
                    required: "First name is required.",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "First name should contain only characters.",
                    },
                  })}
                />
              </Form.Group>

              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  autoComplete="off"
                  {...register("last_name", {
                    required: "Last name is required.",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Last name should contain only characters.",
                    },
                  })}
                />
              </Form.Group>

              <button onClick={handleNext}>Next</button>
            </div>
          </Form>
        );
      case 2:
        return (
          <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.email}
                  name="first_name"
                  placeholder="Enter your first name"
                  autoComplete="off"
                  {...register("first_name", {
                    required: "First name is required.",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "First name should contain only characters.",
                    },
                  })}
                />
              </Form.Group>

              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  autoComplete="off"
                  {...register("last_name", {
                    required: "Last name is required.",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Last name should contain only characters.",
                    },
                  })}
                />
              </Form.Group>
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </Form>
        );
      case 3:
        return (
          <div>
            <p>Review your information:</p>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Multi-Step Form</h2>
      {renderForm()}
    </div>
  );
}

export default SecondStep;
