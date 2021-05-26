import { useState } from 'react';

import { SelectedSet } from 'types';
import SetFilter from './SetFilter';
import SetsGrid from './SetsGrid';

const Sets = () => {
  const [selectedSet, setSelectedSet] = useState<SelectedSet>(null);

  const setSet = (set: SelectedSet) => {
    setSelectedSet(set);
  };

  return (
    <div>
      <div className="sticky top-0 bg-white py-3 px-4">
        <SetFilter setSet={setSet} />
      </div>
      <div className="px-4">
        <SetsGrid selectedSet={selectedSet} />
      </div>
    </div>
  );
};

export default Sets;
