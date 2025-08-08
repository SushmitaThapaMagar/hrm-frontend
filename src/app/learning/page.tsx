"use client";

export default function LearningPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        {" "}
        {/* wider max width */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Learning</h1>
        <div className="overflow-x-auto">
          {" "}
          {/* horizontal scroll on small screens */}
          <table className="w-full min-w-full bg-white rounded-lg shadow-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-5 text-left font-semibold text-gray-700 border-b">
                  Date/Duration
                </th>
                <th className="py-3 px-5 text-left font-semibold text-gray-700 border-b">
                  Topics
                </th>
                <th className="py-3 px-5 text-left font-semibold text-gray-700 border-b">
                  Learning
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
                <td className="py-3 px-5 border-b">04/12-04/16</td>
                <td className="py-3 px-5 border-b">Js Fundamentals</td>
                <td className="py-3 px-5 border-b">
                  Functions, Types and other Basics : Set up for ReactJS and
                  NextJS Environment
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-5 border-b">04/19-04/23</td>
                <td className="py-3 px-5 border-b">Using NextJs</td>
                <td className="py-3 px-5 border-b">
                  Login, Register UI, Passed the email and password in Url and
                  Display it in Dashboard for 3s, Use of Context Provider:normal
                  example of changing theme using context
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
              <tr>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
                <td className="py-3 px-5"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
