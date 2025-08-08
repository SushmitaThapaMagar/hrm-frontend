"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
type IiProps = {
  params: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phonenumber: number;
  };
  userId: string;
};

export default function Dashboard1({ userId = "2" }: IiProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firstname = searchParams.get("firstname");
  const lastname = searchParams.get("lastname");
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const phonenumber = searchParams.get("phonenumber");
  const clickEvent = () => {
    router.push(
      `/dashboard1/userId?userId=${userId}&firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&phonenumber=${phonenumber}`
    );
  };

  return (
    <>
      <div className="text-black">
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname} </p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Phone Number: {phonenumber}</p>

        <div>
          User ID :
          <button
            className="border px-2 rounded-md"
            onClick={() => {
              clickEvent();
            }}
          >
            {userId}
          </button>
        </div>
      </div>
    </>
  );
}
