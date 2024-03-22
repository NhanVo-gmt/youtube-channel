import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {

  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <form className={`${showFullWidthSearch ? "flex" : "md:flex hidden"} gap-4 flex-grow justify-center`}>
      <Button onClick={() => setShowFullWidthSearch(false)} size={"icon"} variant={"ghost"} className={`${showFullWidthSearch ? "flex" : "hidden"}`}>
          <ArrowLeft />
        </Button>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          ></input>
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size={"icon"} variant={"ghost"}>
          <Mic />
        </Button>
      </form>
      <div className={`flex-row flex-shrink-0 items-center md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"} `}>
        <Button onClick={() => setShowFullWidthSearch(true)} size={"icon"} variant={"ghost"} className="md:hidden">
          <Search />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Mic />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Upload />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Bell />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
