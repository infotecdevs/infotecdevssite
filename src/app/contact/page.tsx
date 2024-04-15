"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Footer from '@/components/Footer/Index';

type DataForm = {
  name: string;
  email: string;
  message: string;
};

const page = () => {
  const [sent, setSent] = useState<Boolean>(false);
  const schema = z.object({
    name: z.string().min(8, "O nome precisa ter pelo menos 8 caracteres!"),
    email: z.string().email("Digite um Email válido!"),
    message: z
      .string()
      .min(10, "A mensagem precisa ter pelo menos 10 caracteres!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DataForm>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const sendEmail: SubmitHandler<DataForm> = async (data) => {
    const { name, email, message } = data;

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data === "success") {
        console.log("Email enviado com sucesso!");
        setSent(true);
      } else {
        console.error("Erro ao enviar o email!");
        alert("Erro ao enviar email!");
      }
    } catch (e) {
      console.log(e);
      alert("Erro ao enviar email!");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {sent ? (
          <section className="flex flex-col text-center w-full mb-12">
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
              <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3 flex items-center gap-5">
                    <div className="text-sm text-green-600">
                      <p>Email enviado com sucesso!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="flex mx-auto text-white font-medium bg-green-400 border-0 py-1
               px-3 focus:outline-none hover:bg-green-300 rounded text-sm"
            >
              voltar
            </Link>
          </section>
        ) : (
          <>
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contate-nos
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Responderemos o mais rápido possivel
              </p>
            </div>
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="lg:w-1/2 md:w-2/3 mx-auto"
            >
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      {...register("name")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
                   focus:border-violet-950 focus:bg-white focus:ring-2 focus:ring-violet-950
                    text-base outline-none text-violet-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors?.name && (
                      <p style={{ color: "red" }}>{errors.name.message}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      {...register("email")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
                   focus:border-violet-950 focus:bg-white focus:ring-2 focus:ring-violet-950
                    text-base outline-none text-violet-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      {...register("message")}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
                   focus:border-violet-950 focus:bg-white focus:ring-2 focus:ring-violet-950
                    h-32 text-base outline-none text-violet-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                    {errors?.message && (
                      <p style={{ color: "red" }}>{errors.message?.message}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    className="flex mx-auto text-white bg-violet-950 border-0 py-1
               px-4 focus:outline-none hover:bg-violet-800 rounded text-lg"
                  >
                    {isSubmitting ? "..." : "Enviar"}
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-violet-950">infotecdevs@gmail.com</a>
                </div>
              </div>
            </form>

          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default page;


