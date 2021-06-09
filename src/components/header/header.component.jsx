import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//import "./header.styles.scss";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		{/*<HeaderContainer className='header'>*/}
		<LogoContainer to='/'>
			{/*<Link className='logo-container' to='/'>*/}
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to='/shop'>SHOP</OptionLink>
			<OptionLink to='/contact'>CONTACT</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
			) : (
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
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
