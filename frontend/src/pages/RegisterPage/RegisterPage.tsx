import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/useAuth";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, registerSchema } from "../../utils/schemas/authSchemas";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({ resolver: zodResolver(registerSchema) });

    function handleLogin(form: RegisterFormInputs) {
        registerUser(form.userName, form.email, form.password);
    }

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-slate-800 rounded-lg shadow border border-slate-600 md:mb-20 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-teal-400 md:text-2xl">
                            Create Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-slate-600 border border-slate-500 text-slate-300 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Email Address"
                                    {...register("email")}
                                />
                                {errors.userName ? <p className="text-slate-300">{errors.userName.message}</p> : ""}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="bg-slate-600 border border-slate-500 text-slate-300 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Username"
                                    {...register("userName")}
                                />
                                {errors.userName ? <p className="text-slate-300">{errors.userName.message}</p> : ""}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-slate-300"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-slate-600 border border-slate-500 text-slate-300 sm:text-sm rounded-lg block w-full p-2.5"
                                    {...register("password")}
                                />
                                {errors.password ? <p className="text-slate-300">{errors.password.message}</p> : ""}

                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-teal-500 hover:bg-opacity-20 border border-teal-500 hover:text-teal-400  hover transition duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm text-center font-light text-slate-400">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-teal-400 hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
