import React from 'react'
import "./Body.css";
import TinderCard from 'react-tinder-card'

function Body(props) {

  const people=props.people;


    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div key={people}>
            {people.map((person,index) =>
                <TinderCard key={index} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('person.name')} preventSwipe={['up', 'down']}>
                    <div style={{ background: 'no-repeat center url(' + person.profile + ')', backgroundSize: "cover" }} className="photo">
                        <h2>{person.name}</h2>;

                    </div>


                </TinderCard>
            )}

        </div>
    )
}

export default Body
