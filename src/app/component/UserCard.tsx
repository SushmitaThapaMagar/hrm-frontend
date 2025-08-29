"use client"; //indicate to run the code in client side

import React from "react"; //import react library

interface UserCardProps {
  //TS interface that specifies the shape of the props thaht the userCard Component expects
  id: number;
  name: string;
  email: string;
}
//export is used to import this function in other file

//({ id, name, email }: UserCardProps) this destructs the props and inforces type checking using the interface

export default function UserCard({ id, name, email }: UserCardProps) {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
