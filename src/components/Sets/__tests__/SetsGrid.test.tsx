import { render, screen, waitFor } from '@testing-library/react';
import fetch from 'jest-fetch-mock';

import SetsGrid from '../SetsGrid';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Sets Grid Component', () => {
  test('renders empty initial sets grid component', () => {
    render(<SetsGrid selectedSetName={''} />);

    const textEl = screen.getByText(
      /No information to display, please choose a set from the dropdown./i
    );
    expect(textEl).toBeInTheDocument();
  });

  test('updates feedback text if selected set but no card to display', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        cards: [],
      })
    );

    const { getByText } = await waitFor(() =>
      render(<SetsGrid selectedSetName="Unlimited Edition" />)
    );

    const textEl = getByText(
      /No information to display, please select another set./i
    );
    expect(textEl).toBeInTheDocument();
  });

  test('renders all fetched cards', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        cards: [
          {
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
            legalities: [],
            id: 'c206ab94-4325-5766-91d6-62b8f50aeac8',
            imageUrl:
              'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card',
          },
          {
            name: 'Cloud Elemental',
            manaCost: '{2}{U}',
            cmc: 3.0,
            colors: ['Blue'],
            colorIdentity: ['U'],
            type: 'Creature — Elemental',
            types: ['Creature'],
            subtypes: ['Elemental'],
            rarity: 'Common',
            set: '10E',
            setName: 'Tenth Edition',
            text: 'Flying\nCloud Elemental can block only creatures with flying.',
            artist: 'Michael Sutfin',
            number: '74',
            power: '2',
            toughness: '3',
            layout: 'normal',
            imageUrl:
              'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129804&type=card',
            foreignNames: [],
            printings: ['10E', 'BTD', 'M11', 'MB1', 'MM2', 'VIS', 'WC97'],
            originalText:
              "Flying (This creature can't be blocked except by creatures with flying or reach.)\nCloud Elemental can block only creatures with flying.",
            originalType: 'Creature - Elemental',
            id: '596a7bd4-895b-5e7c-8124-373fd709444d',
          },
        ],
      })
    );

    const { getAllByTestId } = await waitFor(() =>
      render(<SetsGrid selectedSetName="Unlimited Edition II" />)
    );

    expect(getAllByTestId('test-set-card')).toHaveLength(2);
  });
});
