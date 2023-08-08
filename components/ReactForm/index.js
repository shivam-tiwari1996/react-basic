import React, { useState } from "react";
import CustomButton from "../../Shared/CustomButtom";
import { Button, TextField } from "@mui/material";

const ReactForm = () => {
  const [name, setName] = useState("");
  return (
    <form className="p-10 flex-col flex gap-5">
      <CustomButton color="success" variant="contained">
        Success
      </CustomButton>
      <CustomButton color="primary" rounded>
        Primary
      </CustomButton>
      <CustomButton color="secondary" variant="outlined" rounded>
        Secondary
      </CustomButton>
      <CustomButton color="error" rounded variant="contained">
        Error
      </CustomButton>
      <Button variant="contained" color="error">
        Mui Button
      </Button>
      <div className="relative border-2 flex">
        <img
          src="https://source.unsplash.com/random/900x700/?fruit"
          alt=""
          className=""
        />
        <span className="absolute flex-col bg-white bg-opacity-25 backdrop-blur-2xl z-50 border-2 w-full flex justify-center items-center h-96">
          <TextField
            placeholder="Name"
            className="text"
            onChange={(e) => setName(e.target.value)}
          />
          <p>{name}</p>
        </span>
      </div>
      {/* <CustomButton text="Cancel" />
      <CustomButton text="Submit" /> */}
    </form>
  );
};

export default ReactForm;
