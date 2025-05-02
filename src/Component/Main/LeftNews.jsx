import { Suspense } from "react";
import Categorys from "../../Pages/Categorys";

const LeftNews = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Categorys></Categorys>
      </Suspense>
    </div>
  );
};

export default LeftNews;
