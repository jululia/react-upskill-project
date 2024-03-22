import React from "react";
import { Header } from "../components/Layout/Header";
// import { RandomErrorComp } from "./RandomErrorComp";
import { useLocation } from 'react-router-dom';

export const NavBarLink = () => {

    const location = useLocation();

    return (
        <div>
            {/* <RandomErrorComp /> */}
            <nav>
                <Header
                    initialHeightOfParentDiv={location.pathname === '/' ? 430 : 70}
                    finalHeightOfParentDiv={70}
                    initialSizeSun={location.pathname === '/' ? 250 : 50} />
            </nav>
        </div>
    );
};

// This NavBarLink component renders a navigation menu with links using the NavLink component from React Router. Here's a summary of what it's doing in terms of styles:

// It wraps the navigation menu inside a <div> element with the class name "card-menu".
// Inside the navigation menu, there's a <nav> element.
// It includes an <h4> heading with the text "Using Nav Link Comp" to denote the usage of NavLink component.
// The links are rendered inside an unordered list (<ul>) with the class name "app-ul".
// Each link is represented by a list item (<li>) with the class name "app-li".
// The NavLink component is used for each link, with the to prop specifying the destination URL and the text prop specifying the text to display.
// The className prop of NavLink is a function that dynamically applies classes based on the isActive and isPending props provided by React Router.
// If isPending is true, it applies the "pending" class, which might indicate a pending navigation.
// If isActive is true, it applies the "active" class, indicating the currently active link.
// This component allows for dynamic styling of links based on their active and pending states, providing visual feedback to the user about the current navigation state.