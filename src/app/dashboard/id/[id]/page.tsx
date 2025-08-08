// "use client";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// type SeProps = {
//   params: {
//     id: string;
//     email: string;
//     password: string;
//   };
// };

// export default function UserId({ params }: SeProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const email = searchParams.get("email");
//   const password = searchParams.get("password");

//   useEffect(() => {
//     setTimeout(() => {
//       router.push(`/dashboard/${email}/${password}`);
//     }, 3000);
//   }, []);
//   return (
//     <div className="text-black">
//       {" "}
//       My ID number is : {params.id} and I will be back to the Email and Password
//       after 3 seconds.
//     </div>
//   );
// }
