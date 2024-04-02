import RequestForm from "@/app/components/CreateRequestForm";
import Image from "next/image";
import React from "react";

const OrderPage = () => {
  return (
    <main className="h-100 w-75 py-5 d-flex justify-content-evenly align-items-center">
      <div>
        <Image
          src="/assets/parcels.png"
          alt="parcels"
          width={500}
          height={500}
        />
      </div>
      <div>
        <RequestForm isOrderForm={true} />
      </div>
    </main>
  );
};

export default OrderPage;
