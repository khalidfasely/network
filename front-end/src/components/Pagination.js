import React from 'react';

const Pagination = ({ postsPerPage, postsP, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(postsP / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return <div className='pagin'>
        {
            pageNumbers.map(number => (
                <div className='pagin_buttons' key={number}>
                    <button className='pagin_button' onClick={() => paginate(number)}><b>{number}</b></button>
                </div>
                ))
        }
    </div>
};

export default Pagination;