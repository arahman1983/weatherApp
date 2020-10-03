import React from "react";
import { Switch, Route } from "react-router-dom";
import {Current, Prev, Next} from '../pages';

export default function AppRoutes () {
  return (
    <Switch>
       <Route path="/"  exact>
            <Current />
        </Route>
        <Route path="/next"  exact>
            <Next />
        </Route>
        <Route path="/prev"  exact>
            <Prev/>
        </Route>
    </Switch>
  )
}