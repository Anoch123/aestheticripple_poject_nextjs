import React from 'react'

const SignUp = () => {
  return (
    <section className='flex flex-col md:flex-row h-screen items-center'>
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/5 h-screen">
        <div className="p-5">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            AestheticRipple
          </h1>
          <p className='text-4xl font-bold leading-tight tracking-tight text-white md:text-xl mt-5'>Be a part of AestheticRipple family and show</p>
          <p className='text-4xl font-bold leading-tight tracking-tight text-white md:text-xl'> case your skills to the world.</p>
        </div>
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign Up to AestheticRipple
            </h1>
            
          </div>
      </div>
    </section>
  )
}

export default SignUp