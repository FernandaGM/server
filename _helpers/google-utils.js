import {google} from 'googleapis';

const googleConfig = {
  clientId: '<GOOGLE_CLIENT_ID>', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: '<GOOGLE_CLIENT_SECRET>', // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'http://localhost/google-auth' // this must match your google api settings
};