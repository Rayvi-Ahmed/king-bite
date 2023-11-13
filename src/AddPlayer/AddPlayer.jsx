import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const AddPlayer = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        reset()
    }

    return (
        <div className="container mx-auto p-5">
            <div className="hero min-h-screen bg-white">

                {/* Form Start  */}

                <div className=" flex-shrink-0 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* First Name */}
                        <div className="flex justify-center items-center gap-6">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input {...register("firstName", { required: true, })} type="text" placeholder="Your frist name " className="input input-bordered lg:w-[300px]" required />
                                </div>

                                {/* Last Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input {...register("lastName", { required: true, })} type="text" placeholder="Your last name " className="input input-bordered lg:w-[300px]" required />
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true, })} type="email" placeholder="Your Email " className="input input-bordered lg:w-[300px]" required />
                                </div>

                                {/* PhotoURL */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input {...register("email", {})} type="text" placeholder="Image URL " className="input input-bordered lg:w-[300px]" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input {...register("firstName", { required: true, })} type="text" placeholder="Your frist name " className="input input-bordered lg:w-[300px]" required />
                                </div>

                                {/* Last Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input {...register("lastName", { required: true, })} type="text" placeholder="Your last name " className="input input-bordered lg:w-[300px]" required />
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <select className="select select-accent w-full max-w-xs">
                                        <option disabled selected>Dark mode or light mode?</option>
                                        <option>Auto</option>
                                        <option>Dark mode</option>
                                        <option>Light mode</option>
                                    </select>
                                </div>

                                {/* PhotoURL */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input {...register("email", {})} type="text" placeholder="Image URL " className="input input-bordered lg:w-[300px]" />
                                </div>


                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                        </div>

                        {/* Password */}

                        <div className="form-control mt-6">
                            <button className="btn bg-green-300 btn-block">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlayer;

