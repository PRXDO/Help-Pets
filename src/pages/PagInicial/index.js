import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import NewPet from '../src/pages/NewPet/index.js';

const PagInicial = createAppContainer(

    createDrawerNavigator({
        PagInicial,
        NewPet,
    },{
        inicialRouteName: 'PagInicial',
        }
    )
    import '../style/style.css'; // ou
    import '../style/style.js';
    

);

export default PagInicial;