import LoginForm from '../components/LoginForm'

function Login() {
    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <LoginForm />
            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1585719022717-87adb5bc279d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
        </div>
    )
}

export default Login