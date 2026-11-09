import type { Topic } from "./topics";

export const P0_TOPICS: Topic[] = [
  {
    slug: "cable-car-ticket-price",
    group: "tickets",
    priority: "P0",
    title: "Chandragiri Cable Car Ticket Price: Fares by Category",
    description: "How to read Chandragiri cable car ticket prices: Nepalese, SAARC and other foreign rates in NPR, INR and USD, one-way, return and Express, checked 29 October 2026.",
    h1: "Chandragiri cable car ticket price explained",
    lead: "The published fare is a table of categories, currencies and trip directions, not one flat entry price. Here is how to read it before you pay.",
    intro: "This page answers the price question that the homepage fare table only shows as a snapshot: which column applies to you, why the three rows use different currencies, and which details the counter still has to confirm on the day.",
    highlights: [
      "Snapshot checked 29 October 2026 on the operator Cable Car page, not a live price feed",
      "Return fares listed: NPR 850 (Nepalese), INR 950 (SAARC), USD 23 (other foreign visitors)",
      "One-way, two-way and Express Two Way are separate products",
      "Final amount, eligibility and documents are confirmed at the official point of sale"
    ],
    sections: [
      {
        heading: "Read the fare table by category and currency",
        paragraphs: [
          "The operator listing separates Nepalese visitors, SAARC visitors and other foreign visitors. It quotes the first group in Nepalese rupees, the second in Indian rupees and the third in US dollars. Those numbers are not three prices for the same ticket in one currency, and converting them informally can mislead a budget.",
          "On 29 October 2026 the two-way column showed NPR 850, INR 950 and USD 23. The one-way column showed NPR 510, INR 570 and USD 13, and an Express Two Way product was listed separately at NPR 1350, INR 1250 and USD 25. Treat these as a dated copy of a published table, not as today's checkout total.",
          "This fare applies to the cable car. The hilltop temple, viewing facilities, resort, meals and paid activities are separate services, and a cable car ticket does not establish their opening times or prices."
        ]
      },
      {
        heading: "What can change the amount at the counter",
        bullets: [
          "Citizenship or SAARC eligibility and the identity documents the operator asks to see",
          "Direction of travel: one-way, two-way, or the Express product",
          "Date of visit, applicable service and any current notice issued by the operator",
          "Child age or height rules, and whether a concession actually applies to your party",
          "Whether the ticket covers only the ride or a bundled hilltop product"
        ],
        callout: "The published discount policy mentions valid identification and Nepalese nationality conditions. Do not assume that senior, student, disability or child concessions are automatic. Ask which documents are accepted before budgeting."
      },
      {
        heading: "How to confirm the price before leaving",
        paragraphs: [
          "Open the operator Cable Car page on the day and compare it with the counter quote. If the two disagree, the counter and the official ticket system decide. This independent guide does not sell tickets and cannot see current inventory or promotions.",
          "Ask about the price and about the last return ride in the same call: a cheap fare is of little use if the descent is already closed. The cable car contact number published by the operator is +977-9802069900."
        ]
      }
    ],
    faqs: [
      { q: "Is the Chandragiri cable car ticket the same price for everyone?", a: "No. The operator publishes separate rows for Nepalese, SAARC and other foreign visitors, quoted in NPR, INR and USD respectively. Which row applies depends on eligibility and the documents the counter accepts." },
      { q: "Does the return fare include hilltop activities or meals?", a: "No. It is a cable car fare. The temple, viewing facilities, resort, food and paid activities are separate, with their own opening status and charges that should be confirmed independently." },
      { q: "Why is there an Express Two Way price?", a: "The operator lists Express Two Way as its own product alongside one-way and two-way fares. What is included, whether it is operating that day and its current price are questions for the official ticket counter." }
    ],
    related: ["cable-car-tickets", "cable-car-opening-hours", "last-cable-car", "base-station"]
  },
  {
    slug: "cable-car-tickets",
    group: "tickets",
    priority: "P0",
    title: "Buying Chandragiri Cable Car Tickets: Where and What to Check",
    description: "Where to buy Chandragiri cable car tickets, how to choose one-way, return or Express, and the documents and return-ride questions to settle before paying.",
    h1: "Buying Chandragiri cable car tickets",
    lead: "Buying the right ticket is mostly about choosing the right product and settling the return ride before you go up.",
    intro: "Visitors often ask whether tickets can be booked here, whether an online reseller is legitimate, and what to check at the counter. This page covers the purchase decision rather than repeating the fare table.",
    highlights: [
      "This independent guide does not sell, reserve or issue tickets",
      "Official information: the operator Cable Car page and the base-station ticket counter",
      "Choose one-way, two-way or Express before reaching the counter",
      "Confirm the ticket cut-off and the last descent as separate questions"
    ],
    sections: [
      {
        heading: "Where the purchase happens",
        paragraphs: [
          "The operator publishes its fare and ride information on the Chandragiri Hills website and sells cable car tickets through its own channels at the Thankot-side boarding station. The hilltop Maps pin is a location reference for the upper station, not a ticket office or a pickup point you can drive to.",
          "Third-party travel pages, hotel desks and resellers may quote packages that bundle transport, meals or activities. Their totals are not the operator's published cable car fare, and this guide cannot verify what any intermediary includes."
        ]
      },
      {
        heading: "Choosing the product that fits the day",
        bullets: [
          "Two-way suits a normal hilltop visit because you return on the same cable car system",
          "One-way only makes sense if your onward transport from the hilltop is already arranged and confirmed",
          "Express Two Way is a separately listed product: confirm what it includes before paying extra",
          "Buy after checking the day's service status, lunch-break arrangement and last descent"
        ],
        callout: "A ticket is not a guarantee of uninterrupted service. Weather, maintenance and the operator's break schedule can change what is available after you arrive."
      },
      {
        heading: "A short checklist at the counter",
        paragraphs: [
          "Have the identity documents for every adult in your party ready, state your category clearly, and check the printed direction and product before leaving the window. Ask where the return queue forms and what time it closes.",
          "If children, wheelchair users or a large group are involved, ask about the cabin and accompaniment rules at the same time. The operator FAQ states that a child aged 11 or under needs a companion aged at least 15, that a cabin holds up to eight people, and that children under three count towards that number."
        ]
      }
    ],
    faqs: [
      { q: "Can I book Chandragiri cable car tickets on this website?", a: "No. This is an independent, unofficial information guide. It does not sell tickets, take payment or hold reservations. Use the operator's official channels." },
      { q: "Should I buy a one-way or return ticket?", a: "For a normal visit, return is the practical choice because road access is at the lower station. Buy one-way only when your onward route from the hilltop has been separately confirmed." },
      { q: "Do I need identification to buy a ticket?", a: "The operator's published discount policy refers to valid identification and nationality conditions. Carry documents for the category you claim and confirm at the counter which ones are accepted." }
    ],
    related: ["cable-car-ticket-price", "base-station", "last-cable-car", "first-time-visitor-guide"]
  },
  {
    slug: "cable-car-opening-hours",
    group: "tickets",
    priority: "P0",
    title: "Chandragiri Cable Car Opening Hours: Conflicting Timetables",
    description: "Chandragiri cable car opening hours as published on the operator FAQ and Cable Car pages, including the conflicting closing times and lunch breaks, checked 29 October 2026.",
    h1: "Chandragiri cable car opening hours",
    lead: "Two official pages currently give different closing times and lunch breaks. This page shows both instead of inventing a single schedule.",
    intro: "If you are planning around an early start, a lunch break or an evening descent, the exact hour matters. The honest answer is that the operator's own pages do not agree, and neither one states when it was last updated.",
    highlights: [
      "FAQ page: Monday–Thursday 08:00–18:00; Friday/Saturday 08:00–21:00; lunch break 12:30–13:30",
      "Cable Car page: Sunday–Friday 08:00–18:00; Saturday 08:00–20:00; break 12:00–13:00 on Sunday–Friday",
      "A Google Maps snapshot seen on 29 October 2026 showed an 18:00 closing time",
      "None of these establishes the last ticket, last ascent or last descent"
    ],
    sections: [
      {
        heading: "What each official page actually says",
        bullets: [
          "FAQ: Monday–Thursday 08:00–18:00, Friday and Saturday 08:00–21:00; Sunday is not covered in that answer; break 12:30–13:30",
          "Cable Car: Sunday–Friday 08:00–18:00, Saturday 08:00–20:00; break 12:00–13:00 on Sunday–Friday, with no break mentioned for Saturday and public holidays",
          "The timetable describes general service windows, not a live operations board"
        ],
        callout: "The homepage of this guide keeps both versions side by side with their sources and the date they were read. Choosing one as authoritative would be a guess, so we do not do it."
      },
      {
        heading: "Why a general timetable is not a last-ride time",
        paragraphs: [
          "The last ticket sold, the last cabin going up and the last cabin coming down are three different cut-offs. A published closing hour does not tell you which of them applies first on your date, nor whether a break interrupts the queue.",
          "Weather, maintenance and the lunch break can all change the practical window. A regional weather forecast cannot confirm that the line is operating, and a third-party Maps listing is a dated snapshot rather than an operator notice."
        ]
      },
      {
        heading: "A practical way to plan the day",
        paragraphs: [
          "Arrive with a buffer rather than at the published closing hour, and confirm today's service, the break, the ticket cut-off, the last ascent and the last descent as five separate questions on +977-9802069900.",
          "If you want to stay for a temple visit or a meal on the hill, settle the return ride first. The operator suggests allowing at least two to three hours on the hilltop, with travel to and from the lower station counted separately."
        ]
      }
    ],
    faqs: [
      { q: "What time does the Chandragiri cable car open?", a: "Both operator pages list an 08:00 start in their published timetables. Confirm the day's actual start with the operator, because the same pages disagree about closing times and breaks." },
      { q: "Is there a lunch break?", a: "The FAQ page lists 12:30–13:30, while the Cable Car page lists 12:00–13:00 on Sunday–Friday and mentions no break on Saturday and public holidays. Ask the operator which applies on your visit date." },
      { q: "Can I rely on the Google Maps closing time?", a: "No. A third-party snapshot seen on 29 October 2026 showed 18:00, but it does not resolve the disagreement between the operator's own pages or confirm the last descent." }
    ],
    related: ["last-cable-car", "cable-car-tickets", "cable-car-ticket-price", "half-day-trip"]
  },
  {
    slug: "last-cable-car",
    group: "tickets",
    priority: "P0",
    title: "Last Cable Car Down from Chandragiri: What to Confirm",
    description: "Why the last Chandragiri cable car down cannot be inferred from published closing times, and the five questions to ask the operator before an evening hilltop visit.",
    h1: "The last cable car down from Chandragiri",
    lead: "There is no independently confirmed last-descent time. Here is what to ask, and why the published timetable is not enough.",
    intro: "The risk of an evening visit is not the ride up. It is discovering at the top that the return queue has closed. This page turns that risk into a short confirmation routine.",
    highlights: [
      "Last ticket, last ascent and last descent are three separate cut-offs",
      "Operator FAQ and Cable Car pages conflict on closing times and lunch breaks",
      "Cable car contact published by the operator: +977-9802069900",
      "Settle the descent before booking a hilltop meal or sunset plan"
    ],
    sections: [
      {
        heading: "Three different closing moments",
        paragraphs: [
          "A ticket counter can stop selling before the last cabin departs; the last ascent can end before the last descent; and a published closing hour may refer to the site rather than to any of those. Treat them as three answers, not one.",
          "Neither operator page states a last-ride time, and the two pages disagree on the general closing hour. For that reason this guide does not publish a guessed descent time or a countdown clock."
        ]
      },
      {
        heading: "Questions to ask before you go up",
        bullets: [
          "Is the cable car operating today, and is any break or maintenance expected?",
          "What time does ticket sales close?",
          "What is the last cabin going up?",
          "What is the last cabin coming down, and where does the return queue form?",
          "If service is interrupted, what is the alternative way off the hill?"
        ],
        callout: "Also confirm road transport back from the lower station. A late descent is only useful if a taxi or your own vehicle is still available at the Thankot-side base station."
      },
      {
        heading: "If you plan to stay late",
        paragraphs: [
          "Temple visits, sunset photography and hilltop dining all push a schedule past the point where the return queue is comfortable. Do these after you have a written or verbal answer about the last descent, not before.",
          "Weather can close a line or reduce visibility without implying that the published timetable still holds. The regional forecast shown on the homepage is a model for the area, not an operating-status feed for the cable car."
        ]
      }
    ],
    faqs: [
      { q: "What is the last cable car time down from Chandragiri?", a: "No current last-descent time has been independently confirmed. The operator's FAQ and Cable Car pages disagree on closing hours, so ask the cable car line directly about the ticket cut-off, last ascent and last descent." },
      { q: "Can I stay on the hill after the cable car stops?", a: "That depends on the operator's current arrangements and on the hilltop facilities, which are separate from the cable car. Confirm access, return options and any overnight arrangement before relying on it." },
      { q: "Does the weather forecast tell me whether the last ride will run?", a: "No. A regional model cannot confirm wind along the line, maintenance decisions or safe operation. Only the operator can confirm service on the day." }
    ],
    related: ["cable-car-opening-hours", "cable-car-tickets", "hilltop-restaurants", "kathmandu-to-chandragiri"]
  },
  {
    slug: "top-station",
    group: "tickets",
    priority: "P0",
    title: "Chandragiri Cable Car Top Station: Hilltop Visitor Guide",
    description: "What the Chandragiri cable car Top Station actually is, which hilltop facilities sit there, and why its Google Maps pin is not the road boarding point.",
    h1: "Chandragiri Cable Car Top Station",
    lead: "The Top Station is the hilltop destination reached by cable car, not the place where road transport drops you off.",
    intro: "The full attraction name is Chandragiri Cable Car Top Station. This page separates the upper station, the lower boarding station and the collection of hilltop facilities that visitors often treat as one ticketed site.",
    highlights: [
      "Road arrivals board at the Thankot-side Bottom Station, not at the Top Station",
      "The Maps point is a third-party location reference for the upper station",
      "Hilltop facilities include the temple, viewing areas, food, resort and activities",
      "Operator guidance suggests allowing at least two to three hours on the hill"
    ],
    sections: [
      {
        heading: "What you find at the upper station",
        paragraphs: [
          "The operator describes the cable car as a service from the lower station to a hilltop complex on Chandragiri Hill. Within that complex, Bhaleshwor Mahadev Temple, viewing areas and a view tower, food and rest facilities, a resort, children's activities and paid adventure experiences are separate offerings.",
          "A cable car timetable or fare does not tell you whether a particular facility is open, what it costs, or whether it has its own queue. Confirm those on the day, especially for the temple's worship times and for any activity with age or safety rules."
        ]
      },
      {
        heading: "Using the Maps pin correctly",
        paragraphs: [
          "The Google Maps reference for this guide points to the upper station area off Kulekhani-Phakhel-Matatirtha Road in Chandragiri, Bagmati Province 44600. It is a dated third-party snapshot, not a surveyed entrance, a ticket counter address or a driving destination.",
          "For a road trip, navigate to the lower boarding station on the Thankot side using the operator's Route to the Hills guidance. Setting the upper station as a car navigation target is the most common way visitors end up at the wrong place."
        ]
      },
      {
        heading: "Planning time at the top",
        bullets: [
          "Allow at least two to three hours on the hilltop as suggested by the operator, plus travel to and from the lower station",
          "Settle the last descent before adding a meal, sunset viewing or a temple visit",
          "Views depend on cloud, haze and wind; no specific Himalayan peak or clear valley panorama is guaranteed",
          "Hilltop paths, steps and weather exposure are worth checking in advance if anyone in your party has limited mobility"
        ]
      }
    ],
    faqs: [
      { q: "Is the Top Station where I buy my ticket and board?", a: "No. Road arrivals board at the Thankot-side Bottom Station. The Top Station is the hilltop destination reached by the cable car, and its Maps pin is not a verified boarding or parking address." },
      { q: "Is there an entrance fee for the Top Station itself?", a: "The published fares are for cable car journeys by category and direction. Whether any hilltop facility charges separately is a question for that facility and the operator on the day." },
      { q: "How long should I spend at the Top Station?", a: "The operator suggests at least two to three hours for the hilltop visit. Add the road journey, queueing and waiting time separately, and confirm the last descent first." }
    ],
    related: ["base-station", "chandragiri-hills", "bhaleshwor-mahadev-temple", "view-tower"],
    image: {
      src: "/images/chandragiri-top-station.jpg",
      alt: "View across the Chandragiri hilltop station area with hills beyond, photographed in 2016",
      caption: "Historical photograph of the Chandragiri Cable Car top station area, taken 25 December 2016 by Roman Raghu Shrestha (Wikimedia Commons). It shows the hilltop setting, not current operating conditions."
    }
  },
  {
    slug: "base-station",
    group: "tickets",
    priority: "P0",
    title: "Chandragiri Cable Car Base Station: Boarding at Thankot Side",
    description: "Where the Chandragiri cable car Bottom Station is, what the arrival and boarding sequence looks like, and how to set your navigation destination correctly.",
    h1: "Chandragiri cable car Base Station",
    lead: "The Bottom Station on the Thankot side is the road-access boarding point. The Top Station is where the cable car takes you.",
    intro: "Searches for a base station usually come from one practical problem: where should a taxi, bus or private car actually go? This page covers the lower station's role, the arrival sequence and the return arrangement.",
    highlights: [
      "Road arrivals use the Thankot-side Bottom Station",
      "The operator publishes a Route to the Hills page for directions",
      "Ticket purchase, boarding assistance and queues happen at the lower station",
      "Agree the return pickup point before going up"
    ],
    sections: [
      {
        heading: "Why the two stations must stay separate in your plan",
        paragraphs: [
          "The operator describes the cable car as a link between a lower station and a hilltop complex. The hilltop Maps reference is a third-party point for the upper station; it is not a verified ticket counter, car park or pickup point.",
          "When entering a destination into a map app, use the operator's Route to the Hills guidance for the Thankot-side station. If a driver proposes the hilltop pin as the destination, clarify that you need the boarding station."
        ]
      },
      {
        heading: "The arrival sequence",
        bullets: [
          "Confirm today's service, break and last return ride before paying for the trip up",
          "Check your fare category and have the relevant documents ready at the ticket counter",
          "Ask about boarding assistance, cabin rules and queue location if anyone needs help",
          "Note where the return queue forms and where your driver will wait"
        ],
        callout: "The operator says staff assist wheelchair users to board and disembark. That is not a survey of every path, toilet, ramp or temple approach on the hilltop."
      },
      {
        heading: "Coming back down",
        paragraphs: [
          "The lower station is also where your road journey resumes. Agree a meeting point and a latest pickup time with your driver, and keep the last-descent answer in mind rather than the general closing hour.",
          "This independent guide has not verified bus numbers, taxi fares, road conditions or always-available parking. Those change locally and should be confirmed with the operator or your transport provider on the day."
        ]
      }
    ],
    faqs: [
      { q: "Is the base station the same as the Top Station on Google Maps?", a: "No. The Top Station is the hilltop destination. The base or Bottom Station is the Thankot-side boarding point used by road arrivals, and it is a different location." },
      { q: "Can I park and buy tickets at the Top Station pin?", a: "The upper station Maps pin is not a verified parking or ticket-counter address. Use the operator's Route to the Hills guidance for the lower station and confirm parking locally." },
      { q: "Do buses stop right at the ticket counter?", a: "This guide has not verified bus routes, stops or frequencies. Confirm the final leg with the operator or a local transport provider before relying on public transport." }
    ],
    related: ["top-station", "thankot-to-cable-car", "kathmandu-to-chandragiri", "parking-and-driving"]
  },
  {
    slug: "kathmandu-to-chandragiri",
    group: "transport",
    priority: "P0",
    title: "Kathmandu to Chandragiri Cable Car: Route and Return Planning",
    description: "How to plan the trip from Kathmandu to the Chandragiri cable car: reach the Thankot-side boarding station first, then ride up, with time buffers and a return plan.",
    h1: "Kathmandu to Chandragiri cable car",
    lead: "Every road journey from Kathmandu ends at the Thankot-side Bottom Station. The cable car is the final leg, not the whole route.",
    intro: "This page is about sequencing: getting to the correct station, leaving enough time for the timetable's uncertainties, and making sure the return journey still works after a hilltop visit.",
    highlights: [
      "Set the destination to the Thankot-side boarding station, not the hilltop Maps pin",
      "Travel time to the hills is separate from the ride, queueing and hilltop visit",
      "The operator suggests at least two to three hours on the hilltop",
      "Arrange the return ride down and the road pickup before departure"
    ],
    sections: [
      {
        heading: "The two legs of the trip",
        paragraphs: [
          "Leg one is the road journey from Kathmandu to the lower station on the Thankot side. Leg two is the cable car ascent of roughly 2.5 km, described by the operator as about ten minutes of ride time. That figure covers the ride only, not the ticket queue, a lunch break, a weather hold or waiting for a cabin.",
          "No fixed door-to-door duration is claimed here. Traffic, roadworks and the operator's break schedule all change the real total, so a plan built backwards from the last descent is safer than one built forwards from a departure hour."
        ]
      },
      {
        heading: "What to settle before you leave Kathmandu",
        bullets: [
          "Today's operating status, break arrangement and ticket cut-off",
          "Last ascent and, more importantly, last descent",
          "The correct navigation target: the lower boarding station",
          "Whether your driver waits, returns at a set time, or is booked one-way only",
          "A fallback if service is suspended after you arrive"
        ]
      },
      {
        heading: "Building a realistic half-day",
        paragraphs: [
          "A workable order is: reach the lower station, confirm the return cut-off, buy the appropriate ticket, ride up, visit the temple and viewing areas, allow time for food or photographs, then return to the lower station with a buffer.",
          "If you want a full day out, add nearby stops around Thankot or Matatirtha either before or after the cable car, but keep the hilltop visit inside the confirmed service window."
        ]
      }
    ],
    faqs: [
      { q: "How long does it take to get from Kathmandu to Chandragiri?", a: "A precise door-to-door time is not verified here. The operator describes about ten minutes for the cable car ride itself; road travel, queues, breaks and the hilltop visit are additional." },
      { q: "Where should I tell my driver to go?", a: "To the Thankot-side Bottom Station used for boarding, following the operator's Route to the Hills guidance. The hilltop station Maps pin is not a driving destination." },
      { q: "Can I do Chandragiri as a half-day trip from Kathmandu?", a: "Yes in principle, but only with a confirmed last-descent time and a return vehicle. See the half-day itinerary for an order of steps that keeps the return ride first." }
    ],
    related: ["thankot-to-cable-car", "half-day-trip", "day-trip-from-kathmandu", "taxi-to-chandragiri"]
  },
  {
    slug: "thankot-to-cable-car",
    group: "transport",
    priority: "P0",
    title: "Thankot to Chandragiri Cable Car Base Station",
    description: "The final road leg from Thankot to the Chandragiri cable car boarding station: which destination to set, what remains unverified locally, and how to plan the return.",
    h1: "Thankot to the cable car station",
    lead: "Thankot is the useful landmark for the last road leg. The boarding station is your destination, not the hilltop pin.",
    intro: "Many route questions collapse at Thankot: visitors know roughly where they are, but not which pin to follow or where a vehicle can drop them. This page covers that final decision without inventing turn-by-turn directions.",
    highlights: [
      "Thankot is the commonly referenced approach area for the lower station",
      "Use the operator Route to the Hills page rather than the upper station Maps pin",
      "Final drop-off point, local fares and road conditions are confirmed locally",
      "Set the return meeting point before boarding"
    ],
    sections: [
      {
        heading: "Setting the right destination",
        paragraphs: [
          "The operator publishes a Route to the Hills page for reaching the boarding area. Use that as the authoritative starting point for directions, then ask your driver to confirm the exact drop-off point on the day.",
          "The Google Maps reference used by this guide points at the upper station on Chandragiri Hill. It is a third-party location snapshot for the destination, not a route to the ticket counter. Confusing the two is the main cause of wasted trips."
        ]
      },
      {
        heading: "What this guide does not claim to verify",
        bullets: [
          "Bus numbers, frequencies or whether a service stops directly at the counter",
          "Taxi or ride-hail fares for the final leg",
          "Current road surface, diversions or parking availability",
          "The exact walking distance from a drop-off point to the queue"
        ],
        callout: "Those details change with local conditions. Confirm them with the operator on +977-9802069900 or with your transport provider rather than relying on an old listing."
      },
      {
        heading: "The return leg",
        paragraphs: [
          "Ask the driver where they will wait and until what time, and compare that with the last descent you confirmed. If you are using public transport, check the last available service back towards Kathmandu before you ride up.",
          "Thankot and the surrounding Matatirtha area can be combined with the cable car visit, but keep those stops outside the confirmed cable car window so a delayed descent does not strand you."
        ]
      }
    ],
    faqs: [
      { q: "Is Thankot the same place as the cable car base station?", a: "Thankot is the approach area commonly used as a landmark for the lower station. For the exact boarding point, follow the operator's Route to the Hills guidance and confirm locally." },
      { q: "Can I drive straight to the Top Station?", a: "No. Road arrivals board at the lower station and reach the hilltop by cable car. The upper station Maps pin is not a verified driving destination." },
      { q: "Is there a shuttle from Thankot to the ticket counter?", a: "A shuttle service is not verified by this guide. Ask the operator or your transport provider about the final leg on the day of travel." }
    ],
    related: ["base-station", "kathmandu-to-chandragiri", "public-transport", "thankot-travel-guide"]
  }
];
