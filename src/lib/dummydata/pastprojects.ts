import { Project_Data } from '../definitions';

export function fetchPastProjects(): Project_Data[] {
  return [
    {
      id: 1,
      title: 'Project 1',
      coverImage: '/assets/images/placeholder_2000x1000.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.',
      startDate: new Date('1-1-2000'),
      endDate: new Date('6-1-2000'),
      slug: '/#',
      skills: ['A', 'B', 'C'],
      screenshots: ['url1', 'url2', 'url3'],
      client: {
        name: 'Client A',
        url: 'https://example.com',
        location: 'Any Town, USA',
      },
      isFeature: true,
      isActive: true,
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.',
      coverImage: '/assets/images/placeholder_2000x1000.png',
      startDate: new Date('7-1-2000'),
      endDate: new Date('12-1-2000'),
      slug: '/#',
      skills: ['A', 'B', 'C'],
      screenshots: ['url1', 'url2', 'url3'],
      client: {
        name: 'Client B',
        url: 'https://example.com',
        location: 'Any Town, USA',
      },
      isFeature: false,
      isActive: true,
    },
  ];
}
