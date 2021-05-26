import { useEffect, useState } from 'react';

import SetCard from './SetCard';
import { useRequest } from 'hooks';
import { ISetCard, SelectedSet } from 'types';

interface SetsGridProps {
  selectedSet: SelectedSet;
}

const SetsGrid = ({ selectedSet }: SetsGridProps) => {
  const [cards, setCards] = useState<ISetCard[]>([]);
  const { isLoading, doRequest } = useRequest();

  useEffect(() => {
    if (!selectedSet) return;

    doRequest({
      method: 'get',
      url: `/cards?setName=${selectedSet.name}`,
      onSuccess: ({ cards }) => setCards(cards),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSet]);

  if (isLoading) {
    return <p>Fetching cards for {selectedSet?.name}</p>;
  }

  return (
    <div data-testid="test-set-grid">
      {cards.length === 0 ? (
        <div>
          <p>
            No information to display, please{' '}
            {selectedSet
              ? 'select another set'
              : 'choose a set from the dropdown'}
            .
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <SetCard key={card.id} {...card} selectedSet={selectedSet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SetsGrid;
