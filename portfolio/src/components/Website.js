import React from 'react';

function Website(props){
    const project = props
    console.log(project)
    if(project.website.project.site){
        return <a className='btn btn-primary text-light' href={project.website.project.website} target='_blank'>Website</a>
    }
    else{
        return <p></p>
    }
    // return <p>return</p>
}
export default Website;