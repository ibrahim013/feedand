import React, { Component } from 'react'


class AndelaBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodPeriod: [
        { id: 1, period1: 'Breakfast', period2: 'Lunch', date: 'Monday 04/03/2018' },
        { id: 2, period1: 'Breakfast', period2: 'Lunch', date: 'Tuesday 05/03/2018' },
        { id: 3, period1: 'Breakfast', period2: 'Lunch', date: 'Wednesday 06/03/2018' },
        { id: 4, period1: 'Breakfast', period2: 'Lunch', date: 'Thursday 07/03/2018' },
        { id: 5, period1: 'Breakfast', period2: 'Lunch', date: 'Friday 08/03/2018' },
      ],
      foodMenu: [
        {id: 1, menu: 'Bread', course: 'Main', period: 'Breakfast', date: 'Monday 04/03/2018' },
        {id: 2, menu: 'Rice', course: 'Main', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 3, menu: 'Beans', course: 'Main', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 4, menu: 'Eba', course: 'Main', period: 'Lunch', date: 'Monday 04/03/2018'},

        {id: 5, menu: 'Stew', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 6, menu: 'Afang Soup', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 7, menu: 'Okra Soup', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 8, menu: 'Egusi Soup', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},

        {id: 9, menu: 'Salad', course: 'Side', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 10, menu: 'Platain', course: 'Side', period: 'Lunch', date: 'Monday 04/03/2018'},

        {id: 11, menu: 'Cake', course: 'Dessert', period: 'Lunch', date: 'Monday 05/03/2018'},
        {id: 12, menu: 'Ice-Cream', course: 'Dessert', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 13, menu: 'Apple', course: 'Dessert', period: 'Lunch', date: 'Monday 04/03/2018'},

        {id: 14, menu: 'Chicken', course: 'Protein', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 15, menu: 'Meat', course: 'Protein', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 16, menu: 'Fish', course: 'Protein', period: 'Lunch', date: 'Monday 04/03/2018'},

        {id: 17, menu: 'Amala', course: 'Main', period: 'Lunch', date: 'Monday 05/03/2018'},
        {id: 18, menu: 'Porriage Yam', course: 'Main', period: 'Lunch', date: 'Monday 05/03/2018'},
        {id: 19, menu: 'Ogbono Soup', course: 'Soup', period: 'Lunch', date: 'Monday 05/03/2018'},
        {id: 20, menu: 'Ofada Rice', course: 'Main', period: 'Lunch', date: 'Monday 05/03/2018'},
        {id: 21, menu: 'Moimoi', course: 'Side', period: 'Lunch', date: 'Monday 05/03/2018'},
      ],
      checked: false
    }
  }

  handleCheck() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    const weeklyMenu = this.state.foodPeriod.map((period) => <div key={period.id}><li>{period.period1} {period.date}</li><li>{period.period2} {period.date}</li></div>)
    const allFood = this.state.foodMenu
      .filter((date) => date.date === 'Monday 04/03/2018' )
      .map((food) => <li key={food.id}>{food.menu} <span style={{ color: 'blue'}}>{food.course}</span></li>)
      

    return (
    <div>
      <input type="checkbox" /> A 
    </div>);
  }
}

export default AndelaBoard;