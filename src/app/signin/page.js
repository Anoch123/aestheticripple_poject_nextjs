"use client";
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();

  return (
    <section className='flex flex-col md:flex-row h-screen items-center'>
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/5 h-screen">
        <div className="p-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            AestheticRipple
          </h1>
        </div>
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign In to AestheticRipple
            </h1>
            <div className="mt-10">
              <button title="Sign up with Google" containerStyles="w-full text-white font-medium rounded-lg text-sm px-5 py-3 text-center bg-customButtonColorDark" >Google</button>
            </div>
            <div className="my-4 flex items-center mt-8 before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold ">
                Or
              </p>
            </div>
            {/* form */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
                Not a member of AestheticRipple yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up here</a>
            </p>
          </div>
      </div>
    </section>
  )
}

export default Signin