import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import ROUTES from './configs/routes';
//components
import RootLayout from './components/RootLayout/RootLayout';
import Login from './pages/Login/Login'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';

const Routes = () => {
    return (
        <RootLayout>
            <Switch>

                <Route exact path={ROUTES.LOGIN} component={Login} />
                <Route exact path={ROUTES.RESTAURANT} component={RestaurantPage} />

                <Redirect from="/" to={ROUTES.LOGIN} />
            </Switch>
        </RootLayout>
    )
};

export default Routes;
