import Button from "@/app/component/input/Button";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { toast, ToastContainer } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, googleauth } from "@/firebase/config";
import { signIn } from "next-auth/react";

export default function LoginBox() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log(email, password);

    // Simulate successful login
    if (email === "test@example.com" && password === "password") {
      Cookies.set("authToken", "dummyToken"); // Simulate storing a token
      router.push("/");
      toast.success("You are logged in successfully!", { autoClose: 10000 });
    } else {
      console.error("Login failed: Invalid credentials"); // Handle login failure
      toast.error("Invalid credentials. Please try again.");
    }
  };

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithPopup(auth, googleauth);
    router.push("/dashboard");
  };

  const handleGithubLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("github", { callbackUrl: "/learning" });
    router.push("/learning");
  };

  return (
    <div className="w-96 h-fit bg-slate-50 my-10 p-4 rounded-sm">
      <div className="text-md font-bold text-black text-center">Log In</div>
      <form
        onSubmit={onFormSubmit}
        className="text-sm text-black my-4 border-t border-gray-300"
      >
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
        <Button
          type={"submit"}
          name={"login"}
          id={"login-button"}
          buttonType={"primary"}
        ></Button>

        <div className="flex items-center justify-center mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={handleGoogleLogin}
            type={"button"}
          >
            Login with Google
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={handleGithubLogin}
            type={"button"}
          >
            Login with Github
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
