"use client";
import { useRouter, useSearchParams } from "next/navigation";

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

  return (
    <>
      <div className="text-black">
        <div>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
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
      </div>
    </>
  );
}
