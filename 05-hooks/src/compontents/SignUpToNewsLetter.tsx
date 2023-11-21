import {useEffect, useRef, useState} from "react";

export default function SignUpToNewsLetter() {


    const [email, setEmail] = useState("")
    const inputElement = useRef<HTMLInputElement>(null)


    const handleClick = () => {
        if (inputElement.current && !email) {
            inputElement.current.style.border = "5px solid red"
            inputElement.current.focus()
        }
    }

    useEffect(() => {
        if (inputElement.current && email) {
            inputElement.current.style.border = "none"
        }
    }, [email])
    return (
        <div>
            <input
                ref={inputElement}
                type="email"
                placeholder="Email..."
                value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <button onClick={handleClick}>Sign up to news letter</button>
        </div>
    )
}