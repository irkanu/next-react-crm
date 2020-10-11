import LoginForm from '../components/LoginForm'

function Login() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login