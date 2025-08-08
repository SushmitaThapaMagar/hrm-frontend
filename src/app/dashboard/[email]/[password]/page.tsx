// "use client";
// import { useRouter } from "next/navigation";

// type IProps = {
//   params: {
//     email: string;
//     password: string;
//   };
//   userId: string;
// };

// export default function Dashboard({ params, userId = "1" }: IProps) {
//   const router = useRouter();
//   const { email, password } = params;

//   const clickEvent = () => {
//     // Navigate to another page without dynamic URL construction
//     router.push(`/dashboard/id/${userId}?email=${email}/&password=${password}`); // Adjust the route as necessary
//   };

//   return (
//     <>
//       <div className="text-black">
//         <div>
//           <p>Email : {email}</p>
//           <p>Password : {password}</p>
//           <div>
//             User ID :
//             <button
//               className="border px-2 rounded-md"
//               onClick={() => {
//                 clickEvent;
//               }}
//             >
//               {userId}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
