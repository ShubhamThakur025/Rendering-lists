import React, { Component } from 'react'
import '../Hof.css'
export default class Hof extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }
    renderAllItems = () => {
        const data = this.state.userData
        const allItems = data.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }
    renderbyUserType = () => {
        const type = "Designer"
        const data = this.state.userData
        const sortedItems = data.filter((item) => item.user_type  == type)
        const allItems = sortedItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }
    renderfilterJ = () => {
        const data = this.state.userData
        const sortedItems = data.filter((item) => item.name[0] == "J")
        const allItems = sortedItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }
    renderbyAge = () => {
        const data = this.state.userData
        const sortedItems = data.filter((item) => item.age > 28 && item.age <= 50)
        const allItems = sortedItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }
    renderbyNumber = () => {
        const type = "Designer"
        const data = this.state.userData
        const sortedItems = data.filter((item) => item.user_type  == type)
        const allItems = sortedItems.reduce((init, item) => init+item.years, 0)
        return (
            <React.Fragment>
                {allItems}
            </React.Fragment>
        )
    }
    render() {
        return (
            <div className='container'>
                <>
                <h1 className="title">Display all items</h1>
                <ul className="list">{this.renderAllItems()}</ul>
                <h1 className="title">Display based on user type</h1>
                <ul className="list">{this.renderbyUserType()}</ul>
                <h1 className="title">FIlter all data starting with j</h1>
                <ul className="list">{this.renderfilterJ()}</ul>
                <h1 className="title">FIlter all data based on greater than 28 and less than or equal to</h1>
                <ul className="list">{this.renderbyAge()}</ul>
                <h1 className="title">FIlter the total years of designers</h1>
                <ul className="list">{this.renderbyNumber()}</ul>
                </>
            </div>
        )
    }
}

