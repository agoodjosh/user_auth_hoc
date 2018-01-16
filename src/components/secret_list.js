import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => (
    <div>
        <h2 className="align-center">Kim Jong Un's To-Do</h2>
        <ol>
            <li>Hang with Dennis Rodman</li>
            <li>Yo</li>
            <li>Troll Trump</li>
            <li>Continue bluffing that I have working "shtuff" *ahem* 'missles'</li>
        </ol>
    </div>
);

export default auth(SecretList);