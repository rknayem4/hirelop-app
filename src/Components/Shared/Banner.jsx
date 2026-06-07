import { Magnifier, MapPin } from "@gravity-ui/icons";
import React from "react";

const Banner = () => {
  return (
    <section
      className=" w-full relative text-white px-3"
      style={{
        backgroundImage: "url('/images/globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center flex-col justify-center max-w-150 gap-2 mx-auto py-25 mb-25">
        {/* Badge */}
        <div
          className="relative flex items-center gap-3 px-8 py-3 rounded-full
           bg-linear-to-b from-zinc-900 
           border border-zinc-700/60
           shadow-[0_0_20px_rgba(255,255,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.15)]"
        >
          {/* <!-- Left Icon --> */}
          <div
            className="flex items-center justify-center rounded-md
             bg-linear-to-b from-amber-500 to-amber-700"
          >
            💼
          </div>

          {/* <!-- Text --> */}
          <span className="text-white font-bold text-xl tracking-wide">
            50,000+
          </span>

          <span className="text-zinc-100 uppercase tracking-[0.25em] ">
            New Jobs This Month
          </span>
        </div>

        <h2 className="text-center font-bold text-2xl md:text-4xl mt-10">
          Find Your Dream Job Today
        </h2>
        <p className="text-gray-400 text-center mt-4">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>
        {/* search bar */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/60  backdrop-blur-xl md:flex-row">
          {" "}
          <div className="flex flex-1 items-center gap-3 rounded-xl px-4 pt-2 md:pt-0">
            {" "}
            <span className="text-zinc-400">
              <Magnifier></Magnifier>
            </span>{" "}
            <input
              type="text"
              placeholder="Job title, keyword or company"
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />{" "}
          </div>{" "}
          <div className=" w-px bg-white/10 md:block" /> <hr />
          <div className="flex flex-1 items-center gap-3 rounded-xl px-4 ">
            {" "}
            <span className="text-zinc-400">
              <MapPin></MapPin>
            </span>{" "}
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />{" "}
          </div>{" "}
          <hr />
          <button className="rounded-xl m-2 px-4 bg-blue-600 p-2 font-semibold transition hover:bg-blue-500">
            <Magnifier></Magnifier>
          </button>{" "}
        </div>
      </div>

      <div className="mt-">
        <p className="md:text-3xl text-xl font-semibold text-center max-w-150 mx-auto my-3">
          Assisting over <span className="text-blue-400">15,000</span> job
          seekers find their dream positions.
        </p>
        {/* Stats */}
        <div className="grid w-full mx-auto max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {" "}
          {[
            { number: "50K", label: "Active Jobs", icon: "💼" },
            { number: "12K", label: "Companies", icon: "🏢" },
            { number: "2M", label: "Job Seekers", icon: "👥" },
            { number: "97%", label: "Satisfaction Rate", icon: "⭐" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition hover:border-blue-500/40"
            >
              {" "}
              <div className="mb-3 text-4xl">{item.icon}</div>{" "}
              <h3 className="text-3xl font-bold">{item.number}</h3>{" "}
              <p className="mt-2 text-sm text-zinc-400">{item.label}</p>{" "}
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default Banner;
