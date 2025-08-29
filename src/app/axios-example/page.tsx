"use client"; //client side directive

import React, { useEffect, useState } from "react"; //react hooks fro managing the side effects and state functional components
import axios from "axios"; // a promise-based HTTP client for making requests to APIs.
import UserCard from "../component/UserCard"; //a custom component that display user information

//functional component
export default function AxiosExample() {
  //users is state varaible that holds the current user data
  // whereas the setUsers is the function that allow you to update the state of the users variable
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); //its in boolean

  //hook that is used to handle the side effects such as data fetching
  useEffect(() => {
    // the axios component makes a GET request to the specified API endpoint to fetch use data
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //(res) represents the response objects that Axios returns //when the request is succesful, the response data is passes to the function(setUsers which updates the users state)
        setUsers(res.data); //res.data is where the actual data from the response is stored
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  //conditional rendering

  if (loading) return <p className="text-center">Loading...</p>;

  //rendering user data
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users (Axios)</h1>
      <div className="grid gap-4">
        {/* map() is used to iterate over the users array and render a list of UserCard component for eachothe */}

        {users.map((user) => (
          <UserCard
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}
