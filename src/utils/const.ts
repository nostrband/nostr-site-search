import { Data } from '../types/types'

export const sampleData: Data = {
  authors: [
    { id: "1", name: 'Brian Cubellis', image: '', url: '/a1' },
    { id: "2", name: 'Marty Bent', image: '', url: '/a2' },
    { id: "3", name: 'Peruvian Bull', image: '', url: '/a3' },
  ],
  tags: [
    { id: "1", name: 'Bitcoin Mining', url: '/t1' },
    { id: "2", name: 'Bitcoin Basics', url: '/t2'  },
    { id: "3", name: 'Bitcoin', url: '/t3'  },
    { id: "4", name: 'banking crisis', url: '/t4'  },
    { id: "5", name: 'Monetary Base', url: '/t5'  },
    { id: "6", name: 'Central Banking', url: '/t6'  },
  ],
  posts: [
    {
      id: "1",
      title: 'BitMEX Pleads Guilty to Bank Secrecy Act Violation in AML Case',
      description: 'BitMEX pleads guilty to violating the Bank Secrecy Act...',
      url: '/p1'
    },
    {
      id: "2",
      title: "Bitfarms Appoints New CEO Amidst Riot's Intensifying Takeover Attempt",
      description: 'Bitfarms has appointed Ben Gagnon as CEO amidst a...',
      url: '/p2'
    },
    {
      id: "3",
      title: "3 Bitfarms Appoints New CEO Amidst Riot's Intensifying Takeover Attempt",
      description: 'Bitfarms has appointed Ben Gagnon as CEO amidst a...',
      url: '/p3'
    },
    {
      id: "4",
      title: "4 Bitfarms Appoints New CEO Amidst Riot's Intensifying Takeover Attempt",
      description: 'Bitfarms has appointed Ben Gagnon as CEO amidst a...',
      url: '/p4'
    },
    {
      id: "5",
      title: "5 Bitfarms Appoints New CEO Amidst Riot's Intensifying Takeover Attempt",
      description: 'Bitfarms has appointed Ben Gagnon as CEO amidst a...',
      url: '/p5'
    },
  ],
}
