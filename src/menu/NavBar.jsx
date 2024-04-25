import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import useScrollListener from "../hooks/useScrollListener/useScrollListener";
import "./navbar.css";

export default function NavBar() {
  let dropdownItems = [
    {
      menuText: "Projects",
      dropdownList: [
        "Education",
        "Health",
        "Infrastructure/entrepreneurship",
        "Management",
      ],
    },
    {
      menuText: "Company/join us",
      dropdownList: [
        "How can you help",
        "How it works",
        "Share your skill",
        "FAQ",
      ],
    },
    {
      menuText: "About us",
      dropdownList: [
        "Our partners",
        "Who Yennenga Progress are",
        "Our socials",
        "UN Goals",
      ],
    },
  ];

  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 0 && scroll.y - scroll.lastY < 0)
      _classList.push("showNavbar");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      className={`nabvar ${navClassList.join(" ")} sticky z-10 mt-20 flex h-24 w-full items-center justify-between gap-96 bg-black pl-6 pr-14 font-['Arial'] text-lg font-normal text-light-gray transition delay-150 ease-in-out`}
    >
      <div className="navbar-logo">
        <a href="#">
          <img src="/images/yp_logo_brown.svg" alt="Yennenga Progress Logo" />
        </a>
      </div>
      <ul className="navbar-list flex h-full items-center justify-center gap-12">
        {dropdownItems.map((menu) => (
          <li className="list-item h-full">
            <Dropdown
              key={menu.menuText}
              rootItem={menu.menuText}
              items={menu.dropdownList}
            />
          </li>
        ))}
        <li className="list-item">
          <a className="list-link" href="#">
            News
          </a>
        </li>
        <li className="list-item">
          <a className="list-link" href="#">
            Calendar
          </a>
        </li>
      </ul>
    </nav>
  );
}
