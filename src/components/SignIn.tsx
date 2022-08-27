import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center  bg-[#101010]">
      <div className="flex flex-col pb-6 py-4 px-12 sm:px-32 sm:pb-16 sm:py-4 h-auto justify-center items-center rounded-2xl  bg-[#FFFFFF]">
        <div className="flex flex-col gap-4 p-12 items-center justify-center">
          <img
            src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
            alt="mono-logo"
            className="w-44"
          />
          <p className="text-sm font-light text-[#101010] opacity-70">
            Securely login to your account
          </p>
        </div>

        <form className="bg-white w-full">
          <div className="w-full py-4">
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full py-4">
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                className="bg-gray-200 hover:bg-gray-300 
    border-3 border-amber-500 focus:outline-none rounded-lg
                cursor-pointer mr-1 text-orange-500  text-xs checked:bg-slate-50 w-6 h-6 outline-none indeterminate:bg-white default:ring-2 shadow drop-shadow-lg"
                type="checkBox"
                name="rememberme"
                id="rememberme"
                style={{ background: 'black', color: 'red', border: 'none' }}
              />
              <span className="text-xs font-light opacity-70 font-sans">
                Remember me
              </span>
            </div>
            <span className="text-xs font-light opacity-70 font-sans cursor-pointer">
              I forgot my password
            </span>
          </div>
          <button
            type="submit"
            className="shadow-lg drop-shadow-lg w-full bg-[#182CD1] hover:bg-[#6979F8] my-4 py-3 uppercase text-md rounded-md text-white font-light"
          >
            log in
          </button>
          <div className="flex w-full font-light justify-center items-center text-[#182CD1]">
            <p className="mt-4 text-xs self-center">
              {' '}
              Don't have an account?{' '}
              <span className="cursor-pointer text-xs font-light text-[#182CD1] underline">
                {' '}
                <Link to="/register"> Sign up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
