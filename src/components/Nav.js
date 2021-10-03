import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [selectedPage, setSelectedPage] = useState(0); //0 -> info, 1 -> fromus, 2 -> guest_info

  return (
    <div className="w-full bg-primary h-auto text-white pl-4 pr-4 pt-4 ">
      <div className="flex flex-row justify-between max-w-md items-center m-auto">
        <Link
          to="/info"
          onClick={() => {
            setSelectedPage(0);
          }}
          className={selectedPage == 0 ? "p-2 border-b-4 border-white" : "p-2"}
        >
          ご案内
        </Link>
        <Link
          to="/fromus"
          onClick={() => {
            setSelectedPage(1);
          }}
          className={selectedPage == 1 ? "p-2 border-b-4 border-white" : "p-2"}
        >
          新郎新婦紹介
        </Link>
        <Link
          to="/guest_info"
          onClick={() => {
            setSelectedPage(2);
          }}
          className={selectedPage == 2 ? "p-2 border-b-4 border-white" : "p-2"}
        >
          ゲスト紹介
        </Link>
      </div>
    </div>
  );
}
