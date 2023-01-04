import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users CRUD: Create, Read, Update, Delete'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User CRUD
            </Main>
        )
    }
}