const Login: React.FC = () => {
    return (
        <div className="col-span-full flex w-full min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    // Handle login logic here
                }}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            >
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-semibold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                />
            </form>
        </div>
    )
}


export default Login
