import Button from "@/app/component/input/Button";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginBox() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = () => {
    console.log(email, password);
    alert("Form Submitted");
    router.push(`/dashboard?email=${email}&password=${password}`);
  };

  return (
    <div className="w-96 h-fit bg-slate-50 my-10 p-4 rounded-sm">
      <div className="text-md font-bold text-black text-center">Log In</div>
      <div className="text-sm text-black my-4 border-t border-gray-300">
        <InputLabel label="Username / Email"></InputLabel>
        <InputText
          type="text"
          name={"username"}
          id={"username"}
          placeholder={"Enter username"}
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
        <Button
          value="Login"
          name={"login"}
          id={"login-button"}
          buttonClickEvent={() => onFormSubmit()}
          buttonType={"primary"}
        ></Button>
      </div>
    </div>
  );
}
