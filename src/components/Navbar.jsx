import { Link } from "react-router-dom";

import styled from "styled-components";

const NavbarWrapper = styled.nav`
	margin: 0;
	padding: 10px;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-sizing: border-box;

	box-shadow: 0px 2px 6px lightgrey;
`;

const NavListWrapper = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 30px;

	li {
		list-style: none;

		a {
			text-decoration: none;
		}
	}
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<div className="logo">KG</div>
			<div className="links">
				<NavListWrapper>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/post">Post</Link>
					</li>
				</NavListWrapper>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
