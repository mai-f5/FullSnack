function ErrorMessage({ error }) {
    return <p className='ml-1 m-0 p-0 text-left'>
        <small id="errorMsg" className="text-danger ">
            {error}
        </small>
    </p>

}

export default ErrorMessage;