import { Data } from '../types/types'

export const data: Data = {
  authors: [
    { id: 1, name: 'Brian Cubellis' },
    { id: 2, name: 'Marty Bent' },
    { id: 3, name: 'Peruvian Bull' },
  ],
  tags: [
    { id: 1, name: 'Bitcoin Mining' },
    { id: 2, name: 'Bitcoin Basics' },
    { id: 3, name: 'Bitcoin' },
    { id: 4, name: 'banking crisis' },
    { id: 5, name: 'Monetary Base' },
    { id: 6, name: 'Central Banking' },
  ],
  posts: [
    {
      id: 1,
      title: 'BitMEX Pleads Guilty to Bank Secrecy Act Violation in AML Case',
      description: 'BitMEX pleads guilty to violating the Bank Secrecy Act...',
    },
    {
      id: 2,
      title: "Bitfarms Appoints New CEO Amidst Riot's Intensifying Takeover Attempt",
      description: 'Bitfarms has appointed Ben Gagnon as CEO amidst a...',
    },
  ],
}
