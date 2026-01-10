import { Player, Team } from '../types/auction'

export const initialPlayers: Player[] = [
  { id: '1', name: 'Rohaan', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '2', name: 'Dhiru', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '3', name: 'Parth', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '4', name: 'Akshat', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '5', name: 'Devam', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '6', name: 'Rohit', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '7', name: 'Akkshit', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '8', name: 'Pratik', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '9', name: 'Deepak B', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '10', name: 'Hitesh', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '11', name: 'Franklin', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '12', name: 'Sunny', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '13', name: 'Chintan', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '14', name: 'Aryan', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '15', name: 'Ancel', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '16', name: 'Meet', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '17', name: 'Vicky', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '18', name: 'Arnish', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '19', name: 'Ashish', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '20', name: 'Bavish', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '21', name: 'Ansh', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '22', name: 'Umang', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '23', name: 'Prem', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '24', name: 'Kishan', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '25', name: 'Nitesh', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '26', name: 'Samir', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '27', name: 'Nikhil', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '28', name: 'Darshan', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '29', name: 'Vivek', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '30', name: 'Tamish', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '31', name: 'Ankit Kothari', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '32', name: 'Yash.K', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '33', name: 'Trushang', type: 'Bowling All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '34', name: 'Mitesh', type: 'Bowler', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '35', name: 'DK', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '36', name: 'Markand', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '37', name: 'Palash', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '38', name: 'Gautum', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '39', name: 'Mahesh', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '40', name: 'Shripal', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '41', name: 'Ronak', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '42', name: 'Kamal', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '43', name: 'Kaif', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '44', name: 'Dhaval (Papdi)', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '45', name: 'Hardik Sajnani', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '46', name: 'Raju', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '47', name: 'Vignesh', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '48', name: 'Sanket', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '49', name: 'Dilesh ', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '50', name: 'Tanmay', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },

  { id: '51', name: 'Aayush', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '52', name: 'Harsh', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '53', name: 'Mehul', type: 'All-rounder', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
  { id: '54', name: 'Nishit', type: 'Batter', basePrice: 20, currentBid: 20, image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', status: 'available' },
];




export const initialTeams: Team[] = [
  {
    id: '1',
    name: 'Team Parth',
    budget: 2000,
    playersBought: 0,
    players: []
  },
  {
    id: '2',
    name: 'Team Trushang',
    budget: 2000,
    playersBought: 0,
    players: []
  },
  {
    id: '3',
    name: 'Team Ankit',
    budget: 2000,
    playersBought: 0,
    players: []
  },
  {
    id: '4',
    name: 'Team Vivek',
    budget: 2000,
    playersBought: 0,
    players: []
  },
  {
    id: '5',
    name: 'Team Arnish',
    budget: 2000,
    playersBought: 0,
    players: []
  },
  {
    id: '6',
    name: 'Team Ashish',
    budget: 2000,
    playersBought: 0,
    players: []
  },
]

