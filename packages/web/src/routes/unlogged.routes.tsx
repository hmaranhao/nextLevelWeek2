import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Register from '../pages/Register'

function UnLoggedRoutes() {

    return (
        <BrowserRouter>
            <Route path="/" component={SignIn} exact />
            <Route path="/register" component={Register} />
            <Route path="/remember" component={() => (<div>Esqueci Minha Senha</div>)} />
        </BrowserRouter>
    )
}

export default UnLoggedRoutes