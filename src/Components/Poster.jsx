import { Link } from "react-router-dom";

const Poster = ({ poster }) => {
    const { id, movie_poster, movie_Title, genre, release_year, rating, duration } = poster;
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
                    <h2 className="card-title">{movie_Title}</h2>
                    <p>{genre}</p>

                    <div className="divider"></div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 ">
                        <div className="flex flex-col space-y-3">
                            <p><strong>Rating:</strong> {rating}</p>
                            <p><strong>Release_year:</strong> {release_year}</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p><strong>Duration:</strong> {duration}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/Poster/${id}`}> See Details</Link></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Poster;