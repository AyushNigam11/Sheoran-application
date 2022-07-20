import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FcPrivacy } from "react-icons/fc";
import { useRouter } from 'next/router'
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Home: NextPage = () => {
  const router = useRouter()
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-green-200">
      <Head>
        <title>Sheoran webpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-2xl">
          <div className=" p-5">
            <div className="text-left font-bold">
              <span className="text-blue-500">Sheoran</span>Hi-Tech
            </div>
            <div className="py-2 px-20 mt-10">
              <h2 className="text-3xl font-bold text-blue-500 mb-2">Enter Details</h2>
              <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
              
              <p className="text-gray-400 my-3">To Sign Up </p>
              <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-50 p-2 flex items-center mb-3 rounded-2xl">
                  <FaEnvelope className="text-gray-400 mr-2 "></FaEnvelope>
                  <input type="email" name="Email" placeholder="Email" className="bg-gray-100"></input>
                </div>
                <div className="bg-gray-100 w-50 p-2 flex items-center mb-3 rounded-2xl">
                  <FcPrivacy className="text-gray-400 mr-2 "></FcPrivacy>
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100"></input>
                </div>
                <div className="bg-gray-100 w-50 p-2 flex items-center mb-3 rounded-2xl">
                  <FcPrivacy className="text-gray-400 mr-2 "></FcPrivacy>
                  <input type="password" name="password" placeholder="Confirm Password" className="bg-gray-100"></input>
                </div>
                <div className="bg-gray-100 w-50 p-2 flex items-center mb-3 rounded-2xl">
                  <FaPhone className="text-gray-400 mr-2 "></FaPhone>
                  <input type="number" name="password" placeholder="Contact Number" className="bg-gray-100"></input>
                </div>
                <button onClick={() => router.push('/table')} className="border-2 text-blue-500 border-blue-500 rounded-full px-12 py-2 inline-block font-bold hover:bg-blue-500 hover:text-white my-3">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">To know more about Sheoran HI-Tech click</p>
            <a href="https://www.zaubacorp.com/company/SHEORAN-HITECH-SOLUTIONS-PRIVATE-LIMITED/U72900DL2020PTC373033" className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold hover:bg-white hover:text-blue-500">Know more</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;