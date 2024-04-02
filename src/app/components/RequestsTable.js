import { useAppDispatch } from "@/redux/hooks";
import { deleteRequest } from "@/redux/operations";
import Image from "next/image";
import React, { useState } from "react";

const RequestsTable = ({
  data,
  activeSort,
  setActiveSort,
  activeRequestData,
  setActiveRequestData,
  setIsModalOpen,
  isUserRequestsTable,
  setActiveRequestToEdit,
}) => {
  const dispatch = useAppDispatch();
  const tabs = ["orders", "deliveries"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getActiveTabData = () => {
    if (activeTab === "orders") {
      return data.filter(({ requestType }) => requestType === "order");
    } else if (activeTab === "deliveries") {
      return data.filter(({ requestType }) => requestType === "deliver");
    } else {
      return [];
    }
  };

  const columns =
    activeTab === "orders"
      ? [
          "user id",
          "from city ",
          "to city",
          "parsel type",
          "created on",
          "dispatch date",
          "description",
          " ",
        ]
      : [
          "user id",
          "from city ",
          "to city",
          "created on",
          "dispatch date",
          " ",
        ];

  const handleDelete = (e) => {
    const isDeleteApproved = window.confirm(
      "Are you sure you want to delete this request?",
    );
    if (isDeleteApproved) {
      dispatch(deleteRequest(e.target.id));
    }
  };

  const handleEdit = (e, req) => {
    e.stopPropagation();
    setActiveRequestToEdit(req);
    setIsModalOpen(true);
  };

  const formatDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;

    return formattedDate;
  };

  return (
    <div className="table-responsive">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item text-capitalize cursor-pointer" key={tab}>
            <a
              className={activeTab === tab ? "nav-link  active" : "nav-link"}
              aria-current="page"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <table className="table table-striped table-hover align-middle border-info table-sm fs-6">
        <thead className="text-capitalize">
          <tr className="align-middle">
            {columns.map((column) => (
              <th
                className={
                  activeSort === column
                    ? "table-active cursor-pointer"
                    : "cursor-pointer"
                }
                scope="col"
                key={column}
                onClick={
                  column === "created on" || column === "dispatch date"
                    ? () => setActiveSort(column)
                    : () => {}
                }
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        {getActiveTabData().length > 0 ? (
          <tbody>
            {getActiveTabData().map((req) => (
              <tr
                key={req.requestId}
                className={
                  activeRequestData?.requestId === req.requestId
                    ? "table-active"
                    : ""
                }
                onClick={
                  isUserRequestsTable
                    ? () => setActiveRequestData(req)
                    : () => {}
                }
              >
                <td>{req.userId}</td>
                <td>{req.fromCity}</td>
                <td>{req.toCity}</td>
                {activeTab === "orders" && <td>{req.parcelType}</td>}
                <td>{formatDate(req.createdAt)}</td>
                <td>{formatDate(req.dispatchDate)}</td>
                {activeTab === "orders" && <td>{req.parcelDescription}</td>}
                <td>
                  {isUserRequestsTable && (
                    <div className="d-flex gap-1" style={{ width: "120px" }}>
                      <button
                        type="button"
                        className="btn btn-info"
                        id={req.requestId}
                        onClick={(e) => handleEdit(e, req)}
                      >
                        <Image
                          src="/assets/pencil.svg"
                          alt="edit"
                          width={100}
                          height={100}
                          id={req.requestId}
                        />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id={req.requestId}
                        onClick={handleDelete}
                      >
                        <Image
                          src="/assets/trash.svg"
                          alt="edit"
                          width={100}
                          height={100}
                          id={req.requestId}
                        />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <th colSpan={columns.length} className="mt-5 w-100 text-center">
                No requests created!
              </th>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default RequestsTable;
