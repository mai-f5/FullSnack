function ErrorMessage({ error }) {
    return <p className='text-center ml-1 m-0 p-0'>
        <small id="errorMsg" className="text-danger ">
            {error}
        </small>
    </p>

}

export default ErrorMessage;