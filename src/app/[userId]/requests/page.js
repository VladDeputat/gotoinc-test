"use client";
import Modal from "@/app/components/Modal";
import RequestsTable from "@/app/components/RequestsTable";
import { getAllRequestsSelector } from "@/redux/selectors";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import EditRequestForm from "@/app/components/EditRequestForm";
import { updateRequest } from "@/redux/operations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const UserRequestsPage = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRequestToEdit, setActiveRequestToEdit] = useState(null);
  const [activeRequestData, setActiveRequestData] = useState(null);
  const [requestsToSuggest, setRequestsToSuggest] = useState([]);

  const allRequestsData = useAppSelector(getAllRequestsSelector);
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
    dispatch(updateRequest(dataAfterEdit));
    setIsModalOpen(false);
  };

  return (
    <main className="h-100 pt-5">
      <div className="container pt-5">
        <h1>My requests</h1>
        <RequestsTable
          data={usersRequests}
          setActiveRequestData={setActiveRequestData}
          activeRequestData={activeRequestData}
          setActiveRequestToEdit={setActiveRequestToEdit}
          setIsModalOpen={setIsModalOpen}
          isUserRequestsTable
        />
        {!requestsToSuggest.length > 0 && !activeRequestData && (
          <p>Click on list to see suggested requests</p>
        )}
        {!requestsToSuggest.length > 0 && activeRequestData && (
          <p>No suggested requests yet</p>
        )}
        {requestsToSuggest.length > 0 && activeRequestData && (
          <RequestsTable data={requestsToSuggest} />
        )}

        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            <EditRequestForm
              isOrderForm={true}
              handleSubmit={handleSaveEdit}
              activeRequestToEdit={activeRequestToEdit}
            />
          </Modal>
        )}
      </div>
    </main>
  );
};

export default UserRequestsPage;
