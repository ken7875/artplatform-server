interface RankingData {
  id: number,
  img: string,
  title: string,
  auth: string,
  price: number
}

export const rankingData: RankingData[] = [
    {
      id: 1,
      img: 'art04',
      title: '散步遇到的女人',
      auth: 'Zeo Jiang',
      price: 300
    },
    {
      id: 2,
      img: 'art05',
      title: '爆炸頭的母親',
      auth: 'Yui',
      price: 300
    },
    {
      id: 3,
      img: 'art06',
      title: '夏天的時候',
      auth: 'Bug Lin',
      price: 300
    },
    {
      id: 4,
      img: 'art07',
      title: '爆炸頭的母親',
      auth: 'Yui',
      price: 300
    },
    {
      id: 5,
      img: 'art08',
      title: '爆炸頭的母親',
      auth: 'Yui',
      price: 300
    },
    {
      id: 6,
      img: 'art09',
      title: '爆炸頭的母親',
      auth: 'Yui',
      price: 300
    }
]
type NewestData = Omit<RankingData, 'auth'> & { description: string }

export const newestData: NewestData[] = [
  {
    id: 1,
    img: 'art09',
    title: '區塊戀-他的私生活',
    price: 300,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 2,
    img: 'art10',
    title: '夏娃的醜聞',
    price: 500,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 3,
    img: 'art02',
    title: '藍色啤酒海',
    price: 600,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 4,
    img: 'art11',
    title: '沒有人愛我',
    price: 800,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 5,
    img: 'art12',
    title: '不哭不哭眼淚是珍珠',
    price: 900,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 6,
    img: 'art13',
    title: '十分鐘就到',
    price: 1200,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 7,
    img: 'art04',
    title: '我這樣有美嗎',
    price: 500,
    description: '唯一想擁有的人，唯一不可以擁有的'
  },
  {
    id: 8,
    img: 'art03',
    title: '我真的受傷了',
    price: 700,
    description: '唯一想擁有的人，唯一不可以擁有的'
  }
]