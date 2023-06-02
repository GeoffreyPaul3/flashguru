import Image from "next/image";
import React from "react";

const Portfoilio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1564924126725-8973bcdee2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            style={{ layout: "responsive" }}
            alt="/"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1526511328035-da47729e1084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80"
            alt="/"
            width="215"
            height="217"
            style={{ layout: "responsive", objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="/"
            width="215"
            height="217"
            style={{ layout: "responsive", objectFit: "cover" }}
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1445787563542-b95b50ed4f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
            alt="/"
            width="215"
            height="217"
            style={{ layout: "responsive", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfoilio;
