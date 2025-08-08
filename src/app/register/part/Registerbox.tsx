import Button from "@/app/component/input/Button";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Registerbox() {
  const router = useRouter();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const onSubmit = () => {
    console.log(firstname, lastname, email, password, phonenumber);
    alert("Register Successsfully!");
    router.push(
      `/dashboard1?firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&phonenumber=${phonenumber}`
    );
  };

  return (
    <div className="w-96 h-fit bg-slate-50 my-10 p-4 rounded-md">
      <div className="text-lg font-bold text-cyan-600 text-center">Sign Up</div>
      <div className="text-sm text-black my-5 mx-2 border-t border-gray-300">
        <InputLabel label="First Name"></InputLabel>
        <InputText
          type="name"
          name={"fname"}
          id={"fname"}
          placeholder={"Enter Your First Name"}
          value={firstname}
          onChangeInput={(
            e: React.ChangeEvent<HTMLInputElement> //use for type safety
          ) => setFirstName(e.target.value)}
        ></InputText>

        <InputLabel label="Last Name"></InputLabel>
        <InputText
          type="name"
          name={"lname"}
          id={"lname"}
          placeholder={"Enter Your Last Name"}
          value={lastname}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        ></InputText>

        <InputLabel label="Email"></InputLabel>
        <InputText
          type="text"
          name={"email"}
          id={"email"}
          placeholder={"Enter Your Email"}
          value={email}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
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

        <InputLabel label="Phone Number"></InputLabel>
        <InputText
          type="number"
          name={"phoneno"}
          id={"phoneno"}
          placeholder={"Enter Phone Number"}
          value={phonenumber}
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        ></InputText>
        <Button
          name={"register"}
          value={"Register"}
          id={"register-button"}
          buttonClickEvent={() => onSubmit()}
          buttonType={"primary"}
        ></Button>
      </div>
    </div>
  );
}
