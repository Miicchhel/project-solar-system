import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    // console.log(planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container-planetas">
          {
            planets.map((planet) => (
              <PlanetCard
                planetImage={ planet.image }
                planetName={ planet.name }
                key={ planet.name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
