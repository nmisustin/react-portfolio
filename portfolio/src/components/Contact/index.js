import React, {useState} from 'react';

function Contact(){
    
    const [formState, setFormState] = useState({name:'',email:'',message:''});
    const {name, email, message} = formState;
    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        setFormState({...formState, [e.target.name]: e.target.value});
    }
    return <div>
        <h1 className='text-light'>Contact Me</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-group m-2">
                <label htmlFor="name" className="input-group-text">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} className="form-control"/>
            </div>
            <div className="input-group m-2">
                <label htmlFor="email" className='input-group-text'>Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} className="form-control" />
            </div>
            <div className='input-group m-2'>
                <label htmlFor="message" className="input-group-text">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-secondary text-light">Submit</button>
        </form>
    </div>
}
export default Contact