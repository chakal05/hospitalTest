import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey:
    'AIzaSyAHk7cRgtftDKrf_Z8eZAo4cjFsb0XJ2gE',
  authDomain: 'expensify-2c9e2.firebaseapp.com',
  databaseURL:
    'https://expensify-2c9e2.firebaseio.com',
  projectId: 'expensify-2c9e2',
  storageBucket: 'expensify-2c9e2.appspot.com',
  messagingSenderId: '994745724382',
  appId:
    '1:994745724382:web:2ba71d6eced37c3ce9014f',
  measurementId: 'G-W51K7MZW5M'
};

// Insert data into database

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// const newJobPost = {
//   id: '12345678',
//   email: 'foo@bar.com',
//   transaction: {
//     id: 'TRANSACTION GUID'
//   },
//   jobPositionPosting: {
//     id: '46-123456-1234-123-123',
//     status: 'active'
//   },
//   hiringOrg: {
//     name: 'Company Name',
//     id: '46-123456-1234',
//     url: 'http://example.org',
//     description: 'Organizational unit description'
//   },
//   hiringOrgContact: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '0180',
//     addressLine:
//       'Birger Jarlsgatan 58, 11356, Stockholm',
//     streetName: 'Birger Jarlsgatan 58'
//   },
//   postDetail: {
//     startDate: '2018-09-01',
//     endDate: '2018-12-01',
//     recruiterName: 'Alex Smith',
//     recruiterEmail: 'alexsmith@example.org'
//   },
//   jobPositionTitle: {
//     title: 'Job Title'
//   },
//   jobPositionPurpose: {
//     purpose: 'Job purpose'
//   },
//   jobPositionLocation: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '0180',
//     addressLine:
//       'Birger Jarlsgatan 58, 11356, Stockholm',
//     streetName: 'Birger Jarlsgatan 58'
//   },
//   classification: {
//     scheduleType: 'part',
//     duration: 'temporary',
//     scheduleSummaryText: 'Schedule Summary',
//     durationSummaryText: 'Duration Summary',
//     termLength: 2
//   },
//   compensationDescription: {
//     currency: 'SEK',
//     salaryType: 1,
//     benefits: 'Benefits',
//     summary: 'summary text'
//   },
//   qualificationsRequiredSummary: {
//     summary: 'Summary of qualifications',

//     hasDriverLicence: {
//       type: 'license',
//       description: 'DriversLicense',
//       category: 'B'
//     },
//     hasExperience: {
//       type: 'experience',
//       required: true
//     },
//     hasACar: {
//       type: 'equipment',
//       description: 'Car'
//     }
//   },

//   qualificationsPreferredSummary: {
//     summary: 'Preferred qualifications'
//   },

//   applicationMethods: {
//     byWeb: {
//       url: 'http://example.org'
//     },
//     byEmail: {
//       email: 'foo@example.org'
//     },
//     numberToFill: {
//       number: 1
//     },
//     hiringOrgDescription: {
//       description: 'Hiring org description'
//     },
//     occupationGroup: {
//       code: 7652
//     }
//   }
// };

// const newJobPost1 = {
//   id: '2',
//   email: 'bar@bds.com',
//   transaction: {
//     id: 'TRANSACTION GUID'
//   },
//   jobPositionPosting: {
//     id: '46-123456-1234-123-342',
//     status: 'active'
//   },
//   hiringOrg: {
//     name: 'Willys AB',
//     id: '46-123456-1234',
//     url: 'http://willys.org',
//     description: 'Organizational unit description'
//   },
//   hiringOrgContact: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '0180',
//     addressLine:
//       'Birger Jarlsgatan 58, 11356, Stockholm',
//     streetName: 'Birger Jarlsgatan 58'
//   },
//   postDetail: {
//     startDate: '2018-09-01',
//     endDate: '',
//     recruiterName: 'Smith Alex',
//     recruiterEmail: 'smithAlex@example.org'
//   },
//   jobPositionTitle: {
//     title: 'Web developer'
//   },
//   jobPositionPurpose: {
//     purpose: 'Web and mobile application'
//   },
//   jobPositionLocation: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '2910',
//     addressLine:
//       'Annita Johnson 28, 11356, Stockholm',
//     streetName: 'Annita Johnson 28'
//   },
//   classification: {
//     scheduleType: 'full',
//     duration: 'permanent',
//     scheduleSummaryText: 'Schedule Summary',
//     durationSummaryText: 'Duration Summary',
//     termLength: 2
//   },
//   compensationDescription: {
//     currency: 'SEK',
//     salaryType: 1,
//     benefits: 'Benefits',
//     summary: 'summary text'
//   },
//   qualificationsRequiredSummary: {
//     summary: 'Summary of qualifications',

//     hasDriverLicence: {
//       type: 'license',
//       description: 'DriversLicense',
//       category: 'B'
//     },
//     hasExperience: {
//       type: 'experience',
//       required: true
//     },
//     hasACar: {
//       type: 'equipment',
//       description: 'Car'
//     }
//   },

//   qualificationsPreferredSummary: {
//     summary: 'Preferred qualifications'
//   },

//   applicationMethods: {
//     byWeb: {
//       url: 'http://fafa.org'
//     },
//     byEmail: {
//       email: 'foo@rerme.org'
//     },
//     numberToFill: {
//       number: 11
//     },
//     hiringOrgDescription: {
//       description:
//         'Willys is the bigger seller of food product in SWeden with more 2000 employees'
//     },
//     occupationGroup: {
//       code: 5454
//     }
//   }
// };

// const newJobPost2 = {
//   id: '2',
//   email: 'dsd@gf.com',
//   transaction: {
//     id: 'TRANSACTION GUID'
//   },
//   jobPositionPosting: {
//     id: '23-454545-1234-123-342',
//     status: 'active'
//   },
//   hiringOrg: {
//     name: 'Fanataz AB',
//     id: '46-123456-1234',
//     url: 'http://fantas.org',
//     description:
//       'Web and mobile development company'
//   },
//   hiringOrgContact: {
//     countryCode: 'SE',
//     postalCode: '43432',
//     municipality: '9823',
//     addressLine:
//       'Drottgningstorget 32, 11356, Gothenburg',
//     streetName: 'Drottningstorget'
//   },
//   postDetail: {
//     startDate: '2020-06-01',
//     endDate: '',
//     recruiterName: 'Samatar Ali',
//     recruiterEmail: 'samatarAli@example.org'
//   },
//   jobPositionTitle: {
//     title: 'Software developer'
//   },
//   jobPositionPurpose: {
//     purpose: 'Web and mobile application'
//   },
//   jobPositionLocation: {
//     countryCode: 'SE',
//     postalCode: '11356',
//     municipality: '2910',
//     addressLine:
//       'Drottgningstorget 32, 11356, Gothenburg',
//     streetName: 'Drottgningstorget 32'
//   },
//   classification: {
//     scheduleType: 'full',
//     duration: 'permanent',
//     scheduleSummaryText: 'Schedule Summary',
//     durationSummaryText: 'Duration Summary',
//     termLength: 2
//   },
//   compensationDescription: {
//     currency: 'SEK',
//     salaryType: 1,
//     benefits: 'Benefits',
//     summary: 'summary text'
//   },
//   qualificationsRequiredSummary: {
//     summary: 'Summary of qualifications',

//     hasDriverLicence: {
//       type: 'license',
//       description: 'DriversLicense',
//       category: 'B',
//       required: false
//     },
//     hasExperience: {
//       type: 'experience',
//       required: true
//     },
//     hasACar: {
//       type: 'equipment',
//       description: 'Car',
//       required: false
//     }
//   },

//   qualificationsPreferredSummary: {
//     summary: 'Preferred qualifications'
//   },

//   applicationMethods: {
//     byWeb: {
//       url: 'http://fafa.org'
//     },
//     byEmail: {
//       email: 'foo@rerme.org'
//     },
//     numberToFill: {
//       number: 11
//     },
//     hiringOrgDescription: {
//       description:
//         'Willys is the bigger seller of food product in SWeden with more 2000 employees'
//     },
//     occupationGroup: {
//       code: 5454
//     }
//   }
// };

//database.ref('jobPostList').push(newJobPost1);
//database.ref('jobPostList').push(newJobPost2);
