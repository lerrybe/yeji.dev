import React from 'react';

import { CATEGORY_CLASS } from '@/styles/classStyle';
import { getAllContributions } from '@/service/contributions';
import ContributionCard from '@/components/ContributionCard';

export default async function ContributionsGrid() {
  const contributions = await getAllContributions();

  return (
    <>
      <h1
        className={CATEGORY_CLASS}
      >{`Contributions (${contributions?.length})`}</h1>
      <ul className="w-full grid gap-8 mt-12 mb-24 grid-cols-1">
        {contributions?.map(contribution => (
          <ContributionCard
            key={contribution.title}
            contribution={contribution}
          />
        ))}
      </ul>
    </>
  );
}
