"use client";
import TitleSection from "@/components/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";

import Header from "@/components/header";
import ButtonGradient from "@/components/buttonGradient";
import Section from "@/components/section";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles, BottomLine } from "@/components/hero";
import {
  BoxSelectIcon,
  DoorOpenIcon,
  FileUpIcon,
  MessageSquareIcon,
  PaletteIcon,
  SettingsIcon,
  UserCogIcon,
  UserIcon,
} from "lucide-react";
import Buttonn from "@/components/button";
import { LeftCurve, RightCurve } from "@/components/ui/design";
import { Gradient } from "@/components/gradient";

const HomePage = () => {
  const parallaxRef = useRef(null);

  return (
    <main className="overflow-hidden">
      <Header />
      <ButtonGradient />
      <Section
        className="mt-1 "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <section
          ref={parallaxRef}
          className=" relative
        w-full
        pt-[10rem]
      px-4
      sm:px-6
      mt-[]
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
        >
          <TitleSection
            pill="✨ Votre Espace, Perfectionné"
            title="Plateforme pour Collaboration et Productivité"
          />
          <div
            className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
          >
            <Button
              variant="btn-secondary"
              className=" w-full
            rounded-[10px]
            p-4
            text-xl
            bg-background
            px-0
          "
            >
              Essayez Maintenant
            </Button>
          </div>
          <div
            className="
          sm:w-full
          
          flex
          justify-center
          items-center
         -mt-7
          relative
         
        "
          >
            <div
              className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-30
          top-22
        "
            />
            <BackgroundCircles parallaxRef={220} />
            {/* <div
            className="w-[30%]
            blur-[120px]
            rounded-full
            h-32
            absolute
            bg-brand-primaryPurple/50
            -z-10
            top-22
          "
          ></div> */}
          </div>
          <Image
            src={"/cap4.png"}
            alt="Application Banner"
            className="z-10 "
            width={900}
            height={400}
          />

          <ScrollParallax isAbsolutelyPositioned zIndex={40}>
            <div
              className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]  absolute right-[1rem] bottom-[16rem] w-[16rem] xl:flex text-base`}
            >
              <img
                className="w-5 h-5 mr-4"
                src={"/loading.png"}
                alt="Loading"
              />
              Generating...
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned zIndex={40}>
            <ul className="hidden absolute left-[4.5rem] bottom-[9.5rem] px-1 py- bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex z-50">
              <li className="p-5 z-50">
                <img
                  src={"/home-smile.svg"}
                  width={24}
                  height={25}
                  alt={"icon"}
                />
              </li>
              <li className="p-5">
                <img src={"/file-02.svg"} width={24} height={25} alt={"icon"} />
              </li>
              <li className="p-5">
                <img
                  src={"/search-md.svg"}
                  width={24}
                  height={25}
                  alt={"icon"}
                />
              </li>
              <li className="p-5">
                <img
                  src={"/plus-square.svg"}
                  width={24}
                  height={25}
                  alt={"icon"}
                />
              </li>
            </ul>
          </ScrollParallax>
        </section>

        <BottomLine />
      </Section>




      <Section id="hero" className="  flex justify-center py-0 -mt-4">
        <article
          className="rounded-full
   
          p-[1px]
          text-[16px]
          dark:bg-gradient-to-r
          dark:from-brand-primaryBlue
          dark:to-brand-primaryPurple
        "
        >
          <div
            className="rounded-full 
            px-5
            py-1.5
            w-36
            dark:bg-black"
          >
            {"✨Features"}
          </div>
        </article>
      </Section>

      <Section
        className="pt-12 px-0 w-full relative "
        crosses
        crossesOffset="lg:translate-y-[0.25rem]"
        customPaddings
        id="hero"
      >
        <section
          className="
       px-4
       
        flex
        justify-center
     gap-x-2
        max-w-full 
        
        overflow-hidden
      "
        >
          <div className=" lg:ml-14  ">
            <Image
              alt="workflow"
              src={"/Frame 57.png"}
              width={70}
              height={200}
              className="-mt-1.5"
            />
            <Image
              alt="workflow"
              src={"/Design_sans_titre__1_-removebg-preview (1).png"}
              width={73}
              className="-mt-4 ml-1.5"
              height={200}
            />
            <Image
              alt="workflow"
              src={
                "/Capture_d_écran_2024-08-09_135824-removebg-preview (4).png"
              }
              width={53}
              className="-mt-5 ml-7"
              height={100}
            />
          </div>
          <div className=" relative flex flex-col justify-start  lg:w-[1150px]">
            <div
              className="w-[40%]
          blur-[150px]
          rounded-full
          h-28
          absolute
          bg-[#396ED1]/60
          -z-10
          top-[470px]
          left-[200px]
        "
            />

            <div className="bg-custom-gradient p-[1px] w-fit  h-fit  rounded-[0.5rem] flex items-center justify-center mt-1 ml-3">
              <div className="flex text-[#767BF8]/80 bg-[#01265c] rounded-[0.5rem] py-[.38rem] px-[.75rem]  items-center w-fit gap-x-2 z-30">
                <BoxSelectIcon className="size-5" />
                <p className="text-[13px]  font-semibold">Pour les Etudiants</p>
              </div>
            </div>
            <h1
              className=" text-left 
            text-3xl
            sm:text-5xl
           w-full
           mt-7
           ml-3
           text-neutral-200
            font-semibold
          "
            >
              Simplifiez votre parcours de graduation.
            </h1>
            <p
              className="  w-[90%] text-[1.5rem] mt-6 ml-3 text-slate-400
            
            "
            >
              Trouvez le thème idéal, restez informé en temps réel, et suivez
              chaque étape de votre progression directement en ligne.
            </p>
            <p
              className=" w-full text-[1rem] mt-[88px] mb-10 text-[#2061da] max-w-[400px]  ml-3 font-bold
            pl-2
            "
            >
              Glissez simplement les thèmes de votre choix dans l&apos;espace
              dédié, et validez-les en seulement quelques clics.
            </p>
            <div className="w-full flex flex-col">
              <Image
                src={"/Frame 54 (19).png"}
                alt="Banner"
                className="scale-[1.2]  pl-20 mt-3"
                width={1300}
                height={1000}
              />
              <div className="flex justify-around gap-20 -ml-1 -mt-20 z-40 pr-10 w-full">
                <div className="flex flex-col gap-y-3">
                  <span className="flex gap-x-2 items-center">
                    <FileUpIcon className="size-6 text-[#2061da]" />
                    <p className="text-[1rem] text-neutral-50 font-semibold">
                      Exportation PDF
                    </p>
                  </span>
                  <p className="text-[0.800rem] text-white opacity-80 font-[400] pl-2 ">
                    Téléchargez votre planning au format PDF et accédez-y hors
                    ligne à tout moment. Votre planning, toujours à portée de
                    main.
                  </p>
                </div>
                <div className="flex flex-col gap-y-3">
                  <span className="flex gap-x-2 items-center">
                    <MessageSquareIcon className="size-6 text-[#2061da]" />
                    <p className="text-[1rem] text-neutral-50 font-semibold ">
                      Collaboration en Temps Réel
                    </p>
                  </span>
                  <p className="text-[0.800rem] text-white opacity-80 font-[400] pl-2">
                    Les membres du binôme peuvent collaborer et choisir leurs
                    thèmes en temps réel, avec partage d&apos;écran intégré.
                  </p>
                </div>

                <div className="flex flex-col gap-y-3">
                  <span className="flex gap-x-2 items-center">
                    <PaletteIcon className="size-6 text-[#2061da]" />
                    <p className="text-[1rem] text-neutral-50 font-semibold">
                      Vue Globale des Thèmes
                    </p>
                  </span>
                  <p className="text-[0.875rem] text-white opacity-80 font-[400] pl-2">
                    Consultez l&apos;ensemble des thèmes proposés avec toutes
                    les informations détaillées, y compris les encadrants.
                  </p>
                </div>
              </div>
            </div>
            <ScrollParallax isAbsolutelyPositioned zIndex={40}>
              <ul className="hidden absolute -left-28 bottom-96 px-1  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex  z-50">
                <li className="px-4 py-5 z-50 flex items-center  ">
                  <img
                    className="w-5 h-5 mr-4"
                    src={"/check (2).svg"}
                    alt="Loading"
                  />
                  Validez vos choix...
                </li>
              </ul>
            </ScrollParallax>
            <div
              className="w-[40%]
          blur-[200px]
          rounded-full
          h-24
          absolute
           bg-[#396ED1]/60
          -z-10
          top-[700px]
          left-[500px]
        "
            />
          </div>
        </section>
      </Section>
      <Section
        className="pt-32 px-0 w-full relative "
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id={"#enseignants"}
      >
        <section
          className="
       px-4
       lg:px-8
        flex
        justify-center
     gap-x-2
        w-full 
        relative
      "
        >
          <div className=" lg:ml-16">
            <Image alt="workflow" src={"/ens.webp"} width={80} height={200} />
          </div>
          <div className="w-full relative flex flex-col justify-start px-2 lg:mr-10">
            <div
              className="w-[60%]
          blur-[150px]
          rounded-full
          h-28
          absolute
          bg-[#fb4b87]/60
          -z-10
          top-[400px]
          left-[340px]
        "
            />
            <div className="bg-custom-gradient2 p-[1px] w-fit  h-fit  rounded-[0.5rem] flex items-center justify-center mt-1 ml-3">
              <div className="flex text-[#fb4b87] bg-[#4a2230] rounded-[0.5rem] py-[.38rem] px-[.75rem]  items-center w-fit gap-x-2 z-30">
                <BoxSelectIcon className="size-5" />
                <p className="text-[13px]  font-semibold">
                  Pour les Enseignants
                </p>
              </div>
            </div>
            <h1
              className=" text-left 
            text-3xl
            sm:text-5xl
           w-full
           mt-5
           text-neutral-200
            font-semibold
          "
            >
              Conçu pour permettre aux enseignants d&apos;organiser leur espace.
            </h1>
            <p
              className="  w-full text-[1.5rem] mt-5  text-slate-400
            
            "
            >
              Simplifiez vos démarches administratives et facilitez la
              communication. Centralisez toutes les informations de soutenance
              pour une gestion efficace.
            </p>

            <div
              className="
            relative
         w-full
        "
            >
              <Image
                src={"/main-ens.png"}
                alt="Banner"
                width={1300}
                height={1000}
              />
              <div
                className="w-[40%]
          blur-[200px]
          rounded-full
          h-24
          absolute
          bg-[#fb4b87]/60
          -z-10
          top-[700px]
          left-[500px]
        "
              />
              <p
                className=" w-full text-[1rem] mt-3 text-[#fb4b87] max-w-[400px] mb-7 font-bold
            
            "
              >
                Plus besoin de se perdre dans les plannings. Accédez facilement
                à votre planning personnalisé pour suivre vos interventions.
              </p>
              <Image
                src={"/Frame -43.png"}
                alt="Banner"
                width={850}
                height={500}
              />
              <div
                className="bottom-0
            top-[95%]
        
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
              ></div>
            </div>
          </div>
        </section>
      </Section>

      <Section
        crosses
        className=" py-32 pt-36 px-14 pr-[40px] w-full relative "
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <BottomLine classname="top-[5.25rem]" />
        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <h2 className="text-[1.75rem] text-white leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8 font-medium">
              Génération Automatique des Plannings
            </h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14 ">
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <img
                    src={"/check (2).svg"}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className="body-2 ml-5 text-white">
                    Personnalisation Flexible
                  </h6>
                </div>

                <p className="font-light text-[0.875rem] leading-6 md:text-base mt-3 text-n-3">
                  Configurez vos plannings selon les besoins spécifiques de
                  votre département.
                </p>
              </li>
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <img
                    src={"/check (2).svg"}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className=" body-2 ml-5 text-white">
                    Versions Multiples
                  </h6>
                </div>
              </li>
              <li className="mb-3 py-3">
                <div className="flex items-center">
                  <img
                    src={"/check (2).svg"}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className="body-2 ml-5 text-white ">
                    Ajustements Faciles
                  </h6>
                </div>
              </li>
            </ul>

            <Buttonn href={"/login"} className={""}>
              Essayez maintenant
            </Buttonn>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-1">
            <p className="body-2 mb-8 text-n-3 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
              Réagissez et Ajustez les plannings en temps réel selon les
              changements ou imprévus, pour une gestion fluide et efficace.
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[4rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    {/* <Image
                      src={"/logo-part.png"}
                      width={25}
                      height={25}
                      className="-ml-1"
                      alt="brainwave"
                    /> */}
                  </div>
                </div>
              </div>
              {/* className="absolute inset-0 animate-spin-slow" */}
              <ul>
                <li
                  className={`absolute top-0 left-[140px] h-fit flex justify-center items-center ml-[.6rem] origin-bottom group transition-all`}
                  style={{ transform: `rotate(${6 * 60}deg)` }}
                >
                  <div
                    className={`relative flex justify-center items-center  rounded-xl border border-n-6 `}
                    style={{
                      transform: `rotate(-${6 * 60}deg)`,
                    }}
                  >
                    <UserIcon size={50} className="px-2" color="#79FFF7" />
                  </div>
                  <Image
                    className="m-auto   -mt-12 opacity-0 group-hover:opacity-100 transition-opacity "
                    width={130}
                    height={150}
                    alt={"k"}
                    src={"/ensIcon4.png"}
                  />
                </li>
                <li
                  className={`absolute top-5 left-[160px] h-fit ml-[3.59rem] origin-bottom group transition-all`}
                  style={{ transform: `rotate(${4 * 45}deg)` }}
                >
                  <div
                    className={`relative flex justify-center items-center w-fit rounded-xl border border-n-6 `}
                    style={{
                      transform: `rotate(-${4 * 45}deg)`,
                    }}
                  >
                    <UserCogIcon size={50} className="px-2" color="#FF98E2" />
                  </div>
                  <Image
                    className="relative -mt-8 top-5 -left-32 opacity-0 group-hover:opacity-100 -rotate-[182deg] transition-opacity "
                    width={130}
                    height={150}
                    alt={"k"}
                    src={"/Frame 61 (4).png"}
                  />
                </li>
                <li
                  className={`absolute  left-[150px] h-1/2 group origin-bottom`}
                  style={{ transform: `rotate(${3 * 56}deg)` }}
                >
                  <Image
                    className="m-auto relative -left-[135px] -mt-8 top-20  opacity-0 group-hover:opacity-100 transition-opacity rotate-[189deg] "
                    width={130}
                    height={150}
                    alt={"k"}
                    src={"/localIcon3.png"}
                  />
                  <div
                    className={`relative   w-fit rounded-xl border border-n-6 `}
                    style={{
                      transform: `rotate(-${3 * 56}deg)`,
                    }}
                  >
                    <DoorOpenIcon size={50} className="px-2" color="#FFC876" />
                  </div>
                </li>
                <li
                  className={`absolute -top-2 left-[120px] h-1/2 -ml-[2.6rem] origin-bottom group`}
                  style={{ transform: `rotate(${4 * 55}deg)` }}
                >
                  <div
                    className={` flex   w-fit rounded-xl border border-n-6`}
                    style={{
                      transform: `rotate(-${4 * 55}deg)`,
                      margin: "10px",
                    }}
                  >
                    <PaletteIcon size={50} className="px-2 text-blue-400" />
                  </div>
                  <Image
                    className="m-auto relative -mt-24 left-16 opacity-0 group-hover:opacity-100 transition-opacity rotate-[135deg] "
                    width={130}
                    height={150}
                    alt={"k"}
                    src={"/themesIcon3.png"}
                  />
                </li>
                <li
                  className={`absolute top-0 left-[120px] h-1/2 -ml-[3rem] origin-bottom group`}
                  style={{ transform: `rotate(${6 * 50}deg)` }}
                >
                  <Image
                    className="m-auto   -mt-8 mr-4 relative -left-12 -top-8   opacity-0 group-hover:opacity-100 transition-opacity rotate-[60deg] "
                    width={130}
                    height={150}
                    alt={"k"}
                    src={"/configIcon3.png"}
                  />
                  <div
                    className={`relative    w-fit rounded-xl border border-n-6`}
                    style={{
                      transform: `rotate(-${6 * 50}deg)`,
                      margin: "10px",
                    }}
                  >
                    <SettingsIcon size={50} className="px-2" color="#9F53FF" />
                  </div>
                </li>
                <Gradient />
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>

      <Section className="!px-0 !py-2 relative" id={"#footer"}>
        <BottomLine classname="top-[3.65rem]" />
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col py">
          <Image
            src={"/1000139820-re.png"}
            width={160}
            height={100}
            alt="logo"
            className="mt-14"
          />
          <p className="caption text-n-4 lg:block  mt-16 pr-8">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default HomePage;
