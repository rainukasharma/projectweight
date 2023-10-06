import React from "react";
import truck from "../assets/vehicleinformationtruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";

const VehicleInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);
    const form = event.target;
    form.reset();
  };

  const fields = [
    {
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
        name: "ZoneName",
        label: "Zone Name",
        type: "text",
        required: true,
        maxLength: 20,
      },
      {
        name: "Address",
        label: "Address",
        type: "text",
        required: true,
        maxLength: 50,
      },
      {
        name: "ZoneName",
        label: "Zone Name",
        type: "text",
        required: true,
        maxLength: 20,
      },
      {
        name: "Address",
        label: "Address",
        type: "text",
        required: true,
        maxLength: 50,
      },
      {
        name: "ZoneName",
        label: "Zone Name",
        type: "text",
        required: true,
        maxLength: 20,
      },
      {
        name: "Address",
        label: "Address",
        type: "text",
        required: true,
        maxLength: 50,
      },
  ];
  return (
    <div className="flex flex-row">
      <img src={truck} alt="truck" />
      <ReusableForm onSubmit={onSubmit} className = "flex-row" fields={fields} errors={errors} />
    </div>
  );
};

export default VehicleInformation;
