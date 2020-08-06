import React, {useState} from 'react'

function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    //grabbing the user email input
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    //grabbing the user password input 
    const onPasswordChange = (event) => {
        setPassword(event.target.value);

    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    };

    //on Submit will fetch data from our database to check info
    const onSubmit = () => {
        fetch('/signin', requestOptions)
        .then(resp => resp.json())
        .then((data) => {
            if(data === 'success'){
                props.signInOut('home');
                console.log(data);
            }
        }).catch((err) => console.log(err));
        
        
    }
    

    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="center">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Sign in" onClick={onSubmit}/>
                    </div>
                    <div className="lh-copy mt3 center">
                    <p onClick={() => props.signInOut('register')} className="f6 link dim black db  pointer">Register</p>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default SignIn
