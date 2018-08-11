import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CharacterSheet from './CharacterSheet';
import DiceRoller from './DiceRoller';
import Settings from './Settings';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={App} />
            <Route path="/charactersheet" component={CharacterSheet} />
            <Route path="/diceroller" component={DiceRoller} />
            <Route path="/settings" component={Settings} />
        </Switch>
    </BrowserRouter>
)

export default Router;