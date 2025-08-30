import { Project_Data } from '../definitions';

export function fetchPastProjects(): Project_Data[] {
  return [
    {
      id: 1,
      title: 'Project 1',
      coverImage: '/assets/blog/dynamic-routing/cover.jpg',
      descripton: '',
      startDate: new Date('1-1-2000'),
      endDate: new Date('6-1-2000'),

      skills: ['A', 'B', 'C'],
      screenshots: ['url1', 'url2', 'url3'],
      client: {
        name: 'Client A',
        url: 'xxx',
        location: 'xxx',
      },
    },
    {
      id: 2,
      title: 'Project 2',
      descripton: '',
      coverImage: '/assets/blog/hello-world/cover.jpg',
      startDate: new Date('7-1-2000'),
      endDate: new Date('12-1-2000'),

      skills: ['A', 'B', 'C'],
      screenshots: ['url1', 'url2', 'url3'],
      client: {
        name: 'Client B',
        url: 'xxx',
        location: 'xxx',
      },
    },
  ];
}
