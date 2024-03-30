"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Header = () => {
  const { userId } = useParams();

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
            />
            <Link href="/">
              <p className="ms-2" style={{ fontSize: "30px", fontWeight: 700 }}>
                BOXES
              </p>
            </Link>
          </div>
          <div className="col-auto">
            <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link
                        class="nav-link"
                        aria-current="page"
                        href={`/${userId}/requests`}
                      >
                        My requests
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/requests">
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
