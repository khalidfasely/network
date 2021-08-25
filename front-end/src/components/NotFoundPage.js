import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className='content-container_body not_found'>
      404 Page Not Found - <Link to="/" className='home_link'>Go home</Link>
    </div>
);

export default NotFoundPage;