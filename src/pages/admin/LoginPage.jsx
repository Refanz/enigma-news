import {Component} from 'react';
import PropTypes from "prop-types";
import TextInput from "../../shared/components/TextInput.jsx";
import toast from "react-hot-toast";

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            errors: {
                username: null,
                password: null
            },
            isFormValid: false,
            isLoading: false
        }

    }

    handleChange = (evt) => {
        const {name, value} = evt.target;

        let errorMessage = "";

        if (name === "username") {
            if (value.length < 1) {
                errorMessage = "Username is required";
            } else if (value.length < 5) {
                errorMessage = "Minimal username character must be at least 5 character"
            }
        }

        if (name === "password") {
            if (value.length < 1) {
                errorMessage = "Password is required";
            } else if (value.length < 8) {
                errorMessage = "Minimal password character must be at least 8 character"
            }
        }

        this.setState((prevState) => {
            const updatedErrors = {
                ...prevState.errors,
                [name]: errorMessage
            };

            const updatedFormValid = Object.values(updatedErrors).every(error => error === "");

            return {
                [name]: value,
                errors: updatedErrors,
                isFormValid: updatedFormValid
            }
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.setState(() => ({
            isLoading: true
        }));

        setTimeout(() => {
            this.setState(() => ({
                isLoading: false
            }));

            if (this.state.username === "admin" && this.state.password === "password") {
                this.props.onChangePage("dashboard");
                toast.success("Login Success");
            } else {
                toast.error("Login Gagal!");
                this.resetForm();
            }

        }, 3000);
    }

    resetForm = () => {
        this.setState((prevState) => ({
            ...prevState,
            username: "",
            password: ""
        }))
    }

    render() {

        const {errors, isFormValid, isLoading} = this.state;

        return (
            <div className="flex flex-col justify-center items-center bg-gray-50 min-h-dvh p-4">
                <form onSubmit={this.handleSubmit}
                      className="flex flex-col md:w-[500px] w-full shadow bg-white rounded-md px-6">
                    <h1 className="text-2xl text-center mt-4 font-bold text-red-600">Welcome Back</h1>
                    <p className="mt-4 text-center text-gray-600">Please login to your account</p>
                    {
                        isLoading &&
                        <span
                            className="loading loading-spinner loading-md self-center mt-4 text-red-600 transition ease-in duration-300"></span>
                    }
                    <div className="flex flex-col gap-4 mt-4">

                        <TextInput label="Username"
                                   name="username"
                                   id="username"
                                   type="text"
                                   placeholder="exampleuser"
                                   value={this.state.username}
                                   errorMessage={errors.username}
                                   onChange={this.handleChange}/>

                        <TextInput label="Password"
                                   name="password"
                                   placeholder="********"
                                   id="password"
                                   type="password"
                                   value={this.state.password}
                                   errorMessage={errors.password}
                                   onChange={this.handleChange}/>
                    </div>
                    <button disabled={!isFormValid}
                            className="bg-red-600 hover:bg-red-500 disabled:bg-gray-200 py-1.5 px-4 rounded mt-6 text-white mb-8 w-fit">
                        Sign In
                    </button>
                </form>
                <small className="text-gray-500 mt-4">@2024 EnigmaNews. All right reserved.</small>
            </div>
        );
    }
}

LoginPage.propTypes = {
    onChangePage: PropTypes.func.isRequired
}

export default LoginPage;
