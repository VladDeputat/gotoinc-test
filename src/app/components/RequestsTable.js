import { deleteRequest } from "@/redux/operations";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const RequestsTable = ({ data, isAllRequestsTabble }) => {
  const dispatch = useDispatch();
  const tabs = ["orders", "deliveries"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getActiveTabData = () => {
    if (activeTab === tabs[0]) {
      return data.filter(({ requestType }) => requestType === "order");
    }
    if (activeTab === tabs[1]) {
      return data.filter(({ requestType }) => requestType === "deliver");
    }
  };

  const columns = [
    "user id",
    // "request type",
    "from city ",
    "to city",
    "parsel type",
    "created on",
    "dispatch date",
    "description",
    " ",
  ];

  const handleDelete = (e) => {
    dispatch(deleteRequest(e.target.id));
  };

  const handleEdit = (e) => {
    console.log(e.target.id);
  };

  return (
    <div>
      <h1>All requests</h1>

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
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          {getActiveTabData().length > 0 ? (
            <tbody>
              {getActiveTabData().map((req) => (
                <tr key={req.requestId}>
                  <td>{req.userId}</td>
                  <td>{req.fromCity}</td>
                  <td>{req.toCity}</td>
                  <td>{req.parcelType}</td>
                  <td>{req.createdAt}</td>
                  <td>{req.dispatchDate}</td>
                  <td>{req.parcelDescription}</td>
                  <td>
                    {isAllRequestsTabble && (
                      <div className="d-flex gap-1" style={{ width: "120px" }}>
                        <button
                          type="button"
                          className="btn btn-info"
                          id={req.requestId}
                          onClick={handleEdit}
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
            <p>No requests created!</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default RequestsTable;
