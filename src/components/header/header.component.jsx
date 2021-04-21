import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

// Can have any name but mapStateToProps is standart for this
// advanced way to destructure of state->{} -> off of users -> {}
//destructure nested values
//* ****OldVersion**** *//
/*const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser, // same as currentUser: currentUser
	hidden,
});*/

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
