import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl- mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Hasan Sarı" }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "hasan@gmail.com" }}
      />
      <div className="flex gap-2">
        <Button onClick={handleEditUser}>Edit</Button>
        <Button onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditUser;
