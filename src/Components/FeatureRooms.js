import React, { Component } from 'react';
import {RoomContext} from '../../src/Context';
import Loading from './Loading';
import Room  from './Room';
import Title from './Title';

class FeatureRooms extends Component {
    static contextType = RoomContext;

    render() {
        let {loading, featuredRooms: rooms} = this.context;
        console.log(rooms);

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        })

         return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
                </div>
            </section>
        );
    };
}

export default FeatureRooms;
