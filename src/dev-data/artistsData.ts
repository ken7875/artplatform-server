interface StatisticsData {
  sailingNums: number,
  floorPrice: number,
  weekDeal: number,
  monthDeal: number
}

interface ArtistsData {
  name: string,
  img: string,
  id: string,
  social: string[],
  description: string,
  statisticsData: StatisticsData,
}

export const artistsData: ArtistsData[] = [
  {
    name: 'Michael',
    img: 'artists01',
    id: '0x3ya666dfsh7843453jkrfn88ef',
    social: ['twitter', 'internet', 'fb', 'betor'],
    description: 'Michael自小在山林長大，能夠與花草樹木大自然進行靈體溝通，創作題材常見大山、大水、花草與樹木，從日常生活出發，擁有個⼈獨樹⼀格的創作風格，作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。​',
    statisticsData: {
      sailingNums: 168,
      floorPrice: 0.6,
      weekDeal: 8.8,
      monthDeal: 23.1
    },
  },
  {
    name: 'Antony Wu',
    img: 'artists02',
    id: '0x3yrjcv32423ld343fjkrfn88ef',
    social: ['twitter', 'internet', 'fb', 'betor'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illo eum, aperiam tenetur, ut animi quisquam sunt delectus cumque illum perspiciatis in ab nesciunt eligendi ullam libero culpa excepturi quasi!',
    statisticsData: {
      sailingNums: 120,
      floorPrice: 0.3,
      weekDeal: 6.0,
      monthDeal: 22.5
    },
  },
  {
    name: 'Adam White',
    img: 'artists03',
    id: '0x3yaw4fwajcn49f3453jkrfn88ef',
    social: ['twitter', 'internet', 'fb'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita accusamus vel sequi, ea quaerat.​',
    statisticsData: {
      sailingNums: 190,
      floorPrice: 0.5,
      weekDeal: 8.0,
      monthDeal: 25
    },
  },
  {
    name: 'Linda Wu',
    img: 'artists04',
    id: '0x3ya666dfvkf589sd89fcrfn88ef',
    social: ['twitter', 'internet', 'betor'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa, tempore molestiae ipsam assumenda eius aut dolore vel necessitatibus explicabo quam vero eaque provident esse.',
    statisticsData: {
      sailingNums: 183,
      floorPrice: 0.7,
      weekDeal: 9.2,
      monthDeal: 25.5
    },
  },
  {
    name: 'JR Smith',
    img: 'artists05',
    id: '0x3yajfi58904fkxy3jkrfn88ef',
    social: ['internet', 'fb', 'betor'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae amet voluptatem consequatur nobis earum cum esse deleniti suscipit, laudantium recusandae cumque a saepe animi maiores, iste pariatur atque iusto. Dicta.',
    statisticsData: {
      sailingNums: 195,
      floorPrice: 0.3,
      weekDeal: 6.9,
      monthDeal: 24.2
    },
  }
]