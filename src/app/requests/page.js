"use client";

import { getAllRequestsSelector } from "@/redux/selectors";
import React from "react";
import { useSelector } from "react-redux";
import RequestsTable from "../components/RequestsTable";

const AllRequestsPage = () => {
  const allRequestsData = useSelector(getAllRequestsSelector);

  return (
    <main className="h-100 pt-5">
      <div className="container pt-5">
        <RequestsTable data={allRequestsData} isAllRequestsTabble />
      </div>
    </main>
  );
};

export default AllRequestsPage;
