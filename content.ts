const content: Content = {
  areas: [
    {
      name: "Prescott",
      highlights: [
        {
          title: "Superstition Meadery",
          description:
            "Superstition Meadery is one of the can't-miss places in Prescott. Serving up impressive flights of some of the finest mead around, this is a true Prescott icon.",
          photo: "https://i.redd.it/r4x1zcd92wq11.jpg",
        },
        {
          title: "Whiskey Row",
          description:
            "Situated right in the center of town, Whiskey Row is Prescott's hub for shops, bars, and nightlife. From breweries, to country dancing, and even an arcade, there is plenty to keep us entertained along Whiskey Row. Who knows, maybe we'll even have to pick you up a pair of cowboy boots ;)",
          photo:
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/43/d2/2f/famous-whiskey-row-in.jpg",
        },
        {
          title: "Goldwater Lakes #396",
          description:
            "This is one of my favorite hikes in the state. It has a great mix of varied scenery, is a good workout, and stays pretty cool in the afternoon.",
          photo: "/images/goldwater-lakes-396.jpeg",
          link: {
            url: "https://hikearizona.com/decoder.php?ZTN=3157",
            text: "Learn more about the Goldwater Lake trail on HikeArizona",
          },
        },
      ],
    },
    {
      name: "Mogollon Rim",
      highlights: [
        {
          title: "FR 139C Campsite",
          description:
            "I've been going to this campsite for years and I consider it to be one of the most beautiful and secluded spots in the forest. The campsite is close to the Barbershop Trail (listed below) and is surrounded on three sides by a ravine that is fun to explore.",
          photo: "../images/139c-campsite.jpeg",
        },
        {
          title: "Rim Overlook",
          description:
            "The road to the campsite travels along what's known as the Mogollon Rim - ie. the edge of the Colorado Plateau. This is the line that seperates the high desert from the lower elevations and is a beautiful overlook.",
          photo: "/images/rim.jpeg",
        },
        {
          title: "Barbershop Trail #91",
          description:
            "One of my favorite trails in the state (even more than Goldwater Lakes), this is an indescribably beautiful, though quite strenuous, trail. (This is the one I showed you photos of on our video chat)",
          photo: "../images/barbershop-trail-91.jpeg",
          link: {
            url: "https://hikearizona.com/decoder.php?ZTN=427",
            text: "Learn more about the Barbershop Trail on HikeArizona",
          },
        },
      ],
    },
    {
      name: "Superstitions",
      highlights: [
        {
          title: "Rugged geology & buried treasure",
          description:
            "The Superstitions (and the surrounding Tonto National Forest) are some of the most rugged mountains in the United States. While only a little ways out of Phoenix, the Superstitions are wild and untamed. Featuring fastinating geology, flora, and fauna, they are a must-see area of the state. There's supposedly even buried treasure in these mountains!",
          photo:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.website-files.com%2F5d02d5a9b9a7fd0986b99d24%2F5d85071e7d2f801710ecb2da_482019175826812_Tonto-Ntl-Forest-1400px.jpg&f=1&nofb=1",
        },
        {
          title: "Canyon Lake",
          description:
            "One of the four major resevoirs used for bringing water to Phoenix and the surrounding valley, Canyon Lake is a stunning lake with opportunities for wildlife watching, swimming, and kayaking.",
          photo:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-fxD3nDFMCHs%2FTc-kyPn1cXI%2FAAAAAAAAArY%2F18UP4y-L2uQ%2Fw1200-h630-p-k-no-nu%2FIMG_2052%2B%2525281%252529.jpg&f=1&nofb=1",
        },
        {
          title: "Salt River Tubing",
          description:
            "Fun for everyone from the college crowd to families, tubing on the Salt River is a rite of passage for any Arizonian trying to beat the harsh summer heat. It's basically a big party: floating, drinking, and the occasional dip in the water to go swimming.",
          photo:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allaboutarizonanews.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fsaltrivertubing-1080x608.jpg&f=1&nofb=1",
          link: {
            text: "Check out the Salt River Tubing website",
            url: "https://www.saltrivertubing.com/",
          },
        },
        {
          title: "Devil's Canyon Hike",
          description:
            "This is a stunning hike that may not be around for much longer. Due to recent land transfers and mining approvals, the Resolution Copper Mine will soon start mining in the area. This is an amazing adventure (one I haven't done before) and includes hiking, swimming, cliff jumping, and/or rappelling.",
          photo:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.toddshikingguide.com%2FHikes%2FArizona%2FMisc%2Fmisc17c.jpg&f=1&nofb=1",
          link: {
            text: "See all the details on HikeArizona",
            url: "https://hikearizona.com/decoder.php?ZTN=37",
          },
        },
      ],
    },
  ],
  options: [
    {
      title: "Exploring and relaxing",
      overview:
        "A relaxing weekend with a night of camping up in the cool pines of the Mogollan Rim, along with a short day trip to Prescott and a fun night out in Phoenix.",
      days: [
        {
          day: "Thursday",
          activities: [
            {
              type: "downTime",
              title: "Relax and have breakfast",
              description:
                "We can take it easy and make breakfast at the house in the morning. If there's time, we can either stop for a beer before heading to Prescott or grab a breakfast burrito at one of the best Mexican restaurants in town!",
            },
            {
              type: "driveTime", // driveTime or activity
              duration: 110, // if driveTime
              title: "Drive to Prescott",
            },
            {
              type: "groupedActivities",
              title: "Recreation in Prescott",
              duration: 360,
              description:
                "We have time to go kayaking or hiking and can play it by ear based on how we're feeling and whether we plan to hike while camping.",
              activities: [
                {
                  type: "activity",
                  title: "Hike | Goldwater Lakes #396",
                  icon: "hiking",
                  description:
                    "This is one of my favorite hikes in the state. It has a great mix of varied scenery, is a good workout, and stays pretty cool in the afternoon.",
                },
                {
                  type: "activity",
                  title: "Kayaking on Goldwater Lake",
                  icon: "outdoorActivity",
                  description:
                    "This is a small, but beautiful lake, perfect for spending a few hours hanging out on the water.",
                },
              ],
            },
            {
              type: "activity",
              title: "Dinner in Prescott",
              icon: "food",
              description:
                "There are a ton of great options for dinner in Prescott, whether we want burgers or some bomb Italian food!",
            },
            {
              type: "driveTime",
              title: "Head back to Phoenix",
              duration: 110,
            },
            {
              type: "downTime",
              title: "Pack for camping and relax at the house",
            },
          ],
        },
        {
          day: "Friday",
          activities: [
            {
              type: "driveTime",
              title: "Drive to campsite",
              description:
                "Though this is a long drive, only the first two hours are on the highway. The last 90 minutes are on forest roads and are a bit more scenic and exciting.",
              duration: 210,
            },
            {
              type: "activity",
              title: "Camping",
              duration: 360,
              icon: "tent",
              description:
                "Spend the day at the campsite. We can relax in the hammock, play games, and take it easy. Unfortunately, fire restrictions are in place, so we won't be able to have a fire while cooking or hanging out.",
            },
            {
              type: "activity",
              title: "Hike | Barbershop Trail #91",
              duration: 180,
              icon: "hiking",
              description:
                "One of my favorite trails in the state (even more than Goldwater Lakes), this is an indescribably beautiful, though extremely strenuous, trail. (This is the one I showed you photos of on our video chat)",
            },
            {
              type: "downTime",
              duration: 180,
              title: "Relax at campsite for the evening",
            },
          ],
        },
        {
          day: "Saturday",
          activities: [
            {
              type: "downTime",
              title: "Hang out at the campsite",
              description: "Breakfast beers & chill?",
              duration: 180,
            },
            {
              type: "activity",
              icon: "outdoorActivity",
              title: "Pack up camp",
            },
            {
              type: "driveTime",
              duration: 210,
              title: "Drive back to Phoenix",
            },
            {
              type: "activity",
              title: "Dinner and a night out",
              icon: "food",
              description:
                "I have a nice dinner and a fun outdoor activity planned for the evening. Don't ask for too many details though, it's a surprise :)",
              surprise: true,
            },
            {
              type: "downTime",
              title: "Relax and pack",
              description:
                "We'll wrap up our evening around 9, so we can either relax back at the house or head to a bar in the area.",
            },
          ],
        },
      ],
    },
    {
      title: "The best of Arizona",
      overview:
        "A weekend exploring the best that AZ has to offer. We'll center the weekend around a trip to historic Prescott, AZ: starting with a hike in the pines, followed by evening of dancing and drinking. That night, we'll stay at a boutique hotel right in the heart of the town. Bookending this overnight trip will be an epic adventure in the Superstitions and a romantic evening in Phoenix, along with some flexibility to relax and take it easy at the house.",
      days: [
        {
          day: "Thursday",
          activities: [
            {
              type: "activity",
              title: "Breakfast and get on the road",
              icon: "food",
              description:
                "We'll want to get out to the Superstitions before noon so we can get to the water before the worst of the heat sets in. Ideally, we should be on the road by 10am. We can cook a quick breakfast at the house or stop on the way.",
            },
            {
              type: "driveTime",
              title: "Drive out to the Superstitions",
              duration: 70,
            },
            {
              type: "groupedActivities",
              title: "Go on an epic adventure in the Superstitions",
              description:
                "We have a few options to choose from for the day. All of these are in the rugged and beautiful Tonto National Forest.",
              activities: [
                {
                  type: "activity",
                  title: "Kayaking on Canyon Lake",
                  description:
                    "Take in the surrounding desert cliffs while floating on Canyon Lake, one of several resevoirs on the Salt River.",
                  icon: "outdoorActivity",
                },
                {
                  type: "activity",
                  title: "Hike Devil's Canyon",
                  description:
                    "Go on an epic hike with rappelling, swimming, and cliff-jumping in an area that may soon be lost to the Resolution Copper Mine.",
                  icon: "outdoorActivity",
                },
                {
                  type: "activity",
                  title: "Float on the Salt River",
                  description:
                    "Take it easy and relax while floating down the Salt River with a drink in hand.",
                  icon: "outdoorActivity",
                },
              ],
            },
            {
              type: "driveTime",
              title: "Drive back to Tempe",
              duration: 70,
            },
            {
              type: "activity",
              title: "Burger and a flight at Wilderness Brewery",
              icon: "food",
              description:
                "Some of the best beer and burgers in the Valley, this place has some whopping burgers to recharge after our hike and some uniquely-Arizonian beers.",
            },
            {
              type: "downTime",
              title: "Relax or go bar-hopping",
              description:
                "We may be exhasted after a long day in the sun, so we can head back to the house to relax. If we're up for it, this would be a great night to head to the piano bar up the street though!",
            },
          ],
        },
        {
          day: "Friday",
          activities: [
            {
              type: "downTime",
              title: "Relax and have breakfast",
              description:
                "We can take it easy and make breakfast at the house in the morning. We could also grab a burrito for a late breakfast or early lunch at one of the best Mexican restaurants in town!",
            },
            {
              type: "driveTime", // driveTime or activity
              duration: 110, // if driveTime
              title: "Drive to Prescott",
            },
            {
              type: "groupedActivities",
              title: "Recreation in Prescott",
              description:
                "We have time to go kayaking or hiking and can play it by ear based on how we're feeling after the previous day's hike.",
              activities: [
                {
                  type: "activity",
                  title: "Hike | Goldwater Lakes #396",
                  icon: "outdoorActivity",
                  description:
                    "This is one of my favorite hikes in the state. It has a great mix of varied scenery, is a good workout, and stays pretty cool in the afternoon.",
                },
                {
                  type: "activity",
                  title: "Kayaking on Goldwater Lake",
                  icon: "outdoorActivity",
                  description:
                    "This is a small, but beautiful lake, perfect for spending a few hours hanging out on the water if we're too exhasted from the day before.",
                },
              ],
            },
            {
              type: "downTime",
              title: "Check in to the hotel and freshen up",
              description: "A shower is a must after a long hike ;)",
            },
            {
              type: "activity",
              title: "Dinner in Prescott",
              icon: "food",
              description:
                "There are a ton of great options for dinner in Prescott, whether we want burgers or some bomb Italian food!",
            },
            {
              type: "activity",
              title: "Superstition Meadery",
              icon: "drink",
              description:
                "The flights at Superstition are fantastic! We can hang out here for a bit after dinner.",
            },
            {
              type: "activity",
              title: "Night on the town",
              description:
                "Spend the night hitting up a few bars on Whiskey Row. We can stop at a brewery, go two-stepping, or people-watch from a second-story balcony bar. When we're ready to call it a night, our hotel is steps away.",
            },
          ],
        },
        {
          day: "Saturday",
          activities: [
            {
              type: "activity",
              title: "Breakfast in Prescott",
            },
            {
              type: "driveTime",
              title: "Drive back to Phoenix",
              duration: 110,
            },
            {
              type: "activity",
              title: "Brewery hopping",
              duration: 180,
              icon: "drink",
            },
            {
              type: "downTime",
              title: "Free time before dinner",
              description:
                "We'll have a couple hours (depending on how much time we take to go to breweries) to pack, nap, swim, relax, and get ready for dinner.",
            },
            {
              type: "activity",
              title: "Dinner and a night out",
              icon: "food",
              description:
                "I have a nice dinner and a fun outdoor activity planned for the evening. Don't ask for too many details though, it's a surprise :)",
              surprise: true,
            },
            {
              type: "downTime",
              title: "Relax and pack",
              description:
                "We'll wrap up our evening around 9, so we can either relax back at the house or head to a bar in the area.",
            },
          ],
        },
      ],
    },
  ],
  packingList: {
    intro:
      'In general, Arizona has a pretty laid-back dress code. The first time I visited for my college orientation, my dad and I were going to a nice steakhouse for dinner and asked the concierge at the hotel what we should wear. He laughed and said that "Arizona casual" is the fanciest one gets outside of a formal event (ie. jeans and a button down for men; a dress or jeans and a nice top for women). For most breweries and other places we\'ll visit, pretty much anything goes.',
    items: [
      {
        item: "1-2 Casual outfits for breweries, etc.",
        note: "ie. Shorts/tank tops/sundresses",
        id: "casualOutfits",
      },
      {
        id: "nightOutfit",
        item: "Casual outfit for going out at night",
        note: "ie. Jeans or shorts and a nice top, similar to my birthday. If we spend the night in Prescott, it'll get down into the 50s.",
      },
      {
        id: "niceOutfit",
        item: "Nice-ish outfit / dress",
        note: 'Something suitable for an upscale dinner, yet cool enough to wear outside on a hot evening. Even better if it\'s a bit "spicy" or has a hispanic flair to it.',
      },
      { item: "Swimsuit", id: "swimsuit" },
      { item: "Hiking clothes", id: "hikingClothes" },
      { item: "Hiking boots", id: "hikingBoots" },
      { item: "Water shoes", id: "waterShoes", note: "If doing Superstitions" },
      { item: "Hat", note: "Something to block the sun on hikes", id: "hat" },
      {
        item: "Warm clothes / Columbia jacket / winter hat / gloves",
        note: "Only if camping... plan on 40 degrees at night and a high of 70",
        id: "warmClothes",
      },
    ],
  },
};

export default content;

export interface Content {
  areas: Area[];
  options: Itinerary[];
  packingList: PackingList;
}
export interface PackingList {
  intro: string;
  items: PackingListItem[];
}
interface PackingListItem {
  item: string;
  id: string;
  note?: string;
}
interface Area {
  name: string;
  description?: string;
  highlights: AreaHighlight[];
}
export interface AreaHighlight {
  title: string;
  description: string;
  photo: string;
  link?: AreaHighlightLink;
  theme?: AreaHighlightTheme;
}
interface AreaHighlightLink {
  url: string;
  text: string;
}
interface AreaHighlightTheme {
  backgroundColor: string;
  textColor: string;
  [x: string]: any;
}
export interface Itinerary {
  title: string;
  overview: string;
  days: DayObject[];
}
export interface DayObject {
  day: "Thursday" | "Friday" | "Saturday";
  activities: (Activity | Downtime | DriveActivity | GroupedActivity)[];
}
export interface GroupedActivity {
  type: "groupedActivities";
  title: string;
  description: string;
  duration?: number;
  activities: Activity[];
}
export interface Activity {
  type: "activity";
  title: string;
  description?: string;
  surprise?: boolean;
  duration?: number;
  icon?: "outdoorActivity" | "food" | "drink" | "hiking" | "tent";
}
export interface Downtime {
  type: "downTime";
  title: string;
  duration?: number;
  description?: string;
}
export interface DriveActivity {
  type: "driveTime";
  duration: number;
  title: string;
  description?: string;
}
