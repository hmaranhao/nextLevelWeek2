import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'

function UnLoggedRoutes() {

    return (
        <BrowserRouter>
            <Route path="/" component={SignIn} exact />
        </BrowserRouter>
    )
}

export default UnLoggedRoutes