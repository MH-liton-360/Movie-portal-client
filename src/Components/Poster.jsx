import { Link } from "react-router-dom";

const Poster = ({ poster }) => {
    const { id, movie_poster, adventure_title, short_description } = poster;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={movie_poster}
                        className="h-[280px] w-[380px] rounded-2xl"
                        alt={Poster} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{adventure_title}</h2>
                    <p className="text-sm font-light py-2">{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/Poster/${id}`}> See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poster;