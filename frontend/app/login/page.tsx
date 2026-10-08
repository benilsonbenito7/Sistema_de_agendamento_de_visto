'use client'
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/v1/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
            if (response.ok) {
                const data = await response.json();
                console.log("Login realizado com sucesso!");
                console.log(data)
            }
        } catch (error) {
            console.log(error);
        }

        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div>
            <main>
                <h1>VisaLink</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <p>O email digitado é: {email.toLowerCase()}</p>

                    <input
                        type="password"
                        value={password}
                        placeholder="Senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <p>A senha digitada é: {password}</p>
                    <button type="submit">Enviar</button>
                </form>


            </main>
        </div>
    )
}