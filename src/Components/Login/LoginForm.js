import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../Hooks/useForm';

export const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    function handleSubmit(event) {
        event.preventDefault();
        if(username.validate() && password.validate()){

            async function requestLogin() {
                const response = await fetch(
                    'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                    })
                    console.log(response)
                    const json = await response.json()
                    console.log(json)
                }
                
                requestLogin()
            }
            }
            
            return (
                <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                
                <Button >Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}