import React from "react";

export default function SearchBar() {

    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    alert('me isiste clic??');
                }
            }>
                <input type='text' />
                <input type='submit' value='buscar...' />
            </form>
        </div>
    )
}