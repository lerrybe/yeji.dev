import path from 'path';
import { cache } from 'react';
import { readFile } from 'fs/promises';

export type Contribution = {
  title: string;
  date: string;
  description: string;
  recordUrls: string[];
  githubUrls: string[];
};

export const getAllContributions = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'contributions.json');
  return readFile(filePath, 'utf-8').then<Contribution[]>(JSON.parse);
});
