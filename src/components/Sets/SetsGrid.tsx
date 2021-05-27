import { useEffect, useState } from 'react';

import SetCard from './SetCard';
import { useRequest } from 'hooks';
import { ISet, ISetCard } from 'types';

interface SetsGridProps {
  selectedSetName: ISet['name'];
}

const SetsGrid = ({ selectedSetName }: SetsGridProps) => {
  const [cards, setCards] = useState<ISetCard[]>([]);
  const { isLoading, doRequest } = useRequest();

  useEffect(() => {
    if (!selectedSetName) return;

    doRequest({
      method: 'get',
      url: `/cards?setName=${selectedSetName}`,
      onSuccess: ({ cards }) => setCards(cards),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSetName]);

  if (isLoading) {
    return <p>Fetching cards for {selectedSetName}</p>;
  }

  return (
    <div data-testid="test-set-grid">
      {cards.length === 0 ? (
        <div>
          <p>
            No information to display, please{' '}
            {selectedSetName
              ? 'select another set'
              : 'choose a set from the dropdown'}
            .
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <SetCard key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SetsGrid;
