import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey:
  process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:
   process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId:
   process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();



//Add a new job post to dB manually


// const newJobPost = {
//     compensation:{
//         salaryType: 'Fast månads- vecko- eller timlön'
//     },
//   jobPositionPosting: {
//     id: '23-454545-1234-123-342',
//     status: 'active',
//   },
//   hiringOrg: {
//     name: 'Fanataz AB',
//     id: '46-123456-1234',
//     url: 'http://fantas.org',
//     description:
//       'Web and mobile development company',
//   },
//   postDetail: {
//     published: '1 april 2020 at 09:43',
//     startDate: '2020-06-01',
//     recruiterName: 'Samatar Ali',
//     recruiterEmail: 'samatarAli@example.org',
//   },
//   jobPositionTitle: {
//     title: 'Sjuksköterska, grundutbildad',
//   },
//   jobPositionPurpose: {
//     purpose: `DEDICARE söker för längre uppdrag med start omgående och över sommaren tom. v.33. Behovet är tre leg.sjuksköterskor med minst två års yrkeserfarenhet inom HSV/ÄBO/SÄBO.
//     Vi söker dig med bostadsort inom/nära vgr / södra Sverige. Prova något annat, träffa nya kollegor och samtidigt kompetensutveckla dig. 
//     Utöver konkurrenskraftig lön har vi möjlighet att stå för resor och boende om uppdraget är på annan ort. Då vi har kollektivavtal får du även tjänstepension. Du har viss möjlighet att påverka ditt eget schema. Uppdraget kommer att vara förlagt på rotationsschema dag, kväll, helg och  enbart natt.
//     Tveka inte att höra av dig så kan vi berätta mer. `,
//   },
//   jobPositionLocation: {
//     city: 'Trollhättan ',
//     region: 'Västra Götalands län',
//   },
//   hiringOrgContact: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '2910',
//     addressLine:
//       'Ringvägen 100, 11860 , Stockholm',
//     streetName: 'Ringvägen 100',
//   },
//   classification: {
//     extent: 'Deltid',
//     duration: 'Tillsvidare',
//     TypeOfEmployment:
//       'Tillsvidare- eller tidsbegränsad anställning',
//   },
//   qualificationsRequiredSummary: {
//     education: 'Sjuksköterska, grundutbildad',

//     hasDriverLicence: {
//       description: '',
//       category: ' B',
//     },
//     hasExperience: {
//      type: 'erfarenhet efterfrågas',
//     },
//     hasACar: {
//        type:'B',
//       description: 'Egen bil krävs',
//     },
//   },

//   qualificationsPreferredSummary: {
//     summary: 'Preferred qualifications',
//   },

//   applicationMethods: {
//     byWeb: {
//       url: 'http://fafa.org',
//     },
//     byEmail: {
//       email: 'foo@rerme.org',
//     },
//     numberToFill: {
//       number: 11,
//     },
//     hiringOrgDescription: {
//       description: '',
//     },
//     occupationGroup: {
//       code: 5454,
//     },
//   },
// };

// database.ref('jobPostList').push(newJobPost);

export { firebase, database as default };