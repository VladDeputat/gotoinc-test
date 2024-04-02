"use client";

import { useAppSelector } from "@/redux/hooks";
import { getUserIdSelector } from "@/redux/selectors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const userId = useAppSelector(getUserIdSelector);

  return (
    <header className="bg-dark text-light py-1 position-fixed z-1 w-100 top-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col d-flex align-items-center">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              className="logo"
              width={60}
              height={60}
              style={{ width: "60px", height: "60px" }}
            />
            <Link href="/">
              <p className="ms-2" style={{ fontSize: "30px", fontWeight: 700 }}>
                BOXES
              </p>
            </Link>
          </div>
          <div className="col-auto">
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        href={`/${userId}/create`}
                      >
                        Create request
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        href={`/${userId}/requests`}
                      >
                        My requests
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/requests">
                        All Requests
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
