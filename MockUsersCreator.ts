// import * as faker from "@faker-js/faker"; // faker library to generate random data
import { faker } from '@faker-js/faker';
// Defines user type influencer


interface SocialMedia{
  instagram: boolean;
  facebook: boolean;
  linkedin: boolean;
  pinterest: boolean;
  reddit: boolean;
  snapchat: boolean;
  tiktok: boolean;
  twitter: boolean;
  twitch: boolean;
  youtube: boolean;
  wechat: boolean;
  qq: boolean;
}

interface Food{
  meat: boolean;
  grill: boolean;
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

// create interface for User from type Influencer.
export interface UserInfluencer{
  name: string;
  State: string;
  Country: string;
  city: string;
  socialMedia: SocialMedia;
  age: number;
  sector: Sector;
  picture?: string;
  userType: 'influencer'; // Added userType for chat logic
}

// Business user interface
export interface BusinessUser {
  name: string;
  State: string;
  Country: string;
  city: string;
  companyName: string;
  industry: string;
  website?: string;
  contactEmail: string;
  phone?: string;
  description?: string;
  picture?: string;
  userType: 'business';
}

// create a random Influencer or Business User
export function generateRandomUser(userType: 'influencer' | 'business' = 'influencer'): UserInfluencer | BusinessUser {
  if (userType === 'business') {
    return {
      name: faker.person.fullName(),
      State: faker.location.state(),
      Country: faker.location.country(),
      city: faker.location.city(),
      companyName: faker.company.name(),
      industry: faker.company.buzzNoun(),
      website: faker.internet.url(),
      contactEmail: faker.internet.email(),
      phone: faker.phone.number(),
      description: faker.company.catchPhrase(),
      picture: faker.image.avatar(),
      userType: 'business',
    };
  }
  // influencer
  return {
    name: faker.person.fullName(),
    State: faker.location.state(),
    Country: faker.location.country(),
    city: faker.location.city(),
    socialMedia: {
      instagram: Math.random() > 0.5,
      facebook: Math.random() > 0.5,
      linkedin: Math.random() > 0.5,
      pinterest: Math.random() > 0.5,
      reddit: Math.random() > 0.5,
      snapchat: Math.random() > 0.5,
      tiktok: Math.random() > 0.5,
      twitter: Math.random() > 0.5,
      twitch: Math.random() > 0.5,
      youtube: Math.random() > 0.5,
      wechat: Math.random() > 0.5,
      qq: Math.random() > 0.5
    },
    age: Math.floor(Math.random() * (60 - 18) + 18),
    sector: {
      food: {
        meat: Math.random() > 0.5,
        grill: Math.random() > 0.5,
        vegan: Math.random() > 0.5,
        cooking: Math.random() > 0.5
      },
      sports: {
        football: Math.random() > 0.5,
        basketBall: Math.random() > 0.5,
        gym: Math.random() > 0.5,
        fitness: Math.random() > 0.5
      },
      fashion: {
        blogFashion: Math.random() > 0.5,
        model: Math.random() > 0.5
      }
    },
    picture: faker.image.avatar(),
    userType: 'influencer',
  };
}

export const users1: (UserInfluencer | BusinessUser)[] = []
for (let i = 0; i < 100; i++) {
    let userType: 'influencer' | 'business' = Math.random() > 0.5 ? 'influencer' : 'business';
    users1.push(generateRandomUser(userType))
}