import { Link } from 'react-router-dom';
import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path:resolved.pathname, end:true});
    return (
        <div>
            <Link 
                style={{
                    textDecoration:'none',
                    color:match?'var(--twitter-color)': 'black'
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}

export default CustomLink;