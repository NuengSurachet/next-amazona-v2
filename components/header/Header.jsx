import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-warning text-lg">
            Next Amazona V2
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/cart">
                cart
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/signin">
                signin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
