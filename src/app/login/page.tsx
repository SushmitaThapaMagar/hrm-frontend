import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="border border-white-600 rounded-md mt-30 flex min-h-full flex-col justify-center px-4 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="block w-full rounded-md bg-white px-6 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semi text-pink-600 hover:text-pink-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="block w-full rounded-md bg-white px-6 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm/6 text-gray-500">
            Not a member?
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              <i>Sign Up ?</i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
