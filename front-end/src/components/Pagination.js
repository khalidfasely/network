import React from 'react';

const Pagination = ({ postsPerPage, postsP, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(postsP / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return <div>
        {
            pageNumbers.map(number => (
                <div key={number}>
                    <button onClick={() => paginate(number)}>{number}</button>
                </div>
                ))
        }
    </div>
};

export default Pagination;