const Register: React.FC = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                // Handle registration logic here
            }}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
            <div className="mb-4">
                    <label
                        htmlFor="register-username"
                        className="block text-gray-700 font-semibold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="register-username"
                        name="register-username"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="register-password"
                        className="block text-gray-700 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="register-password"
                        name="register-password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="register-confirm-password"
                        className="block text-gray-700 font-semibold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="register-confirm-password"
                        name="register-confirm-password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200 cursor-pointer"
                />
        </form>
    )
}


export default Register
