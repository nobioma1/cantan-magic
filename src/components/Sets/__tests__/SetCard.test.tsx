import { render, screen } from '@testing-library/react';

import SetCard from '../SetCard';

describe('Set Card Component', () => {
  const props = {
    name: 'Ascendant Evincar',
    manaCost: '{4}{B}{B}',
    cmc: 6.0,
    colors: ['Black'],
    colorIdentity: ['B'],
    type: 'Legendary Creature — Vampire Noble',
    supertypes: ['Legendary'],
    types: ['Creature'],
    rarity: 'Rare',
    set: '10E',
    setName: 'Tenth Edition',
    text: "Flying (This creature can't be blocked except by creatures with flying or reach.)\nOther black creatures get +1/+1.\nNonblack creatures get -1/-1.",
    artist: 'Mark Zug',
    number: '127★',
    power: '3',
    toughness: '3',
    layout: 'normal',
    printings: [],
    id: 'c206ab94-4325-5766-91d6-62b8f50aeac8',
    imageUrl:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card',
    releaseDate: '1993-12-01',
  };

  test('renders card content appropriately', () => {
    render(<SetCard {...props} />);
    const imageElement = document.querySelector('img') as HTMLImageElement;
    expect(imageElement.src).toEqual(props.imageUrl);
    expect(
      screen.getByText(`${props.setName} - ${props.name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(/release date: 1993-12-01/i)).toBeInTheDocument();
    expect(screen.getByText(/rarity: rare/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Type: Legendary Creature — Vampire Noble/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(props.name)).toBeInTheDocument();
  });
});
