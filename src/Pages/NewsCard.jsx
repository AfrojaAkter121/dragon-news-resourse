import { CiShare2 } from "react-icons/ci";
import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";
// import moment from "moment";

const NewsCard = ({ news }) => {
  const { title,id, rating, total_view, author, thumbnail_url, details } = news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card w-full bg-base-100 shadow-md border border-base-200 rounded-xl">
      <div className="flex justify-between items-center bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="tooltip" data-tip="Share options">
          <button className="flex gap-3 btn-sm ">
            <FaRegBookmark />
            <CiShare2 />
          </button>
        </div>
      </div>

      <div className="px-4 py-2 text-base-300">
        <h2 className="card-title text-base-content text-lg">{title}</h2>
      </div>
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full h-52 object-cover rounded-lg"
        />
      </figure>

      <div className="card-body p-4">
        <p className="text-sm text-gray-700">
          {details.length > 250 ? `${details.slice(0, 250)}...` : details}
          <Link to={`/news-details/${id}`} className="text-secondary font-medium cursor-pointer ml-1">
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < rating.number ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1 text-gray-800 font-medium">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
