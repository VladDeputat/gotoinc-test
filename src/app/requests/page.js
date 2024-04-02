"use client";

import { useAppSelector } from "@/redux/hooks";
import { getAllRequestsSelector } from "@/redux/selectors";
import React, { useState } from "react";
import RequestsTable from "../components/RequestsTable";

const AllRequestsPage = () => {
  const sortOptions = ["created on", "dispatch date"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const allRequestsData = useAppSelector(getAllRequestsSelector);

  const getSortedData = () => {
    if (allRequestsData.length > 0) {
      return [...allRequestsData].sort((a, b) => {
        return activeSort === "dispatch date"
          ? a.dispatchDate - b.dispatchDate
          : a.createdAt - b.createdAt;
      });
    } else {
      return [];
    }
  };

  return (
    <main className="h-100 pt-5">
      <div className="container pt-5">
        <h1>All requests</h1>
        <RequestsTable
          data={getSortedData()}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </div>
    </main>
  );
};

export default AllRequestsPage;
