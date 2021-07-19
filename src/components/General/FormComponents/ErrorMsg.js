function ErrorMessage({ error }) {
    return <p className='text-left ml-1 m-0 p-0'>
        <small id="errorMsg" className="text-danger ">
            {error}
        </small>
    </p>

}

export default ErrorMessage;