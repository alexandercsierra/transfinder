import React from 'react'

const Search = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <form>
                <input onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search

