import Link from 'next/link'

function ForgotPassword() {
    return (
        <div>
            <h1>Hello</h1>
            <Link href="/login">
                <a className="md:text-blue-700 sm:text-green-600 hover:text-pink-500">Back to login</a>
            </Link>
        </div>
    )
}

export default ForgotPassword