// 2022 Series 1 Assets
import S1_22_1A from '../assets/cards/series-one-2022/S1_22_1A.jpg'
import S1_22_1B from '../assets/cards/series-one-2022/S1_22_1B.jpg'
import S1_22_2A from '../assets/cards/series-one-2022/S1_22_2A.jpg'
import S1_22_2B from '../assets/cards/series-one-2022/S1_22_2B.jpg'
import S1_22_3A from '../assets/cards/series-one-2022/S1_22_3A.jpg'
import S1_22_3B from '../assets/cards/series-one-2022/S1_22_3B.jpg'
import S1_22_4A from '../assets/cards/series-one-2022/S1_22_4A.jpg'
import S1_22_4B from '../assets/cards/series-one-2022/S1_22_4B.jpg'
import S1_22_5A from '../assets/cards/series-one-2022/S1_22_5A.jpg'
import S1_22_5B from '../assets/cards/series-one-2022/S1_22_5B.jpg'
import S1_22_6A from '../assets/cards/series-one-2022/S1_22_6A.jpg'
import S1_22_6B from '../assets/cards/series-one-2022/S1_22_6B.jpg'
import S1_22_7A from '../assets/cards/series-one-2022/S1_22_7A.jpg'
import S1_22_7B from '../assets/cards/series-one-2022/S1_22_7B.jpg'
import S1_22_8A from '../assets/cards/series-one-2022/S1_22_8A.jpg'
import S1_22_8B from '../assets/cards/series-one-2022/S1_22_8B.jpg'
import S1_22_9A from '../assets/cards/series-one-2022/S1_22_9A.jpg'
import S1_22_9B from '../assets/cards/series-one-2022/S1_22_9B.jpg'
import S1_22_10A from '../assets/cards/series-one-2022/S1_22_10A.jpg'
import S1_22_10B from '../assets/cards/series-one-2022/S1_22_10B.jpg'
import S1_22_11A from '../assets/cards/series-one-2022/S1_22_11A.jpg'
import S1_22_11B from '../assets/cards/series-one-2022/S1_22_11B.jpg'
import S1_22_12A from '../assets/cards/series-one-2022/S1_22_12A.jpg'
import S1_22_12B from '../assets/cards/series-one-2022/S1_22_12B.jpg'

// 2022 Series 2 Assets
// import S2_22_1A from '../assets/cards/series-two-2022/S2_22_331A.jpg'
// import S2_22_1B from '../assets/cards/series-two-2022/S2_22_331B.jpg'
// import S2_22_2A from '../assets/cards/series-two-2022/S2_22_332A.jpg'
// import S2_22_2B from '../assets/cards/series-two-2022/S2_22_332B.jpg'
// import S2_22_3A from '../assets/cards/series-two-2022/S2_22_333A.jpg'
// import S2_22_3B from '../assets/cards/series-two-2022/S2_22_333B.jpg'
// import S2_22_4A from '../assets/cards/series-two-2022/S2_22_334A.jpg'
// import S2_22_4B from '../assets/cards/series-two-2022/S2_22_334B.jpg'
// import S2_22_5A from '../assets/cards/series-two-2022/S2_22_335A.jpg'
// import S2_22_5B from '../assets/cards/series-two-2022/S2_22_335B.jpg'
// import S2_22_6A from '../assets/cards/series-two-2022/S2_22_336A.jpg'
// import S2_22_6B from '../assets/cards/series-two-2022/S2_22_336B.jpg'
// import S2_22_7A from '../assets/cards/series-two-2022/S2_22_337A.jpg'
// import S2_22_7B from '../assets/cards/series-two-2022/S2_22_337B.jpg'
// import S2_22_8A from '../assets/cards/series-two-2022/S2_22_338A.jpg'
// import S2_22_8B from '../assets/cards/series-two-2022/S2_22_338B.jpg'
// import S2_22_9A from '../assets/cards/series-two-2022/S2_22_339A.jpg'
// import S2_22_9B from '../assets/cards/series-two-2022/S2_22_339B.jpg'
// import S2_22_10A from '../assets/cards/series-two-2022/S2_22_340A.jpg'
// import S2_22_10B from '../assets/cards/series-two-2022/S2_22_340B.jpg'
// import S2_22_11A from '../assets/cards/series-two-2022/S2_22_341A.jpg'
// import S2_22_11B from '../assets/cards/series-two-2022/S2_22_341B.jpg'
// import S2_22_12A from '../assets/cards/series-two-2022/S2_22_342A.jpg'
// import S2_22_12B from '../assets/cards/series-two-2022/S2_22_342B.jpg'


const TEAMS = [
    'Angels',
    'Astros',
    'Athletics',
    'Blue Jays',
    'Braves',
    'Brewers',
    'Cardinals',
    'Cubs',
    'Diamondbacks',
    'Dodgers',
    'Giants',
    'Guardians',
    'Mariners',
    'Marlins',
    'Mets',
    'Nationals',
    'Orioles',
    'Padres',
    'Phillies',
    'Pirates',
    'Rangers',
    'Rays',
    'Red Sox',
    'Reds',
    'Rockies',
    'Royals',
    'Tigers',
    'Twins',
    'White Sox',
    'Yankees'
]

export const CARDS_DATA = [
    {
        name: 'Shohei Ohtani',
        cardNumber: 1,
        positions: ['DH', 'P'],
        team: TEAMS[0],
        attributes: [],
        imgFront: S1_22_1A,
        imgBack: S1_22_1B
    },
    {
        name: 'Craig Kimbrel',
        cardNumber: 2,
        positions: ['P'],
        team: TEAMS[28],
        attributes: [],
        imgFront: S1_22_2A,
        imgBack: S1_22_2B
    },
    {
        name: 'Huascar Ynoa',
        cardNumber: 3,
        positions: ['P'],
        team: TEAMS[4],
        attributes: [],
        imgFront: S1_22_3A,
        imgBack: S1_22_3B
    },
    {
        name: "Travis d'Arnaud",
        cardNumber: 4,
        positions: ['C'],
        team: TEAMS[4],
        attributes: [],
        imgFront: S1_22_4A,
        imgBack: S1_22_4B
    },
    {
        name: 'Rougned Odor',
        cardNumber: 5,
        positions: ['2B'],
        team: TEAMS[29],
        attributes: [],
        imgFront: S1_22_5A,
        imgBack: S1_22_5B
    },
    {
        name: 'Jazz Chisholm Jr.',
        cardNumber: 6,
        positions: ['SS', '2B'],
        team: TEAMS[13],
        attributes: ['Future Stars'],
        imgFront: S1_22_6A,
        imgBack: S1_22_6B
    },
    {
        name: 'Bobby Dalbec',
        cardNumber: 7,
        positiions: ['1B'],
        team: TEAMS[22],
        attributes: ['Future Stars'],
        imgFront: S1_22_7A,
        imgBack: S1_22_7B
    },
    {
        name: 'Xander Bogaerts',
        cardNumber: 8,
        positions: ['SS'],
        team: TEAMS[22],
        attributes: [],
        imgFront: S1_22_8A,
        imgBack: S1_22_8B
    },
    {
        name: 'Elieser Hernandez',
        cardNumber: 9,
        positions: ['P'],
        team: TEAMS[13],
        attributes: [],
        imgFront: S1_22_9A,
        imgBack: S1_22_9B
    },
    {
        name: 'Archie Bradley',
        cardNumber: 10,
        positions: ['P'],
        team: TEAMS[18],
        attributes: [],
        imgFront: S1_22_10A,
        imgBack: S1_22_10B
    },
    {
        name: 'Jesus Luzardo',
        cardNumber: 11,
        positions: ['P'],
        team: TEAMS[13],
        attributes: [],
        imgFront: S1_22_11A,
        imgBack: S1_22_11B
    },
    {
        name: 'Gavin Sheets',
        cardNumber: 12,
        positions: ['OF', 'DH'],
        team: TEAMS[28],
        attributes: ['Rookie Card'],
        imgFront: S1_22_12A,
        imgBack: S1_22_12B
    }
]