import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
import Productos from './common/components/Productos/productoContainer';
import ListaProductos from './common/components/Productos/listadoContainer'
require('../style/index.css');
import 'uikit/dist/css/uikit.min.css';
import Home from './common/components/Home/HomeContainer';
import HomeRoute from './HomeRouter';
import Reportes from './common/components/Reportes/ReportesContainer';

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Home} />
                {/* <ProtectedRoute exact path="/user-profile" component={Profile} /> */}
                {/* Productos */}
                <ProtectedRoute exact path="/productos" component={ListaProductos} />
                <ProtectedRoute exact path="/productos/create" component={Productos} />
                <ProtectedRoute exact path="/productos/:id/ver" component={Productos} />
                <ProtectedRoute exact path="/productos/:id/editar" component={Productos} />
                <ProtectedRoute exact path="/reportes" component={Reportes} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);