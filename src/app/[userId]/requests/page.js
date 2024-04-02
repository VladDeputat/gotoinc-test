"use client";
import Modal from "@/app/components/Modal";
import RequestForm from "@/app/components/CreateRequestForm";
import RequestsTable from "@/app/components/RequestsTable";
import { getAllRequestsSelector } from "@/redux/selectors";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasicForm from "@/app/components/BasicForm";

const UserRequestsPage = () => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [activeRequestIdToEdit, setActiveRequestIdToEdit] = useState("");
  const [activeRequestData, setActiveRequestData] = useState(null);
  const [requestsToSuggest, setRequestsToSuggest] = useState([]);

  const allRequestsData = useSelector(getAllRequestsSelector);
  const usersRequests = allRequestsData.filter((req) => req.userId === userId);

  useEffect(() => {
    if (activeRequestData !== null) {
      const filteredData = allRequestsData.filter(
        (req) =>
          req.requestType === "deliver" &&
          req.dispatchDate > activeRequestData.dispatchDate &&
          req.toCity === activeRequestData.toCity &&
          req.fromCity === activeRequestData.fromCity,
      );
      setRequestsToSuggest(filteredData);
    }
    return () => {
      setRequestsToSuggest([]);
    };
  }, [activeRequestData]);

  const handleSaveEdit = (dataAfterEdit) => {
    console.log(dataAfterEdit);
  };

  return (
    <main className="h-100 pt-5">
      <div className="container pt-5">
        <h1>My requests</h1>
        <RequestsTable
          data={usersRequests}
          setActiveRequestData={setActiveRequestData}
          setIsModalOpen={setIsModalOpen}
          isUserRequestsTable
        />
        {!requestsToSuggest.length > 0 ? (
          <p>Click on list</p>
        ) : (
          <RequestsTable
            data={requestsToSuggest}
            // setActiveRequestData={setActiveRequestData}
            // setIsModalOpen={setIsModalOpen}
            // isUserRequestsTable={false}
          />
        )}
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <BasicForm
              isOrderForm={true}
              handleSubmit={handleSaveEdit}
              initialStateWithData={initialStateForEdit}
            />
          </Modal>
        )}
      </div>
    </main>
  );
};

export default UserRequestsPage;
