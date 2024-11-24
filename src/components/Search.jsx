const Search = ({ handleSubmit, handleInputChange }) => {
    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input 
                type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={handleInputChange}
            />
            <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
        </form>
    )
}

export default Search;
