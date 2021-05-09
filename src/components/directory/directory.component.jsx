import React from "react";

import "./directory.styles.scss";

import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{
			//this.state.sections.map(({title, imageUrl, size, id, linkUrl}) => ( // see ES6 spread operator
			//<MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size}></MenuItem>
			sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps}></MenuItem>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
