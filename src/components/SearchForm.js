import React from 'react';


const SearchForm = props => {
    return (
        <div>
            <form className='form' onSubmit={props.onSubmit} >
                <input onChange={props.onChange} type="text" name='city' placeholder='Search City' />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;