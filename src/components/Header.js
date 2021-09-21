import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
    return <HeaderContainer>
        {/* left */}
        <HeaderLeft>
            <HeaderAvatar 
                // TODO: add onclick
            />
            <AccessTimeIcon />
        </HeaderLeft>

        {/* middle */}

        {/* right */}
    </HeaderContainer>
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
