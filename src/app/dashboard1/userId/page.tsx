"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type UserProps = {
  params: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phonenumber: number;
  };
};

export default function userId({ params }: UserProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const userId = searchParams.get("userId");
  const firstname = searchParams.get("firstname");
  const lastname = searchParams.get("lastname");
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const phonenumber = searchParams.get("phonenumber");

  useEffect(() => {
    setTimeout(() => {
      router.push(
        `/dashboard1?firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}&phonenumber=${phonenumber}`
      );
    }, 3000);
  }, []);
  return <div className="text-black">{userId}</div>;
}
