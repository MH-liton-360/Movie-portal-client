import { useLoaderData, useParams } from "react-router-dom";

const PosterDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();


    const poster = data.find(poster => poster.id.toString() === id);

    const { image, adventure_title, short_description, adventure_cost, booking_availability, location, duration, max_group_size, special_instructions } = poster;
    return (

        <section className="justify-items-center pt-10">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        className="p-2 rounded-4xl"
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{adventure_title}</h2>
                    <p>{short_description}</p>

                    <div className="divider"></div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md mx-auto">
                        <div className="flex flex-col space-y-3">
                            <p><strong>Cost:</strong> {adventure_cost}</p>
                            <p><strong>Booking:</strong> {booking_availability}</p>
                            <p><strong>Location:</strong> {location}</p>
                        </div>

                        <div className="flex flex-col space-y-3">
                            <p><strong>Duration:</strong> {duration}</p>
                            <p><strong>Size:</strong> {max_group_size}</p>
                            <p><strong>Instruction:</strong> {special_instructions}</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default PosterDetails;