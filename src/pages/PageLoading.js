import React from 'react';
import { display } from '@mui/system';

const PageLoading = () => {

    return (
        <div style={{display: 'flex',minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <h1>Loading...</h1>
            </div>
        </div>
    )
}

export default PageLoading;