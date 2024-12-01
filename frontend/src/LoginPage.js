import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react'

function LoginPage() {

    //HANDLE THE MULTIPLE INPUTS
    const [inputs, setInputs] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const inputChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => (
            { ...values, [name]: value }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`This form was submitted by ${inputs.firstname} ${inputs.lastname}`)
    }

    return (
        <>
            <div className="h-3/4 w-[60%] rounded-xl bg-slate-800 flex">


                {/* SIDE IMAGE */}
                <div className="h-full w-full rounded-md">
                    <img src="\images\loginimg.jpg" className="h-full w-full p-2 rounded-2xl" alt="wine" />
                </div>

                {/* LOGIN FORM */}
                <div className="h-full w-full rounded-md cursor-pointer">
                    <form onSubmit={submitHandler} className=" h-full flex flex-col items-center gap-5 p-14">
                        <div className="text-3xl text-white">CREATE AN ACCOUNT</div>
                        <div className="text-white">Already exists? <a href=''>Log in</a></div>

                        <div className="w-full flex justify-center gap-5">
                            <input onChange={inputChangeHandler} value={inputs.firstname} name="firstname" type="text" className="p-5 rounded-md h-10 outline-none" placeholder="First name" />
                            <input onChange={inputChangeHandler} value={inputs.lastname} name="lastname" type="text" className="p-5 rounded-md h-10 outline-none" placeholder="Last name" />
                        </div>

                        <input onChange={inputChangeHandler} value={inputs.email} name="email" type="email" className="p-5 w-full rounded-md h-10 outline-none" placeholder="Email" />
                        <input onChange={inputChangeHandler} value={inputs.password} name="password" type="password" className="p-5 w-full rounded-md h-10 outline-none" placeholder="Password" />

                        <button className="p-5 w-full rounded-md h-10 outline-none bg-purple-700 text-white flex items-center justify-center" type="submit">Create an account</button>


                        <div className="text-white" >Or register with</div>

                        <div className='flex justify-center items-center gap-10'>
                            <div>
                                <img className='h-10' src='\icons\google.png' alt='google'></img>
                            </div>
                            <div>
                                <img className='h-12' src='\icons\apple-logo.png' alt='google'></img>

                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default LoginPage;
