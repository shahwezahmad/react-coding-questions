function SearchBar({value, handleChange}) {
    return (
        <input type="text" value={value} onChange={(e) => handleChange(e)} />
    )
}

export default SearchBar