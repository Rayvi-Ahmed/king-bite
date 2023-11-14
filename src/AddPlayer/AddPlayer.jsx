import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const AddPlayer = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);

        fetch("http://localhost:5000/allPlayers",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            }


        )
            .then(res => res.json())
            .then(data => console.log(data))

        reset()
    }

    return (
        <div className="container mx-auto p-5">
            <div className="hero min-h-screen bg-[#085251;] rounded-lg shadow-lg">

                {/* Form Start  */}

                <div className=" flex-shrink-0 p-8 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Player  Name */}
                        <div className="flex justify-center items-center gap-6">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Player Name</span>
                                    </label>
                                    <input {...register("playerName", { required: true, })} type="text" placeholder="Player Name " className="input input-bordered w-full lg:w-[300px]" required />
                                </div>

                                {/* National Team */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">National Team</span>
                                    </label>
                                    <input {...register("team", { required: true, })} type="text" placeholder="National team" className="input input-bordered w-full lg:w-[300px] " required />
                                </div>

                                {/*Icc Rangking*/}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">ICC Rangking</span>
                                    </label>
                                    <input {...register("ranking", { required: true, })} type="number" placeholder="Number of rank" className="input input-bordered w-full lg:w-[300px]" required />
                                </div>

                                {/* PhotoURL */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Photo URL</span>
                                    </label>
                                    <input {...register("photoUrl", {})} type="text" placeholder="Image URL " className="input input-bordered lg:w-[300px] w-full" />
                                </div>
                                {/* Toal 100s */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Total 100s</span>
                                    </label>
                                    <input {...register("totalHoundred", {})} type="text" placeholder="Total Houndred " className="input input-bordered lg:w-[300px] w-full" />
                                </div>

                                {/* Total 50s */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Total 50s</span>
                                    </label>
                                    <input {...register("totalFifty", {})} type="text" placeholder="total Fifty" className="input input-bordered lg:w-[300px] w-full" />
                                </div>
                            </div>

                            {/* debut date  */}
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Debeut Date </span>
                                    </label>
                                    <input {...register("debut", { required: true, })} type="date" placeholder=" " className="input input-bordered lg:w-[300px] w-full" required />
                                </div>

                                {/* Highest Score */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Best Score</span>
                                    </label>
                                    <input {...register("highestScore", { required: true, })} type="number" placeholder="Best score an innings" className="input input-bordered lg:w-[300px] w-full" required />
                                </div>

                                {/* Speciality */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Speciality of player</span>
                                    </label>
                                    <select {...register("Speciality", {})} className="select select-accent w-full max-w-xs">
                                        <option disabled selected>Select the speciality</option>
                                        <option>All Rounder</option>
                                        <option>Batter</option>
                                        <option>Wicket Keeper & Bat</option>
                                        <option>Pace ball</option>
                                        <option>Lag spinner</option>
                                        <option>Off spinner</option>
                                        <option>Seam Bowler</option>
                                    </select>
                                </div>

                                {/* Total Run */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Total Run</span>
                                    </label>
                                    <input {...register("totalRun", {})} type="number" placeholder="Total International run " className="input input-bordered lg:w-[300px] w-full" />
                                </div>

                                {/* Batting Avg. */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Batting Average</span>
                                    </label>
                                    <input {...register("batingAvg", {})} type="number" placeholder="Batiing Average" className="input input-bordered lg:w-[300px] w-full" />
                                </div>

                                {/* Total Wicket */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-yellow-400">Total Wicket</span>
                                    </label>
                                    <input {...register("totalWicket", {})} type="number" placeholder="Total International Wicket " className="input input-bordered lg:w-[300px] w-full" />
                                </div>


                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-yellow-400">Player Details</span>
                            </label>
                            <textarea {...register("description", {})} placeholder="Player details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                        </div>

                        {/* Password */}

                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-400 btn-block text-green-700">Add Player</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlayer;

