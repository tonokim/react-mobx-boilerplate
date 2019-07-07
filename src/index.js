

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { isProduction } from "@/utils"
import 'normalize.css'
import './style.less'

import App from "./containers/App";
import RootStore from "./stores";


const renderApp = Component => {
	render(
		<Router>
			<Provider rootStore={new RootStore()}>
				<App />
			</Provider>
		</Router>,
		document.getElementById("root")
	);
};

renderApp(App);

