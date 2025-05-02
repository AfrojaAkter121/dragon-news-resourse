import { Suspense } from "react";
import Categorys from "../../Pages/Categorys";
import Loader from "../Loader/Loader";

const LeftNews = () => {
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <Categorys></Categorys>
      </Suspense>
    </div>
  );
};

export default LeftNews;
