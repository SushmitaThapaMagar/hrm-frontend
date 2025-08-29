"use client";

import React, { useEffect, useState } from "react"; //hooks for managing the side effects and state in the functional compoenent
import UserCard from "../component/UserCard";
//functional components
export default function FetchExample() {
  // users is the state variable that holds the current state of the users data
  // setusers is the function that allows you to update the state of the users varible

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function fetchUsers() {
      try {
        //Endpoint of the mock API from JSONPlaceholder
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        //this is for data fetching
        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center">Loading......</p>;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users (Fetch API)</h1>
      <div className="space-y-3">
        {users.map((user) => (
          <UserCard
            id={user.id} // used for identifying elements in the DOM
            key={user.id} // used by React for optimizing rendering of lists
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}
