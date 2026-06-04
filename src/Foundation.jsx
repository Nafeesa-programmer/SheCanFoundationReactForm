import { useState } from "react"

export default function Foundation(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        if(!name.trim()){
            setSuccess("");
            setError("Name is Required!");
            return;
        }
        else if(!email.includes("@")) {
            setSuccess("");
            setError("Please enter a valid email");
            return;
        }
        else if(!message.trim()){
            setSuccess("");
            setError("Message is Required!");
            return;
        }
        else{
            setError("");
            setSuccess("Form Submitted Successfully!");

            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return(
        <section>
             <header className = "title">
                <h1>She Can Foundation</h1>
                <p>{name ? `Welcome ${name}!` : "Welcome User!"}</p>
             </header>
             <form className = "form" onSubmit = {handleSubmit}>
                <div className = "name">
                <label>Name : </label>
                <input type = "text" 
                placeholder = "Enter your Name" 
                value = {name}
                onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div className = "email">
                    <label>Email : </label>
                    <input type = "email" 
                placeholder = "Enter your Email" 
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}/> 
                </div>
                <div className = "message">
                   <label>Message : </label>
                    <textarea placeholder = "Write Your Message Here"
                    value = {message}
                     onChange = {(e) => setMessage(e.target.value)} />
                </div>
                <button type = "submit" className = "btn">Submit</button>
                {error && <p className = "error">{error}</p>}
                {success && <p className = "success">{success}</p>}
             </form>
        </section>
    )
}