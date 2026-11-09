import type { Topic } from "./topics";

export const P1_TOPICS: Topic[] = [
  {
    slug: "cable-car-ride",
    group: "tickets",
    priority: "P1",
    title: "Chandragiri Cable Car Ride: Distance, Duration and Cabins",
    description: "What the Chandragiri cable car ride is like: the operator's published line length and ride time, cabin rules, and what those numbers do not include.",
    h1: "The Chandragiri cable car ride",
    lead: "The operator describes a line of about 2.5 km and a ride of roughly ten minutes. Neither figure includes the wait before or after it.",
    intro: "This page is about the journey itself: how the published ride figures should be read, what the cabin rules mean for a group, and which parts of the experience are weather-dependent.",
    highlights: [
      "Operator FAQ: line of about 2.5 km",
      "Cable Car page: ride of roughly ten minutes",
      "FAQ: up to eight people per cabin, children under three included",
      "Queueing, ticket checks, breaks and weather are not included in ride time"
    ],
    sections: [
      {
        heading: "What the published numbers mean",
        paragraphs: [
          "The two official pages give a line length of about 2.5 km and a ride time of roughly ten minutes. Those describe the cable car journey, not the total visit. A realistic plan adds the ticket queue, any lunch break, boarding assistance, waiting for a cabin and the walk into the hilltop complex.",
          "The operator also notes that staff assist wheelchair users when boarding and disembarking. That is help at the boarding point, not a guarantee that every hilltop path or facility is step-free."
        ]
      },
      {
        heading: "Cabin and age rules worth knowing",
        bullets: [
          "A child aged 11 or under needs a companion aged at least 15, according to the operator FAQ",
          "Up to eight people per cabin is stated, with children under three counting towards that number",
          "Confirm current restrictions before travelling with a large group or specialist equipment",
          "Weather and maintenance can interrupt service regardless of the published timetable"
        ],
        callout: "These are published operator rules, not an independent inspection of cabins or a live count of available cabins today."
      },
      {
        heading: "Views during the ascent",
        paragraphs: [
          "The line climbs from the lower station towards the ridge, so conditions can differ between the two ends. Cloud, haze and wind can build on the hillside even when the valley below looks clear.",
          "Do not plan photography around a guaranteed clear window. A regional weather model cannot confirm visibility along the line or safe operation; the operator's notice on the day is the authority."
        ]
      }
    ],
    faqs: [
      { q: "How long is the Chandragiri cable car ride?", a: "The operator describes about ten minutes in the cabin on a line of roughly 2.5 km. Queueing, ticket checks, breaks and the hilltop visit are additional." },
      { q: "How many people fit in one cabin?", a: "The operator FAQ states up to eight people, with children under three counted. Confirm current rules with the operator for your group." },
      { q: "Can young children ride without an adult?", a: "No. The published FAQ rule requires a companion aged at least 15 for a child aged 11 or under." }
    ],
    related: ["cable-car-accessibility", "top-station", "base-station", "himalayan-views"]
  },
  {
    slug: "cable-car-accessibility",
    group: "tickets",
    priority: "P1",
    title: "Chandragiri Cable Car Accessibility: Children and Wheelchairs",
    description: "Published accessibility information for the Chandragiri cable car: boarding assistance, child accompaniment rules, and the hilltop limits that still need checking.",
    h1: "Accessibility, children and wheelchair users",
    lead: "There is useful published information about boarding help and child rules, but no independent survey of the whole hilltop.",
    intro: "If anyone in your party uses a wheelchair, travels with small children, or needs step-free routes, the practical question is where help ends. This page separates what the operator states from what remains unverified.",
    highlights: [
      "Operator states staff assist wheelchair users to board and disembark",
      "Child aged 11 or under needs a companion aged at least 15",
      "Up to eight per cabin; under-threes count",
      "Hilltop paths, toilets, temple approaches and ramps are not independently surveyed"
    ],
    sections: [
      {
        heading: "At the boarding station",
        paragraphs: [
          "The Cable Car page describes staff helping wheelchair users get on and off. Ask in advance what assistance is available on your date, whether your own equipment can travel in the cabin, and where the accessible queue forms.",
          "For children, the FAQ rule about a companion aged 15 or over for anyone aged 11 or under is worth checking against your group's composition before you buy tickets."
        ]
      },
      {
        heading: "The gap between boarding and the hilltop",
        bullets: [
          "No independent survey of step-free routes across the hilltop complex is claimed here",
          "Toilets, drinking water, first aid and rest areas should be confirmed on the day",
          "Temple approaches, steps and slopes may have their own constraints",
          "A listed facility is not a promise that it is open, free or staffed that day"
        ],
        callout: "Ask the operator about the specific route you plan to take, not just whether the cable car is accessible. The two answers are different."
      },
      {
        heading: "A workable planning order",
        paragraphs: [
          "Confirm service and the last descent, then confirm boarding assistance and equipment rules, then ask about the hilltop route to the temple and viewing areas. Only after that should a meal or activity be added to the schedule.",
          "Travellers who need a slower pace may prefer a shorter hilltop loop with a generous buffer before the return queue. The senior traveller guide expands that arrangement."
        ]
      }
    ],
    faqs: [
      { q: "Is the Chandragiri cable car wheelchair accessible?", a: "The operator describes staff assistance for boarding and disembarking wheelchair users. That does not establish step-free access to all hilltop paths, toilets, temple approaches or facilities." },
      { q: "Do infants need a ticket or a seat?", a: "The FAQ states that up to eight people fit in a cabin and that children under three count towards that number. Ticket eligibility and price for infants are questions for the official counter." },
      { q: "Are hilltop toilets and rest areas accessible?", a: "This guide has not surveyed them. Ask the operator about the specific facilities and route you need before travelling." }
    ],
    related: ["cable-car-ride", "senior-travel-guide", "family-guide", "first-time-visitor-guide"]
  },
  {
    slug: "thamel-to-chandragiri",
    group: "transport",
    priority: "P1",
    title: "Thamel to Chandragiri Cable Car: Planning the Trip",
    description: "How to plan the journey from Thamel to the Chandragiri cable car boarding station, including navigation targets, time buffers and the return arrangement.",
    h1: "Thamel to Chandragiri cable car",
    lead: "From Thamel, the destination is the Thankot-side boarding station; the upper station pin is not a road target.",
    intro: "Thamel is a common starting point for visitors staying in central Kathmandu. This page covers the decisions to make before setting off, without publishing unverified fares or journey times.",
    highlights: [
      "Navigate to the lower boarding station, not the hilltop Maps pin",
      "City traffic makes a fixed travel-time promise unreliable",
      "Confirm the last descent before leaving the hotel",
      "Book or agree the return vehicle before boarding"
    ],
    sections: [
      {
        heading: "Choosing the route and destination",
        paragraphs: [
          "Whatever transport you choose, the road leg ends at the Thankot-side Bottom Station. Ask the driver to confirm that destination explicitly, using the operator's Route to the Hills guidance rather than the Google Maps point for the upper station.",
          "This guide does not publish a distance or a fixed drive time from Thamel. Central Kathmandu traffic and road conditions vary enough that a buffer is more useful than an estimate."
        ]
      },
      {
        heading: "Before you leave the hotel",
        bullets: [
          "Ask the operator about today's service, break and last descent",
          "Decide whether the vehicle waits or returns at an agreed time",
          "Carry the documents needed for your fare category",
          "Check the weather outlook, but do not treat it as an operating-status confirmation"
        ]
      },
      {
        heading: "Making the return comfortable",
        paragraphs: [
          "A Thamel-based day usually works better if the driver waits at the lower station with an agreed latest pickup. Confirm that the time sits before, not after, the last descent you were given.",
          "If you plan to add other stops on the way back, keep them after the cable car visit and inside the driver's agreed hours."
        ]
      }
    ],
    faqs: [
      { q: "Can I get a direct bus from Thamel to the cable car?", a: "Direct bus routes, numbers and frequencies are not verified by this guide. Confirm the current option with a local transport provider or the operator." },
      { q: "Should I book a return taxi in advance?", a: "It is sensible to agree the return before riding up, because the lower station is where your road journey resumes. Availability at the end of the day should not be assumed." },
      { q: "Where exactly should the driver go?", a: "To the Thankot-side Bottom Station used for boarding, following the operator's Route to the Hills guidance. The Top Station Maps point is not a driving destination." }
    ],
    related: ["kathmandu-to-chandragiri", "taxi-to-chandragiri", "public-transport", "half-day-trip"]
  },
  {
    slug: "airport-to-chandragiri",
    group: "transport",
    priority: "P1",
    title: "Kathmandu Airport to Chandragiri Cable Car: Visit Planning",
    description: "Planning a Chandragiri cable car visit from Tribhuvan International Airport: luggage, timing buffers, the correct station destination and return logistics.",
    h1: "From Kathmandu airport to Chandragiri",
    lead: "An airport-to-hilltop visit is possible in principle, but it needs a confirmed service window and a plan for luggage.",
    intro: "Travellers with a long layover or an early arrival often ask whether the cable car fits before a flight or a hotel check-in. This page sets out the constraints rather than promising a transfer time.",
    highlights: [
      "The road destination is the Thankot-side boarding station",
      "No fixed airport-to-station duration or fare is claimed here",
      "Confirm luggage storage before arriving with bags",
      "Work backwards from the last descent and your flight time"
    ],
    sections: [
      {
        heading: "The constraints that matter",
        paragraphs: [
          "An airport visit has two independent deadlines: the cable car's last descent and your next flight or check-in. Start from whichever is earlier, then allow for the road journey in both directions, the ticket queue, a possible lunch break and at least two to three hours on the hill if you intend to look around.",
          "Because the operator's two published pages disagree about closing times and breaks, a visit built on a general timetable carries real risk. Confirm the day's cut-offs directly before leaving the airport."
        ]
      },
      {
        heading: "Luggage and documents",
        bullets: [
          "Ask whether luggage can be stored at the lower station before committing to the visit",
          "Carry the identity documents needed for your fare category",
          "Keep the operator's cable car contact number available",
          "Have a fallback plan if the line is suspended for weather or maintenance"
        ]
      },
      {
        heading: "Setting the navigation target",
        paragraphs: [
          "Ask the driver for the Thankot-side Bottom Station using the operator's Route to the Hills guidance. The upper station Maps pin is a location reference for the hilltop, not a transfer destination.",
          "Airport taxi fares and travel times are not verified by this independent guide; agree the fare, waiting time and return arrangement before departure."
        ]
      }
    ],
    faqs: [
      { q: "Is Chandragiri cable car close to Kathmandu airport?", a: "A specific distance or transfer time is not verified here. Check current traffic conditions with your driver and work backwards from the confirmed last descent." },
      { q: "Can I leave luggage at the cable car station?", a: "Luggage storage is not confirmed by this guide. Ask the operator before travelling with bags." },
      { q: "Does the airport weather report confirm the cable car is running?", a: "No. Only the operator can confirm service, breaks and the last ride on the day." }
    ],
    related: ["kathmandu-to-chandragiri", "taxi-to-chandragiri", "first-time-visitor-guide", "last-cable-car"]
  },
  {
    slug: "taxi-to-chandragiri",
    group: "transport",
    priority: "P1",
    title: "Taxi to Chandragiri Cable Car: Fares, Waiting and Return",
    description: "Using a taxi or private car for the Chandragiri cable car: what to agree before departure, which station to name, and how to avoid being stranded at the lower station.",
    h1: "Taxi and private car to Chandragiri",
    lead: "The important taxi decision is not the fare alone. It is whether the vehicle is still there when you come back down.",
    intro: "This page covers the practical terms of a road trip to the lower station. No fares or distances are published because this independent guide has not verified them.",
    highlights: [
      "Name the Thankot-side Bottom Station as the destination",
      "Agree fare, waiting time and latest pickup before departure",
      "No taxi or ride-hail prices are claimed here",
      "The hilltop Maps pin is not a drop-off point"
    ],
    sections: [
      {
        heading: "What to agree before leaving",
        bullets: [
          "Whether the fare covers one-way drop-off, waiting, or a full return",
          "A clear latest pickup time at the lower station",
          "An exact meeting point for the return",
          "What happens if the cable car is suspended and you return early"
        ],
        callout: "Write down the vehicle details and driver contact. Mobile coverage and vehicle availability at the end of a hilltop visit should not be assumed."
      },
      {
        heading: "Getting the destination right",
        paragraphs: [
          "Ask for the lower boarding station on the Thankot side and, if needed, show the operator's Route to the Hills page. A driver following the upper station Google Maps pin may head towards a hill location that is not the ticket counter.",
          "The operator's cable car line, +977-9802069900, is the appropriate contact for service questions. It is not a booking line for this independent guide."
        ]
      },
      {
        heading: "Timing the wait",
        paragraphs: [
          "A hilltop visit commonly includes the temple, a viewing area, photographs and possibly a meal, on top of the ride and queues. The operator suggests at least two to three hours on the hill, so a waiting arrangement should be based on that plus the road legs and a buffer.",
          "Reconfirm the last descent before you ride up and pass any change to the driver. A general closing hour from a third-party listing is not a safe pickup time."
        ]
      }
    ],
    faqs: [
      { q: "How much is a taxi to Chandragiri cable car?", a: "This guide does not publish taxi fares because they are not independently verified. Agree a fare for the exact service you need before departure." },
      { q: "Should the taxi wait at the top or the bottom?", a: "Road vehicles stay on the lower station side. Agree a waiting point and time at the Thankot-side boarding station." },
      { q: "Can a taxi drive to the Top Station?", a: "No. The hilltop is reached by cable car from the lower station; the upper station Maps pin is not a verified driving destination." }
    ],
    related: ["kathmandu-to-chandragiri", "parking-and-driving", "public-transport", "thankot-to-cable-car"]
  },
  {
    slug: "public-transport",
    group: "transport",
    priority: "P1",
    title: "Public Transport to Chandragiri Cable Car: What to Verify",
    description: "Planning a bus or shared-transport trip to the Chandragiri cable car: the final leg to the Thankot-side boarding station and the questions to ask locally.",
    h1: "Public transport to Chandragiri",
    lead: "Public transport can be part of the plan, but the final leg and the last service back must be confirmed locally.",
    intro: "This page deliberately avoids inventing bus numbers, frequencies or fares. It explains which parts of a public-transport trip are stable and which need a same-day answer.",
    highlights: [
      "All road options end at the Thankot-side boarding station",
      "Bus numbers, fares and frequencies are not verified here",
      "Check the last return service before riding up",
      "The upper station Maps pin is not a bus stop"
    ],
    sections: [
      {
        heading: "The parts that do not change",
        paragraphs: [
          "Whichever bus, shared vehicle or combination you use, the goal is the lower station on the Thankot side. From there the only way up is the cable car, and the return road journey also starts there.",
          "The operator's Route to the Hills page is the right starting point for the final approach. A third-party Maps pin for the hilltop station does not describe a bus stop or a walkable boarding entrance."
        ]
      },
      {
        heading: "The parts that need a same-day answer",
        bullets: [
          "Which service currently runs and where it actually stops",
          "How far the stop is from the ticket counter and the queue",
          "The last service back towards Kathmandu or Thankot",
          "Whether a break or service suspension affects your return"
        ]
      },
      {
        heading: "A safer way to use public transport",
        paragraphs: [
          "Travel out early, confirm the last descent and the last road service at the same time, and keep a taxi fallback in case the timetable changes. A cheap outbound trip is not a saving if the return option has ended.",
          "If the visit includes a meal, temple stop or photography at the end of the day, move those earlier and protect the return window."
        ]
      }
    ],
    faqs: [
      { q: "Which bus goes to Chandragiri cable car?", a: "Bus routes, numbers and frequencies are not verified by this guide. Confirm the current service with a local operator or the cable car operator before travelling." },
      { q: "Does public transport stop at the ticket counter?", a: "That is not confirmed here. Ask locally about the final leg from the nearest stop to the lower boarding station." },
      { q: "Can I rely on a late bus back to Kathmandu?", a: "Do not assume it. Check the last return service before riding up and keep an alternative in mind." }
    ],
    related: ["thankot-to-cable-car", "taxi-to-chandragiri", "kathmandu-to-chandragiri", "last-cable-car"]
  },
  {
    slug: "parking-and-driving",
    group: "transport",
    priority: "P1",
    title: "Chandragiri Cable Car Parking and Driving Directions",
    description: "Driving to the Chandragiri cable car: which station to navigate to, why the hilltop Maps pin is not a car park, and what to confirm about parking on the day.",
    h1: "Parking and driving to the cable car",
    lead: "Set your navigation to the Thankot-side boarding station. The upper station pin is not a parking destination.",
    intro: "Self-drive visitors mostly need two answers: where to point the map, and whether a space will be available. This page covers the first and is honest about the second.",
    highlights: [
      "Road destination: the Thankot-side Bottom Station",
      "Follow the operator's Route to the Hills guidance",
      "Parking capacity, charges and road conditions are not verified here",
      "Agree the return plan before going up"
    ],
    sections: [
      {
        heading: "Choosing the destination in your map app",
        paragraphs: [
          "Use the operator's Route to the Hills page for the lower station. The Google Maps reference used by this site points to the upper station on Chandragiri Hill; it is a third-party location snapshot and not a verified car park, pickup point or ticket counter.",
          "If a navigation app offers a hilltop road as a shortcut, treat it as unverified. The boarding sequence for road arrivals happens at the lower station, including ticket purchase and queues."
        ]
      },
      {
        heading: "What to confirm about parking",
        bullets: [
          "Whether parking is open and where it is located that day",
          "Any charge, time limit or same-day re-entry rule",
          "Road surface, diversions or seasonal restrictions on the approach",
          "How far the walk is to the ticket counter"
        ],
        callout: "This independent guide has not surveyed parking capacity or prices, and does not claim that a space is always available."
      },
      {
        heading: "Before you leave the vehicle",
        paragraphs: [
          "Confirm the last descent and note where the return queue and your vehicle are. A self-drive day is more flexible than a bus day, but it still depends on the cable car's service window.",
          "The operator suggests at least two to three hours on the hilltop, so allow for that plus the road journey in both directions rather than planning around the ride time alone."
        ]
      }
    ],
    faqs: [
      { q: "Is there parking at Chandragiri Top Station?", a: "The hilltop Maps pin is not a verified parking location. Road visitors park on the lower station side; confirm current parking with the operator locally." },
      { q: "How much does parking cost?", a: "Parking charges are not verified by this guide. Ask the operator or check the notice at the site on the day." },
      { q: "Can I drive up to the hilltop complex instead?", a: "The operator describes the cable car as the link between the lower station and the hilltop complex. Plan to board at the lower station." }
    ],
    related: ["base-station", "taxi-to-chandragiri", "thankot-to-cable-car", "kathmandu-to-chandragiri"]
  },
  {
    slug: "chandragiri-hills",
    group: "hilltop",
    priority: "P1",
    title: "Chandragiri Hills: The Hilltop Complex Beyond the Cable Car",
    description: "What Chandragiri Hills refers to: the hilltop complex reached by cable car, its separate facilities, and why the operator's timetable does not cover all of them.",
    h1: "Chandragiri Hills and the hilltop complex",
    lead: "Chandragiri Hills is the hilltop destination and its facilities. The cable car is how road visitors reach it.",
    intro: "The name is used loosely for the station, the temple, the views, the resort and the activities. Treating them as one ticketed attraction is the source of most planning mistakes.",
    highlights: [
      "Reached from the Thankot-side lower station by cable car",
      "Facilities include Bhaleshwor Mahadev Temple, viewing areas, food and a resort",
      "Paid activities and the resort have their own rules and opening status",
      "Operator suggests at least two to three hours on the hill"
    ],
    sections: [
      {
        heading: "One hilltop, several separate services",
        paragraphs: [
          "The operator describes a hilltop complex with a temple, viewing facilities, food and rest options, a resort, children's activities and adventure experiences. Each may have its own hours, charges and access rules.",
          "A cable car ticket establishes a ride by category and direction. It does not prove that the temple is open for worship, that a restaurant is serving, or that an activity is operating when you arrive."
        ]
      },
      {
        heading: "Planning a route around the hilltop",
        bullets: [
          "Confirm the last descent before choosing an order",
          "Visit the temple and viewing areas before adding a meal or paid activity",
          "Keep a buffer for queues, weather and photography stops",
          "Ask about step-free routes if anyone in the party needs them"
        ]
      },
      {
        heading: "Conditions and expectations",
        paragraphs: [
          "The hilltop can be cloudy, windy and cooler than the valley. The operator describes views of the Kathmandu Valley, surrounding hills and the Himalaya, but no particular peak or clear panorama is guaranteed.",
          "A regional weather forecast is a model for the area, not an on-site reading. It cannot confirm visibility at the viewpoint or that the cable car is operating safely."
        ]
      }
    ],
    faqs: [
      { q: "Is Chandragiri Hills the same as the Top Station?", a: "The name is commonly used for the hilltop complex that the cable car reaches. This guide uses Top Station for the upper station and treats the temple, views, food and activities as separate facilities." },
      { q: "Does one ticket cover everything on the hill?", a: "No. Published fares cover cable car journeys. Confirm the opening status and charge of each hilltop facility separately." },
      { q: "Who operates the cable car and hilltop facilities?", a: "Chandragiri Hills is the operator named on the official pages. This site is an independent, unofficial guide and is not the operator." }
    ],
    related: ["top-station", "bhaleshwor-mahadev-temple", "adventure-activities", "hilltop-restaurants"],
    image: {
      src: "/images/chandragiri-top-station.jpg",
      alt: "Hilltop station area on Chandragiri Hill with ridges in the background, photographed in 2016",
      caption: "Historical 2016 photograph of the Chandragiri hilltop area by Roman Raghu Shrestha (Wikimedia Commons), shown to illustrate the setting rather than current facilities."
    }
  },
  {
    slug: "bhaleshwor-mahadev-temple",
    group: "hilltop",
    priority: "P1",
    title: "Bhaleshwor Mahadev Temple, Chandragiri: Visitor Etiquette",
    description: "Visiting Bhaleshwor Mahadev Temple on Chandragiri Hill: its place in the hilltop complex, respectful conduct, and what to confirm about worship times and access.",
    h1: "Bhaleshwor Mahadev Temple on Chandragiri Hill",
    lead: "The temple is a religious site within the hilltop complex, reached by the cable car and governed by its own customs.",
    intro: "This page focuses on respectful visiting and practical boundaries. It separates religious tradition from measured historical fact and does not claim to publish current worship schedules.",
    highlights: [
      "Located within the Chandragiri hilltop complex",
      "The operator publishes a dedicated temple page",
      "Worship times, access and photography rules should be checked on site",
      "A cable car timetable is not a temple schedule"
    ],
    sections: [
      {
        heading: "Reaching the temple",
        paragraphs: [
          "Visitors arrive at the hilltop complex by cable car from the Thankot-side lower station, then continue on foot within the complex. The temple is a distinct part of the hilltop, not part of the cable car fare structure.",
          "If your party includes anyone with limited mobility, ask about the route, steps and slopes to the temple approach specifically. Boarding assistance at the cabin does not imply step-free access to the shrine."
        ]
      },
      {
        heading: "Conduct and local notices",
        bullets: [
          "Follow posted guidance on footwear, dress and photography",
          "Keep worship, religious tradition and historical claims distinct",
          "Allow space for devotees and avoid treating the shrine as a viewpoint backdrop",
          "Confirm any current restrictions with the operator or on-site notices"
        ],
        callout: "Puja times, entry arrangements and photography permissions can change. This independent guide does not publish a worship timetable."
      },
      {
        heading: "Fitting the visit into the day",
        paragraphs: [
          "Put the temple earlier in the hilltop order, before a meal or a long photography stop, and keep the confirmed last descent in view. A religious visit should not depend on a general closing hour taken from a third-party listing.",
          "The operator's own temple page is the best starting point for background; the cable car FAQ and contact line are the right places for operational questions."
        ]
      }
    ],
    faqs: [
      { q: "Is there a separate ticket for Bhaleshwor Mahadev Temple?", a: "The published fares here are cable car fares. Whether the temple or any associated service has a separate charge should be confirmed with the operator on the day." },
      { q: "What are the temple opening hours?", a: "This guide does not publish a temple schedule. Check the operator's temple page and on-site notices, and keep the cable car's last descent in mind." },
      { q: "Can I photograph inside the temple?", a: "Follow posted local rules and the guidance of staff and devotees. Restrictions can change, so ask on site rather than assuming photography is allowed." }
    ],
    related: ["chandragiri-hills", "top-station", "first-time-visitor-guide", "senior-travel-guide"]
  },
  {
    slug: "view-tower",
    group: "hilltop",
    priority: "P1",
    title: "Chandragiri View Tower: What to Check Before You Go Up",
    description: "The Chandragiri hilltop viewing tower and viewpoints: what the operator describes, how visibility affects the experience, and which access details remain unconfirmed.",
    h1: "Chandragiri view tower and viewpoints",
    lead: "Viewing facilities are part of the hilltop complex. What you see depends on the day's visibility, not on the timetable.",
    intro: "This page covers the practical side of a viewpoint visit: where it sits in the hilltop order, how to plan around cloud and haze, and what not to assume about a tower's opening status.",
    highlights: [
      "Viewing facilities sit within the hilltop complex",
      "Views described by the operator include valley, hills and Himalayan ranges",
      "No specific peak or clear panorama is guaranteed",
      "Opening status, access and any separate charge need same-day confirmation"
    ],
    sections: [
      {
        heading: "What a viewpoint visit involves",
        paragraphs: [
          "After arriving at the upper station, visitors walk within the hilltop complex to viewing areas and any tower facility that is open. The operator describes views across the Kathmandu Valley and towards Himalayan ranges.",
          "A cable car ticket does not establish the opening hours, access rules or charge for a particular viewing structure. Confirm these at the hilltop or with the operator before making the tower the centre of the trip."
        ]
      },
      {
        heading: "Visibility and photography",
        bullets: [
          "Cloud and haze can build on the ridge even when the valley looks clear",
          "Morning and post-rain conditions differ, but no clear window is promised",
          "Wind and cooler air on the hill are worth planning for",
          "A regional forecast cannot confirm visibility from the tower or safe operation"
        ]
      },
      {
        heading: "Fitting it into the itinerary",
        paragraphs: [
          "Visit a viewpoint early in the hilltop loop, then return later if conditions improve. That costs less than discovering at the end of the day that the return queue is closing.",
          "Keep the confirmed last descent ahead of photography time, and treat generic mountain photographs as illustrations rather than as Chandragiri's actual view."
        ]
      }
    ],
    faqs: [
      { q: "Is the Chandragiri view tower open every day?", a: "A current opening schedule is not published by this independent guide. Confirm with the operator on the day, separately from the cable car timetable." },
      { q: "Is there an extra charge for the view tower?", a: "Any separate charge is not verified here. Ask at the hilltop or check the operator's current information before visiting." },
      { q: "Will I see the Himalayas from Chandragiri?", a: "The operator describes Himalayan views, but cloud, haze and weather can hide them. No specific peak or clear panorama is guaranteed." }
    ],
    related: ["himalayan-views", "kathmandu-valley-view", "chandragiri-hills", "best-time-to-visit"]
  },
  {
    slug: "himalayan-views",
    group: "hilltop",
    priority: "P1",
    title: "Himalayan Views from Chandragiri: What Is Realistic",
    description: "What the operator says about Himalayan views from Chandragiri Hill, why visibility is not guaranteed, and how to plan a visit without relying on a clear skyline.",
    h1: "Himalayan views from Chandragiri",
    lead: "The Himalayan outlook is a possibility described by the operator, not a guaranteed feature of every ride.",
    intro: "This page answers the expectation question honestly: when a distant range might be visible, what can hide it, and why a weather model cannot settle the matter in advance.",
    highlights: [
      "The operator describes Himalayan, hill and valley views from the hilltop",
      "Cloud, haze, wind and season affect what is visible",
      "No named peak or snow line is promised by this guide",
      "A regional forecast is not an on-site visibility reading"
    ],
    sections: [
      {
        heading: "Why the ridge changes the outlook",
        paragraphs: [
          "Chandragiri Hill sits above the valley, and moist air rising over the ridge can form cloud even when lower ground is clear. Conditions at the upper station can differ from those at the lower station along the same cable car line.",
          "That is why a clear morning in Kathmandu is not proof of a clear panorama from the hilltop, and why a cloudy start does not always mean the whole day is lost."
        ]
      },
      {
        heading: "Planning without a guarantee",
        bullets: [
          "Build the itinerary around the hilltop visit itself, not a single photograph",
          "Check viewing areas early and again later if conditions change",
          "Keep the confirmed last descent ahead of any waiting for clearer skies",
          "Treat stock mountain imagery as illustration, not as the actual view"
        ]
      },
      {
        heading: "What the weather module can and cannot tell you",
        paragraphs: [
          "The homepage shows a regional model forecast for a fixed point near Chandragiri. It is neither a station measurement nor an operating-status feed for the cable car, and it does not establish that the line is safe to run.",
          "For decisions about service, breaks and the last ride, the operator's notice is the authority. For the view itself, the only confirmation is being there."
        ]
      }
    ],
    faqs: [
      { q: "Which Himalayan peaks can you see from Chandragiri?", a: "The operator describes Himalayan views in general terms. This guide does not name specific peaks or promise that any will be visible on a given day." },
      { q: "What is the best time of day for Himalayan views?", a: "No reliable daily window is claimed here. Visibility depends on cloud, haze and weather, so check the viewing areas during your visit rather than planning around a fixed hour." },
      { q: "Does the weather forecast guarantee a clear view?", a: "No. A regional model cannot confirm visibility at the viewpoint or along the cable car line." }
    ],
    related: ["view-tower", "kathmandu-valley-view", "best-time-to-visit", "monsoon-season-guide"]
  },
  {
    slug: "kathmandu-valley-view",
    group: "hilltop",
    priority: "P1",
    title: "Kathmandu Valley View from Chandragiri Hill",
    description: "How the Kathmandu Valley outlook from Chandragiri Hill fits into a visit, what affects haze and clarity, and how to combine it with the temple and viewpoints.",
    h1: "Kathmandu Valley view from Chandragiri",
    lead: "The valley outlook is one of the hilltop's main draws, and one of the most affected by haze.",
    intro: "This page is about the valley-facing side of a hilltop visit: where it fits in the walking order, what can obscure it, and how to keep the return ride protected.",
    highlights: [
      "The operator describes views over the Kathmandu Valley from the hilltop",
      "Haze, cloud and weather can reduce distance visibility",
      "Viewing areas are part of the hilltop complex, not the cable car fare",
      "Keep the last descent ahead of a long viewing stop"
    ],
    sections: [
      {
        heading: "Where the valley view fits",
        paragraphs: [
          "After reaching the upper station, the valley outlook is naturally combined with the viewing areas, a tower if open, and the temple. Put it early in the walking order so a later meal or activity does not cut it short.",
          "The upper station Maps reference identifies the hilltop area, but it does not mark a specific viewpoint, bench or photography position. Follow on-site signage and staff guidance."
        ]
      },
      {
        heading: "What changes the clarity",
        bullets: [
          "Valley haze and low cloud can flatten the view even on a dry day",
          "Cloud can form on the ridge while the valley floor is clear",
          "Late-day light changes quickly; do not let it push you past the last descent",
          "A regional forecast cannot confirm visibility from the hilltop"
        ]
      },
      {
        heading: "A simple hilltop order",
        paragraphs: [
          "Confirm the return cut-off, visit the temple and a viewing area, allow time for photographs, then eat or try an activity if the schedule still allows. The operator suggests at least two to three hours on the hill in total.",
          "This independent guide has not verified specific viewpoints or their access routes. Ask at the hilltop about step-free alternatives if needed."
        ]
      }
    ],
    faqs: [
      { q: "Can you see all of Kathmandu from Chandragiri?", a: "The operator describes a valley outlook, but haze and cloud determine how much is actually visible. No particular extent of the city is guaranteed." },
      { q: "Is the valley view included in the cable car ticket?", a: "The published fares cover the cable car journey. Confirm any separate access rules or charges for specific viewing structures at the hilltop." },
      { q: "Where is the best photo spot for the valley?", a: "Specific photography positions are not verified by this guide. Follow on-site signage and avoid treating the temple area as a viewpoint backdrop." }
    ],
    related: ["view-tower", "himalayan-views", "chandragiri-hills", "half-day-trip"]
  },
  {
    slug: "adventure-activities",
    group: "hilltop",
    priority: "P1",
    title: "Chandragiri Adventure Activities: What to Confirm First",
    description: "An overview of hilltop adventure and children's activities at Chandragiri, with the age, price, safety and opening questions to settle before participating.",
    h1: "Adventure activities on Chandragiri Hill",
    lead: "Hilltop activities are separate from the cable car. Their availability, rules and prices need their own confirmation.",
    intro: "The operator lists experiences and children's activities alongside the hilltop facilities. This page explains how to approach them without assuming that a cable car ticket or timetable covers any of them.",
    highlights: [
      "Activities and children's facilities are part of the hilltop complex",
      "Age, height, health and safety rules are set by each activity operator",
      "Prices and opening status are not verified by this guide",
      "Confirm the last descent before starting any timed activity"
    ],
    sections: [
      {
        heading: "What is described on the hilltop",
        paragraphs: [
          "Chandragiri Hills publishes a range of experiences and children's activities in the hilltop complex, alongside the temple, viewing areas, food and the resort. Zipline and similar aerial experiences are covered separately in the zipline guide.",
          "This independent guide does not publish current prices, age limits or opening hours for those activities. A listing or promotional description is not proof that an activity is operating on your date."
        ]
      },
      {
        heading: "Questions to ask at the activity counter",
        bullets: [
          "Is it open today, and until what time?",
          "What is the current price and what does it include?",
          "What are the age, height, weight or health restrictions?",
          "Is equipment, supervision and any insurance arrangement provided?",
          "How long does it take, and does it fit before the last descent?"
        ],
        callout: "Do not interpret a regional weather forecast as a safety clearance for any aerial or high-exposure activity. The activity operator decides."
      },
      {
        heading: "Fitting activities into the day",
        paragraphs: [
          "Finish the essential parts of the hilltop visit first, then add an activity only if the return window still has a buffer. The operator suggests at least two to three hours on the hill in total before counting travel.",
          "If a member of your party has limited mobility, ask about access to the activity area and waiting facilities rather than assuming the hilltop is uniformly step-free."
        ]
      }
    ],
    faqs: [
      { q: "Are adventure activities included in the cable car ticket?", a: "No. The published fares cover cable car journeys. Hilltop activities have their own charges and rules, which should be confirmed on site." },
      { q: "What age or height limits apply?", a: "Those limits are set by each activity operator and are not verified in this guide. Ask at the activity counter before paying." },
      { q: "Do activities run in the rain?", a: "That is an operational decision for the activity provider and the operator. A forecast alone cannot confirm it." }
    ],
    related: ["zipline", "chandragiri-hills", "family-guide", "hilltop-restaurants"]
  },
  {
    slug: "half-day-trip",
    group: "planning",
    priority: "P1",
    title: "Chandragiri Half-Day Trip: A Step-by-Step Itinerary",
    description: "A practical half-day Chandragiri cable car itinerary from Kathmandu: numbered steps that protect the return ride, with time buffers and decision points.",
    h1: "A half-day Chandragiri itinerary",
    lead: "Build the half-day around the last descent, not around the departure time.",
    intro: "This is a decision-oriented route rather than a scenic description. Each step has a check to complete before moving on, so a delayed queue does not turn into a missed return.",
    highlights: [
      "Six numbered steps from Kathmandu to the lower station and back",
      "Return cut-off confirmed before buying anything",
      "Hilltop time based on the operator's two-to-three-hour suggestion",
      "Road travel, queues and breaks counted separately"
    ],
    sections: [
      {
        heading: "The route in six steps",
        bullets: [
          "1. Before leaving Kathmandu, confirm today's service, break, ticket cut-off, last ascent and last descent on the operator's cable car line.",
          "2. Travel by road to the Thankot-side Bottom Station, using the operator's Route to the Hills guidance; agree the driver's waiting point and latest pickup.",
          "3. At the counter, choose one-way, two-way or Express, present the documents for your category, and ask where the return queue forms.",
          "4. Ride up, then visit the temple and a viewing area first while the return window is still wide.",
          "5. Add photographs, a short meal or an activity only if at least two to three hours on the hill still fits before the confirmed descent cut-off.",
          "6. Return to the lower station with a buffer, meet the driver and continue the road journey back."
        ],
        callout: "The roughly ten-minute ride described by the operator is only one part of step 4. Do not use it to estimate the half-day."
      },
      {
        heading: "Where plans usually fail",
        paragraphs: [
          "The first failure is trusting a general closing hour from a listings site. The operator's own FAQ and Cable Car pages disagree, so a confirmed last descent is the only safe anchor.",
          "The second is adding a hilltop meal or activity late in the visit. Keep those optional and reversible, and keep the driver informed if the schedule changes."
        ]
      },
      {
        heading: "If you have more time",
        paragraphs: [
          "A longer day can add Thankot or Matatirtha stops before or after the cable car, but those should sit outside the confirmed service window rather than inside it.",
          "For a full-day version with more context, follow the day trip guide; for a first visit overall, start with the first-time visitor checklist."
        ]
      }
    ],
    faqs: [
      { q: "Is a half day enough for Chandragiri cable car?", a: "It can be, if the last descent is confirmed and the hilltop visit is kept inside the operator's suggested two to three hours plus a buffer. Road travel and queues are additional." },
      { q: "What should I do first on the hilltop?", a: "Visit the temple and a viewing area before a meal or paid activity, and keep the confirmed return cut-off visible throughout." },
      { q: "Should I buy a one-way ticket for a half-day trip?", a: "Normally no. Road access is at the lower station, so a return ticket fits a standard visit unless a separate onward route has been confirmed." }
    ],
    related: ["day-trip-from-kathmandu", "first-time-visitor-guide", "kathmandu-to-chandragiri", "last-cable-car"]
  }
];
