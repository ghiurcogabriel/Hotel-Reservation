import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../Components/Hero';
// import Banner from '../Components/Banner';
// import {Link} from 'react-router-dom';
import {RoomContext} from '../Context'; 

class SingleRooms extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.slug);
    this.state = {
      slug: this.props.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

    render() {
      const {getRoom} = this.context;
      const room = getRoom(this.state.slug);
      console.log(room);  
      if(!room){
        return <div className="error">
          <h3>No such room could be found</h3>
        </div>
      }
        return (
      <div>SingleRooms{room.name}</div>
    )
  }
}

export default SingleRooms;