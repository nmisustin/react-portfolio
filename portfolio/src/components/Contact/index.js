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
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}
export default Contact