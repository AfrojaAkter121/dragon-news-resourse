import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [newsTitle, setNewsTitle] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsTitle(data));
  }, []);

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 text-lg font-semibold">
      <p
        className="text-base-100 bg-secondary  px-3
            py-2"
      >
        Latest
      </p>
      <Marquee pauseOnHover={true}>
        {newsTitle.map((news) => (
          <p className="ml-10">{news.title}</p>
        ))}
        <p> </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
