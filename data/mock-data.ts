import { Player, Team } from '../types/auction'

export const initialPlayers: Player[] = [
  { id: '1', name: 'Parth', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '2', name: 'Dhiru', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '3', name: 'Akshat', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '4', name: 'Rohaan', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '5', name: 'Devam', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '6', name: 'Raj', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '7', name: 'Vicky', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '8', name: 'Nishit', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '9', name: 'Hitesh', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '10', name: 'Chintan', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '11', name: 'Sunny', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '12', name: 'Ashish', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '13', name: 'Prem', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '14', name: 'Arnish', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '15', name: 'Aman', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '16', name: 'Sahil', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '17', name: 'Franklin', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '18', name: 'Yash.K', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '19', name: 'Ancel', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '20', name: 'Nikhil', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '21', name: 'Bhavin Satra', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '22', name: 'Bavish', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '23', name: 'Trushang', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '24', name: 'Mitesh', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '25', name: 'Palaash ', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '26', name: 'Mitul', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '27', name: 'Rohit', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '28', name: 'Umang', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '29', name: 'Ritesh', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '30', name: 'Rahul', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '31', name: 'NANI', type: 'Keeper Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '32', name: 'Kishan', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '33', name: 'Nipurn', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  ];



export const initialTeams: Team[] = [
  {
    id: '1',
    name: 'Team Parth',
    budget: 1600,
    playersBought: 0,
    players: []
  },
  {
    id: '2',
    name: 'Team Trushang',
    budget: 1600,
    playersBought: 0,
    players: []
  },
  {
    id: '3',
    name: 'Team Aman',
    budget: 1600,
    playersBought: 0,
    players: []
  },
  {
    id: '4',
    name: 'Team Mehul',
    budget: 1600,
    playersBought: 0,
    players: []
  },
  {
    id: '5',
    name: 'Team Arnish',
    budget: 1600,
    playersBought: 0,
    players: []
  }
]

