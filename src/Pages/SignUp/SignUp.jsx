import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset()
    }


    return (
        <div className="hero min-h-screen bg-blue-200">
            <div className="hero-content flex-col lg:flex-row-reverse lg:ml-7">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                {/* Form Start  */}

                <div className=" flex-shrink-0 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        {/* First Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input {...register("firstName", { required: true, })} type="text" placeholder="Your frist name " className="input input-bordered" required />
                        </div>

                        {/* Last Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input {...register("lastName", { required: true, })} type="text" placeholder="Your last name " className="input input-bordered" required />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true, })} type="email" placeholder="Your Email " className="input input-bordered" required />
                        </div>

                        {/* PhotoURL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("email", {})} type="text" placeholder="Image URL " className="input input-bordered" />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@*#&$])(?=.*[0-9])(?=.*[a-z])/ })} type="password" placeholder="Your password " className="input input-bordered" required />

                            {/* Password Condition */}
                            {errors.password?.type === "required" && <span className="text-red-500">Password must be required </span>}

                            {errors.password?.type === "minLength" && <span className="text-red-500">Password must 8 cherecter</span>}

                            {errors.password?.type === "pattern" && <span className="text-red-500">Special chrecter has requred</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-green-300 btn-block">Sign Up</button>
                        </div>
                    </form>

                    <div className="text-center p-3 ">
                        <p>You are registered? <Link to={'/login'}><p className="text-blue-500 font-semi-bold">Log in Now</p></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;