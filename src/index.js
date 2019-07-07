

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot, setConfig } from 'react-hot-loader/root'
import { Provider } from 'mobx-react'
import { isProduction } from "@/utils"
import 'normalize.css'
import './style.less'

import App from "./containers/App";
import rootStore from "./stores";

const Component = hot(() => (
  <Router>
		<Provider rootStore={rootStore}>
			<App />
		</Provider>
	</Router>
))

render(
	<Component />,
	document.getElementById("root")
);


