import React from 'react'

const Items = ({ id, menu }) => {
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
};

export default Items;