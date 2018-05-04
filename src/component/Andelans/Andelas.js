import React, { Component } from 'react'


class AndelaBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItem: '',
      main: '',
      soup: '',
      side: '',
      dessert: '',
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
        {id: 4, menu: 'Eba', course: 'Main', period: 'Lunch', date: 'Monday 05/03/2018'},

        {id: 5, menu: 'Stew', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 6, menu: 'Afang Soup', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 7, menu: 'Okra Soup', course: 'Soup', period: 'Lunch', date: 'Monday 04/03/2018'},
        {id: 8, menu: 'Egusi Soup', course: 'Soup', period: 'Lunch', date: 'Monday 05/03/2018'},

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
        {id: 21, menu: 'Moimoi', course: 'Side', period: 'Lunch', date: 'Monday 04/03/2018'},
        
      ],
      checked: false,
      feedback: [
        {id: 1, mealId: '1234'}
      ]

    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    console.log('dnksd')
  }
  

  render() {
    const weeklyMenu = this.state.foodPeriod.map((period) => <div key={period.id}><li>{period.period1} {period.date}</li><li>{period.period2} {period.date}</li></div>)
    const allFood = this.state.foodMenu
      .filter((date) => date.date === 'Monday 04/03/2018' )
      .map((food) => <li key={food.id}>{food.menu} <span style={{ color: 'blue'}}>{food.course}</span></li>)

    const mainDish = this.state.foodMenu
      .filter((food) => food.course === 'Main')
      .map((food) => <p>{food.menu}</p>)

      console.log('val',this.state.main, this.state.soup, this.state.side, this.state.protein, this.state.dessert)

    return (
    <div>
  <header>
      <ul id="slide-out" className="side-nav fixed">
          <li><a href="#!">Post Meal</a></li>
          <li><a href="#!">Order meals</a></li>
          <li><a href="#!">View Feedback</a></li>
          <li><a href="#!">Total meal served</a></li>

        </ul>
  </header>

        <main>
          <div className="mobile-hambuger">
            <a href="#" data-activates="slide-out" className="button-collapse hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
          </div>
          <div className="content-container">
            <div className="content-header" />
            <div className="content-body">
              <div className="content-wrapper">
                <div className="catering-vendor-name">
                  <span className="days">Monday</span>
                </div>
                <div className="catering-vendor-menu">
                  <div className="menu-cards">
                    <div className="menu-cards-header">
                      <div className="status-header">
                        <span className="button">Breakfast</span>
                        <span className="button">status</span>
                      </div>
                      <div className="process">
                        <button className="button">Process</button>
                      </div>
                    </div>
                    <div className="menu-card-items">
                      <div className="scrolling-wrapper">
                        <div className="card-items">
                          Main Course
                          {this.state.foodMenu
                            .filter(
                              food =>
                                food.course === "Main" &&
                                food.date === "Monday 04/03/2018"
                            )
                            .map((food, index) => {
                              return (
                                <p key={food.id}>
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.main === food.menu
                                    }
                                    value={food.menu}
                                    id={`food${food.id}`}
                                    name="main"
                                    onChange={this.handleInputChange}
                                  />
                                  <label htmlFor={`food${food.id}`}>
                                    {food.menu}
                                  </label>
                                </p>
                              );
                            })}
                        </div>

                        <div className="card-items">
                          Stew/Soup
                          {this.state.foodMenu
                            .filter(
                              food =>
                                food.course === "Soup" &&
                                food.date === "Monday 04/03/2018"
                            )
                            .map((food, index) => {
                              return (
                                <p key={food.id}>
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.soup === food.menu
                                    }
                                    value={food.menu}
                                    id={`food${food.id}`}
                                    name="soup"
                                    onChange={this.handleInputChange}
                                  />
                                  <label htmlFor={`food${food.id}`}>
                                    {food.menu}
                                  </label>
                                </p>
                              );
                            })}
                        </div>

                        <div className="card-items">
                          Side
                          {this.state.foodMenu
                            .filter(
                              food =>
                                food.course === "Side" &&
                                food.date === "Monday 04/03/2018"
                            )
                            .map((food, index) => {
                              return (
                                <p key={food.id}>
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.side === food.menu
                                    }
                                    value={food.menu}
                                    id={`food${food.id}`}
                                    name="side"
                                    onChange={this.handleInputChange}
                                  />
                                  <label htmlFor={`food${food.id}`}>
                                    {food.menu}
                                  </label>
                                </p>
                              );
                            })}
                        </div>

                        <div className="card-items">
                          Protein
                          {this.state.foodMenu
                            .filter(
                              food =>
                                food.course === "Protein" &&
                                food.date === "Monday 04/03/2018"
                            )
                            .map((food, index) => {
                              return (
                                <p key={food.id}>
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.protein === food.menu
                                    }
                                    value={food.menu}
                                    id={`food${food.id}`}
                                    name="protein"
                                    onChange={this.handleInputChange}
                                  />
                                  <label htmlFor={`food${food.id}`}>
                                    {food.menu}
                                  </label>
                                </p>
                              );
                            })}
                        </div>

                        <div className="card-items">
                          Dessert
                          {this.state.foodMenu
                            .filter(
                              food =>
                                food.course === "Dessert" &&
                                food.date === "Monday 04/03/2018"
                            )
                            .map((food, index) => {
                              return (
                                <p key={food.id}>
                                  <input
                                    type="radio"
                                    checked={
                                      this.state.dessert === food.menu
                                    }
                                    value={food.menu}
                                    id={`food${food.id}`}
                                    name="dessert"
                                    onChange={this.handleInputChange}
                                  />
                                  <label htmlFor={`food${food.id}`}>
                                    {food.menu}
                                  </label>
                                </p>
                              );
                            })}
                        </div>
                            
                      </div>
                    </div>
                  </div>
                </div>





                
                <div className="catering-vendor-menu">
                  <div className="menu-cards">
                    <div className="menu-cards-header">
                      <div className="status-header">
                        <span className="button">Lunch</span>
                        <span className="button">status</span>
                      </div>
                      <div className="process">
                        <span className="button" onClick={this.handleClick}>process</span>
                      </div>
                    </div>
                    <div className="menu-card-items">
                      <div className="scrolling-wrapper">
                        <div className="card-items">Sample Data</div>
                        <div className="card-items">Sample Data</div>
                        <div className="card-items">Sample Data</div>
                        <div className="card-items">Sample Data</div>
                        <div className="card-items">Sample Data</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="catering-vendor-name">
                  <span className="days">Tuesday</span>
                </div>
                <div className="catering-vendor-menu">
                  <div className="menu-cards">
                    <div className="menu-cards-header">
                      <div className="status-header">
                        <span className="button">Breakfast</span>
                        <span className="button">status</span>
                      </div>
                      <div className="process">
                        <span className="button">process</span>
                      </div>
                    </div>
                    <div className="menu-card-items">
                      <div className="scrolling-wrapper">
                        <div className="card-items">
                          Main Course
                          <form action="#">
                            <p>
                              <input name="group1" type="radio" id="test1" />
                              <label htmlFor="test1">Sample data</label>
                            </p>
                            <p>
                              <input name="group1" type="radio" id="test2" />
                              <label htmlFor="test2">Sample data</label>
                            </p>
                            <p>
                              <input className="with-gap" name="group1" type="radio" id="test3" />
                              <label htmlFor="test3">Sample data</label>
                            </p>
                          </form>
                        </div>
                        <div className="card-items">Cereal
                        <form action="#">
                            <p>
                              <input name="group1" type="radio" id="test1" />
                              <label htmlFor="test1">Sample data</label>
                            </p>
                            <p>
                              <input name="group1" type="radio" id="test2" />
                              <label htmlFor="test2">Sample data</label>
                            </p>
                            <p>
                              <input className="with-gap" name="group1" type="radio" id="test3" />
                              <label htmlFor="test3">Sample data</label>
                            </p>
                          </form>
                        </div>
                        <div className="card-items">this is a test</div>
                        <div className="card-items">this is a test</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="catering-vendor-menu">
                  <div className="menu-cards">
                    <div className="menu-cards-header">
                      <div className="status-header">
                        <span className="button">Lauch</span>
                        <span className="button">status</span>
                      </div>
                      <div className="process">
                        <span className="button">process</span>
                      </div>
                    </div>
                    <div className="menu-card-items">
                      <div className="scrolling-wrapper">
                        <div className="card-items"> <form action="#">
                            <p>
                              <input name="group1" type="radio" id="test1" />
                              <label htmlFor="test1">Sample data</label>
                            </p>
                            <p>
                              <input name="group1" type="radio" id="test2" />
                              <label htmlFor="test2">Sample data</label>
                            </p>
                            <p>
                              <input className="with-gap" name="group1" type="radio" id="test3" />
                              <label htmlFor="test3">Sample data</label>
                            </p>
                          </form></div>
                        <div className="card-items"> <form action="#">
                            <p>
                              <input name="group1" type="radio" id="test1" />
                              <label htmlFor="test1">Sample data</label>
                            </p>
                            <p>
                              <input name="group1" type="radio" id="test2" />
                              <label htmlFor="test2">Sample data</label>
                            </p>
                            <p>
                              <input className="with-gap" name="group1" type="radio" id="test3" />
                              <label htmlFor="test3">Sample data</label>
                            </p>
                          </form></div>
                        <div className="card-items"> <form action="#">
                            <p>
                              <input name="group1" type="radio" id="test1" />
                              <label htmlFor="test1">Sample data</label>
                            </p>
                            <p>
                              <input name="group1" type="radio" id="test2" />
                              <label htmlFor="test2">Sample data</label>
                            </p>
                            <p>
                              <input className="with-gap" name="group1" type="radio" id="test3" />
                              <label htmlFor="test3">Sample data</label>
                            </p>
                          </form></div>
                        <div className="card-items">this is a test</div>
                        <div className="card-items">this is a test</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AndelaBoard;