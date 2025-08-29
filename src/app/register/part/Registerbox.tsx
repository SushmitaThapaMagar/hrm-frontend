import Button from "@/app/component/input/Button";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { toast, ToastContainer } from "react-toastify";

export default function LoginBox() {
  const router = useRouter();
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // var username = "Sushmita";
  // Update the event type to FormEvent<HTMLFormElement>
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log(email, fname, lname, number, password);

    // Simulate successful login
    if (email === "test@example.com" && password === "password") {
      Cookies.set("authToken", "dummyToken"); // Simulate storing a token
      router.push("/dashboard"); // Redirect to dashboard
      toast.success("You are Register Succssfully!", { autoClose: 5000 });
    } else {
      console.error("Login failed: Invalid credentials"); // Handle login failure
    }
  };

  return (
    <div className="w-96 h-fit bg-slate-50 my-10 p-4 rounded-sm">
      <div className="text-md font-bold text-black text-center">Log In</div>
      <form
        onSubmit={onFormSubmit}
        className="text-sm text-black my-4 border-t border-gray-300"
      >
        <InputLabel label="First Name"></InputLabel>
        <InputText
          type="text"
          name={"firstname"}
          id={"firstname"}
          placeholder={"Enter name"}
          value={email}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstname(e.target.value);
          }}
        ></InputText>

        <InputLabel label="Last Name"></InputLabel>
        <InputText
          type="text"
          name={"lastname"}
          id={"lastname"}
          placeholder={"Enter username"}
          value={email}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastname(e.target.value);
          }}
        ></InputText>

        <InputLabel label="Username / Email"></InputLabel>
        <InputText
          type="text"
          name={"username"}
          id={"username"}
          placeholder={"Enter username"}
          value={email}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        ></InputText>

        <InputLabel label="Password"></InputLabel>
        <InputText
          type="password"
          name={"password"}
          id={"password"}
          placeholder={"********"}
          value={password}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        ></InputText>

        <InputLabel label="Number"></InputLabel>
        <InputText
          type="text"
          name={"number"}
          id={"number"}
          placeholder={"Enter username"}
          value={email}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNumber(e.target.value);
          }}
        ></InputText>

        <Button
          type={"submit"}
          name={"login"}
          id={"login-button"}
          buttonType={"primary"}
        ></Button>
      </form>
      <ToastContainer />
    </div>
  );
}
