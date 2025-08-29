"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ProtectedRoute from "../component/ProtectedRoute";
import ItemList from "../component/ItemList";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/firebase/config";

type IProps = {
  params: {
    email: string;
    password: string;
  };
  userId: string;
};

export default function Dashboard({ userId = "1" }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  const clickEvent = () => {
    router.push(
      `/dashboard/userId?userId=${userId}&email=${email}&password=${password}`
    );
  };

  // 🔹 Firebase Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success(" Logged out successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(" Failed to log out. Please try again.");
    }
  };

  return (
    <div className="p-9">
      {/* Mock API Data */}
      <h2 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-black">
        Mock API Example
      </h2>
      <ItemList />
      <div className="mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg text-black">
        <div className="mb-4">
          <p className="text-md font-semibold">
            Email: <span className="font-normal">{email}</span>
          </p>
          <p className="text-md font-semibold">
            Password: <span className="font-normal">{password}</span>
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-md">User ID:</span>
          <button
            className="border border-blue-500 bg-blue-100 text-blue-500 px-1 rounded-md transition duration-200 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => {
              clickEvent();
            }}
          >
            {userId}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-800">
            {auth.currentUser?.displayName}
          </p>
          <p className="text-md text-gray-600">{auth.currentUser?.email}</p>
        </div>

        {/* Firebase Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200 shadow-md transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
