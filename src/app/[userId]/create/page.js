"use client";

import React, { useEffect } from "react";
import s from "./page.module.scss";
import { useParams } from "next/navigation";
import Link from "next/link";
import { setCurrentUser } from "@/redux/operations";
import { useAppDispatch } from "@/redux/hooks";

const CreatePage = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(userId));
  }, [userId]);

  return (
    <main className={s.main}>
      <div className="container pt-5">
        <div
          className="px-3 position-absolute top-50 translate-middle-y"
          style={{ maxWidth: "600px" }}
        >
          <h1>Welcome to our Shipping Services</h1>
          <p>
            We provide reliable shipping services for your parcels, packages,
            and goods. Whether you need to send an order or deliver a package,
            we've got you covered.
          </p>
          <div className="mt-4">
            <Link
              href={`/${userId}/create/order`}
              className="btn btn-primary me-3 btn-lg"
            >
              Order
            </Link>
            <Link
              href={`/${userId}/create/deliver`}
              className="btn btn-secondary btn-lg"
            >
              Deliver
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
