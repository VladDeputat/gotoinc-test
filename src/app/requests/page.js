"use client";

import { getAllRequestsSelector } from "@/redux/selectors";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import RequestsTable from "../components/RequestsTable";

const AllRequestsPage = () => {
  const sortOptions = ["created on", "dispatch date"];
  const [activeSort, setActiveSort] = useState(sortOptions[0]);
  const allRequestsData = useSelector(getAllRequestsSelector);

  // const getSortedData = () => {
  //   if (activeSort === "dispatchDate") {
  //     return allRequestsData.sort(a, (b) => a[activeSort] - b[activeSort]);
  //   } else {
  //     return allRequestsData;
  //   }
  // };
  console.log(activeSort);

  const sortedData = allRequestsData?.sort((a, b) => {
    return activeSort === "dispatch date"
      ? a.dispatchDate - b.dispatchDate
      : a.createdAt - b.createdAt;
  });

  return (
    <main className="h-100 pt-5">
      <div className="container pt-5">
        <h1>All requests</h1>
        <RequestsTable
          data={sortedData}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          // setActiveRequestData={null}
          // setIsModalOpen={null}
          // isUserRequestsTable={false}
        />
      </div>
    </main>
  );
};

export default AllRequestsPage;
