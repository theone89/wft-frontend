"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGlobalContext } from "@/helpers/Global";

export const HeroSection = () => {
  const { language } = useGlobalContext()
  return (
    <section className="lg:py-16 ml-4 mb-4 ">
      <div className="pt-4">

        <h1 className="dark:text-white text-center  text-black mb-4  lg:leading-normal font-extrabold">
          <span className="text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-800 dark:from-primary-400 dark:to-secondary-600">
            {language == 'es' ? "Hola, Bienvenidos a" : 'Hello, Welcome to'}{" "}
          </span><br></br>
          <span className="bg-gradient-to-r text-center justify-center text-3xl md:text-4xl lg:text-6xl  from-blue-800 to-cyan-500 bg-clip-text text-transparent animate-gradient">WONDERFULLTIME</span>
          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg mb-6 lg:text-xl">
            {language == 'es' ? `“Viaja con nosotros, crea recuerdos para siempre.”` : `“Travel with us, create memories forever.”`}
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12 text-center mx-auto container mt-6 md:mt-0">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="dark:text-slate-200 text-slate-800 ">
            <TypeAnimation
              sequence={
                [
                  `"Cuba is a melody that `,
                  3000,
                  ` resonates and is felt in every corner`,
                  3000,
                  ` of the island."`,
                  1500,
                  ` Join us to discover it.`,
                  3000,
                  `"Cuba es una melodía que `,
                  3000,
                  `resuena y se siente en cada rincón`,
                  3000,
                  ` de la isla."`,
                  1500,
                  `Únase a nosotros para descubrirlo.`,
                ]}
              className="text-2xl sm:text-3xl lg:text-5xl"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div>
            <div className="">
              <Image
                src="/assets/wft/logo X en png.png"
                alt="hero image"
                className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative"
                width={300}
                height={300}
              />
            </div>
            <Link
              href="/about"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 mr-4"
            >
              <span className="block bg-white text-black hover:dark:text-gray-800 font-bold hover:bg-slate-300 rounded-full px-5 py-2">
                {language == 'es' ? 'Nosotros' : ' About us'}
              </span>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-black text-grey-300 font-bold hover:bg-gray-800 hover:text-white rounded-full px-5 py-2">
                {language == 'es' ? 'Revistas' : 'Magazine'}
              </span>
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;