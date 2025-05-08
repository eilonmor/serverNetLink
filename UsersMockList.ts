
const baseUrl = "http://localhost:3002/avatars/";
interface SocialMedia{
  instegram: boolean;
  facebook: boolean;
  linkedin: boolean;
  pinterest: boolean;
  reddit: boolean;
  snapchat: boolean;
  tiktok: boolean;
  twiter: boolean;
  twitch: boolean;
  youtube: boolean;
  wechat: boolean;
  qq: boolean;
}

interface Food{
  meat: boolean;
  gril: boolean;
  vegan: boolean;
  cooking: boolean;
}

interface Fashion{
  blogFashion: boolean;
  model: boolean;
}

interface Sports{
  football: boolean;
  basketBall: boolean;
  gym: boolean;
  fitness: boolean;
}

interface Sector{
  food: Food;
  sports: Sports;
  fashion: Fashion; 
}

// create interface for User from type Influncer.
export interface UserInfluncer{
  name: string;
  State: string;
  Country: string;
  city: string;
  socialMedia: SocialMedia;
  age: number;
  sector: Sector;
  picture?: string;
}
// try to create a static list and do a re render

export let listofUsers: UserInfluncer[] = [{
    name: 'Grant Waelchi',
    State: 'Arizona',
    Country: 'Iran',
    city: 'Fort Annie',
    socialMedia: {
      instegram: false,
      facebook: false,
      linkedin: true,
      pinterest: true,
      reddit: false,
      snapchat: true,
      tiktok: false,
      twiter: false,
      twitch: true,
      youtube: true,
      wechat: true,
      qq: true
    },
    age: 18,
    sector: { food: {meat: true, gril: true, vegan: false, cooking: false},
        sports: {football: true, basketBall: false, gym: true, fitness: false},
        fashion: {blogFashion: false, model: true} 
    },
    picture: baseUrl + 'image1.avif'
  },

{
    name: 'Michael Kautzer',
    State: 'New Hampshire',
    Country: 'Turkmenistan',
    city: 'Fort Stephanie',
    socialMedia: {
      instegram: true,
      facebook: true,
      linkedin: true,
      pinterest: false,
      reddit: false,
      snapchat: true,
      tiktok: false,
      twiter: true,
      twitch: true,
      youtube: true,
      wechat: false,
      qq: true
    },
    age: 26,
    sector: { food: {meat: false, gril: true, vegan: false, cooking: false},
    sports: {football: true, basketBall: false, gym: false, fitness: false},
    fashion: {blogFashion: false, model: false} 
},
picture: baseUrl + 'image2.avif'

  },
{
    name: 'Jacquelyn Mitchell',
    State: 'South Dakota',
    Country: 'Puerto Rico',
    city: 'Hackensack',
    socialMedia: {
      instegram: true,
      facebook: true,
      linkedin: false,
      pinterest: true,
      reddit: true,
      snapchat: false,
      tiktok: false,
      twiter: false,
      twitch: false,
      youtube: true,
      wechat: false,
      qq: true
    },
    age: 21,
    sector: { food: {meat: true, gril: true, vegan: false, cooking: true},
    sports: {football: true, basketBall: true, gym: true, fitness: false},
    fashion: {blogFashion: true, model: true} 
},
picture: baseUrl + 'image3.avif'

  },
{
    name: 'Robin Marks',
    State: 'Vermont',
    Country: "Cote d'Ivoire",
    city: 'Krajcikfurt',
    socialMedia: {
      instegram: true,
      facebook: false,
      linkedin: false,
      pinterest: false,
      reddit: true,
      snapchat: true,
      tiktok: true,
      twiter: true,
      twitch: true,
      youtube: false,
      wechat: true,
      qq: true
    },
    age: 43,
    sector: { food: {meat: true, gril: true, vegan: false, cooking: true},
    sports: {football: false, basketBall: true, gym: true, fitness: false},
    fashion: {blogFashion: true, model: false} 
},
picture: baseUrl + 'image4.avif'
  },
{
    name: 'Mitchell Smitham PhD',
    State: 'Idaho',
    Country: 'Venezuela',
    city: 'Milpitas',
    socialMedia: {
      instegram: false,
      facebook: false,
      linkedin: true,
      pinterest: false,
      reddit: false,
      snapchat: false,
      tiktok: false,
      twiter: true,
      twitch: true,
      youtube: false,
      wechat: false,
      qq: false
    },
    age: 50,
    sector: { food: {meat: false, gril: true, vegan: false, cooking: true},
    sports: {football: false, basketBall: true, gym: true, fitness: false},
    fashion: {blogFashion: false, model: true} 
},
picture: baseUrl + 'image5.avif'
  },
{
    name: 'Dorothy Doyle',
    State: 'South Carolina',
    Country: 'Yemen',
    city: 'Oshkosh',
    socialMedia: {
      instegram: true,
      facebook: true,
      linkedin: false,
      pinterest: false,
      reddit: false,
      snapchat: true,
      tiktok: true,
      twiter: true,
      twitch: true,
      youtube: true,
      wechat: false,
      qq: false
    },
    age: 54,
    sector: { food: {meat: true, gril: false, vegan: false, cooking: false},
    sports: {football: true, basketBall: true, gym: false, fitness: false},
    fashion: {blogFashion: true, model: false} 
},
picture: baseUrl + 'image6.avif'
  },
{
    name: 'Matthew Stiedemann',
    State: 'Oklahoma',
    Country: 'Cook Islands',
    city: 'South Maynardburgh',
    socialMedia: {
      instegram: true,
      facebook: false,
      linkedin: false,
      pinterest: false,
      reddit: false,
      snapchat: false,
      tiktok: true,
      twiter: true,
      twitch: false,
      youtube: true,
      wechat: true,
      qq: true
    },
    age: 52,
    sector: { food: {meat: true, gril: true, vegan: true, cooking: true},
    sports: {football: false, basketBall: false, gym: true, fitness: true},
    fashion: {blogFashion: false, model: true} 
},
picture: baseUrl + 'image7.avif'
  },
{
    name: 'Loren Beier',
    State: 'Ohio',
    Country: 'Haiti',
    city: 'Brendonburgh',
    socialMedia: {
      instegram: true,
      facebook: true,
      linkedin: false,
      pinterest: false,
      reddit: true,
      snapchat: false,
      tiktok: true,
      twiter: true,
      twitch: false,
      youtube: false,
      wechat: false,
      qq: false
    },
    age: 24,
    sector: { food: {meat: false, gril: false, vegan: false, cooking: true},
    sports: {football: true, basketBall: true, gym: true, fitness: true},
    fashion: {blogFashion: false, model: false} 
},
picture: baseUrl + 'image8.avif'
  },
{
    name: 'Miss Homer Crooks',
    State: 'Utah',
    Country: 'Egypt',
    city: 'East Lansing',
    socialMedia: {
      instegram: false,
      facebook: false,
      linkedin: true,
      pinterest: true,
      reddit: false,
      snapchat: true,
      tiktok: true,
      twiter: false,
      twitch: false,
      youtube: true,
      wechat: false,
      qq: false
    },
    age: 49,
    sector: { food: {meat: true, gril: true, vegan: false, cooking: true},
    sports: {football: true, basketBall: true, gym: true, fitness: false},
    fashion: {blogFashion: true, model: true} 
},
picture: baseUrl + 'image9.avif'
  },

{
    name: 'Leah Bayer',
    State: 'New Hampshire',
    Country: 'Cook Islands',
    city: 'Tobystad',
    socialMedia: {
      instegram: false,
      facebook: true,
      linkedin: false,
      pinterest: false,
      reddit: false,
      snapchat: false,
      tiktok: false,
      twiter: false,
      twitch: false,
      youtube: true,
      wechat: false,
      qq: false
    },
    age: 46,
    sector: { food: {meat: true, gril: true, vegan: false, cooking: true},
    sports: {football: true, basketBall: true, gym: true, fitness: false},
    fashion: {blogFashion: true, model: true} 
},
picture: baseUrl + 'image10.avif'
  },
{
    name: 'Dwayne Harber',
    State: 'Vermont',
    Country: 'Bolivia',
    city: 'Laurettastead',
    socialMedia: {
      instegram: false,
      facebook: false,
      linkedin: false,
      pinterest: false,
      reddit: true,
      snapchat: false,
      tiktok: false,
      twiter: false,
      twitch: false,
      youtube: false,
      wechat: false,
      qq: false
    },
    age: 59,
    sector: { food: {meat: true, gril: true, vegan: true, cooking: true},
    sports: {football: true, basketBall: false, gym: true, fitness: false},
    fashion: {blogFashion: true, model: true} 
},
picture: baseUrl + 'image11.avif'
  }]


//   export  let [listofUMocksers, setListofUMocksers] = useState(listofUsers)