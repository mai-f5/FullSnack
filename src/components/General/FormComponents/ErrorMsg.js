function ErrorMessage({ error }) {
    return <p className='text-center mt-2'>
        <small id="errorMsg" className="text-danger">
            {error}
        </small>
    </p>

}

export default ErrorMessage;