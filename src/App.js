import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/styles/general.css';
import './assets/styles/app.css';
import './assets/styles/ui/form.css';
import './assets/styles/fonts.css';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Error from './pages/Error';
import Orders from './pages/Orders';

import AddOrder from './pages/AddOrder';
import Companies from './pages/Companies';
import OrderCard from './pages/OrderCard';
import AddCompany from './pages/AddCompany';
import Account from './pages/Account';

function App() {

	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>

				<Route path="" element={<Home />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/account" element={<Account />} />
				<Route path="/companies" element={<Companies />} />
				<Route path="/order/:id" element={<OrderCard />} />
				<Route path="/add-order" element={<AddOrder />} />
				<Route path="/add-company" element={<AddCompany />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
}

export default App;

