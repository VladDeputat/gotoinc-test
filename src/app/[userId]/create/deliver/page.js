import RequestForm from "@/app/components/RequestForm";
import Image from "next/image";
import React from "react";

const DeliverPage = () => {
  return (
    <main className="h-100 w-75 py-5 d-flex justify-content-evenly align-items-center">
      <div>
        <Image
          src="/assets/delivery.png"
          alt="parcels"
          width={500}
          height={500}
        />
      </div>
      <div>
        <RequestForm isOrderForm={false} />
      </div>
    </main>
  );
};

export default DeliverPage;
