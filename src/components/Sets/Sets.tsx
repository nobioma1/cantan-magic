import { useState } from 'react';

import { ISet } from 'types';
import SetFilter from './SetFilter';
import SetsGrid from './SetsGrid';

const Sets = () => {
  const [selectedSetName, setSelectedSetName] = useState<ISet['name']>('');

  return (
    <div>
      <div className="sticky top-0 bg-white py-3 px-4">
        <SetFilter setSet={setSelectedSetName} />
      </div>
      <div className="px-4">
        <SetsGrid selectedSetName={selectedSetName} />
      </div>
    </div>
  );
};

export default Sets;
