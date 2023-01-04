import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";
import Settings from '../../main/config/Settings'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users CRUD: Create, Read, Update, Delete'
}

const baseUrl = Object.freeze('https://localhost:3011/users');

const initialState = {
    user: {
        name: '',
        email: ''
        },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user });
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put': 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });
            })
    }

    getUpdatedList(user){
        // Create a new list without the user  
        const list = this.state.list.filter(u => u.id !== user.id);
        // Then put the user at the start of the list
        list.unshift(user);
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user })
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 cold-md-6">
                        <div className="form-group">
                            <label>
                                Name
                            </label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTable(){

    }

    renderRow(){

    }

    render() {
        return (
            <Main {...headerProps}>
                User CRUD
            </Main>
        )
    }
}