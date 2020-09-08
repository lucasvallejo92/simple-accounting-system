import React from 'react';
import Loader from 'react-loader-spinner';

export const Spinner = () => {
    return (
        <div className="spinner">
            <Loader type="ThreeDots" color="#ffffff" height={100} width={100} />
        </div>
    );
}