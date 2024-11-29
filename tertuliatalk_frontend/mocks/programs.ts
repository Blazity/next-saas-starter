export type Program = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  link: string;
  isCommunity: boolean;
  isActive: boolean /* -> this prop is used to show the active programs 
                              if we create cron jobs that run every hour in the backend, we can handle this.
                          */;
};

export const communityPrograms: Program[] = [
  {
    id: '28.1',
    title: 'Community Program1',
    description: 'First Community Program',
    date: '2024-07-12',
    time: '15:00',
    duration: '1 hour',
    location: 'Zoom',
    link: 'https://zoom.us/1234',
    isCommunity: true,
    isActive: false,
  },
  {
    id: '28.2',
    title: 'Community Program2',
    description: 'Second Community Program',
    date: '2024-07-30',
    time: '16:00',
    duration: '1 hour',
    location: 'Zoom',
    link: 'https://zoom.us/1234',
    isCommunity: true,
    isActive: true,
  },
  {
    id: '28.3',
    title: 'Community Program3',
    description: 'Third Community Program',
    date: '2024-07-27',
    time: '16:00',
    duration: '1 hour',
    location: 'Zoom',
    link: 'https://zoom.us/1234',
    isCommunity: true,
    isActive: true,
  },
];

export var nativePrograms: Program[] = [];
