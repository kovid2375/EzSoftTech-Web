"use client";

import { useState } from "react";
import Button from "../button";
import GlobeDemo from "@/components/globe-demo";
import { toast } from "sonner";

export function Section1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();

    data.append("entry.2005620554", formData.name);
    data.append("entry.1045781291", formData.email);
    data.append("entry.1065046570", formData.phone);
    data.append("entry.839337160", formData.message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd5MQEUu0iSP_cvz7xMFEy9j8Eel2HIWDrWwovfu5w7lTHlHg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: data,
        }
      );

      toast.success("Form submitted successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section className="px-6 md:px-20 py-10 mt-20 md:mt-28 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="w-full max-w-xl mx-auto text-left">
          <div className="flex flex-row gap-2 items-center mb-4">
            <span className="h-2 w-2 bg-[#3C83F6] rounded-full"></span>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-500">
              Contact
            </h3>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Let’s start a project
            </h1>

            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              Ready to start your next project? Get in touch with the leading
              software development company in Bilaspur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="text-base font-semibold text-neutral-800">
                Full Name
              </p>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2"
              />
            </div>

            <div>
              <p className="text-base font-semibold text-neutral-800">
                Email Address
              </p>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2"
              />
            </div>

            <div>
              <p className="text-base font-semibold text-neutral-800">
                Phone Number
              </p>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2"
              />
            </div>

            <div>
              <p className="text-base font-semibold text-neutral-800">
                Message
              </p>

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2 resize-none"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              SUBMIT
            </Button>
          </form>
        </div>

        <div className="w-full lg:-mt-10 flex justify-center items-center overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
}