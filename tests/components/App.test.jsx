import React from 'react';
import { shallow } from 'enzyme';

import App from '../../app/components/App.jsx';
import SourceSidebar from '../../app/components/Sidebar.jsx';

describe('<App />', () => {
  beforeEach(() => {
    localStorage.setItem('user', '{"uid":"QYsgrOWPuwZhCbhFO7LdG0uza8y1","displayName":"Kennedy Nwaorgu","photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","email":"devjckennedy@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"providerData":[{"uid":"109923608047584920583","displayName":"Kennedy Nwaorgu","photoURL":"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg","email":"devjckennedy@gmail.com","providerId":"google.com"}],"apiKey":"AIzaSyA9Pst-WyKwvaUWsVe7bK_Uc_XP4p33aRw","appName":"[DEFAULT]","authDomain":"headlines-app.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyA9Pst-WyKwvaUWsVe7bK_Uc_XP4p33aRw","refreshToken":"ACXxpGFp0c_oxqzB4RC-1lxlXttwC_BfA4O8GSkfpHbAopOBVVQxG1EhvP54vn1rNtFoVtwe906K7gqgbEV3L5u49wWaTenJgnRakJcN6S_Ac9Lvg7oDbui6LW4_DEl9cxfq4MpyLxfB08h9HE8GWYE5igZiwF_8Ao05xMi6w3LQDKA_vGUGL5xWvj1ZI_P3z5EbNDaBvheidw5dvjVBE-M8rIHV0x-lLRq9-cC51yKFoNvYQ_vWkO5mEk05iPORCBQWBuA9C75ZlxsQ6fbtNcGO8Lh_upwP2jTCjeW9MgMPiF2I06DJ00MizB7-JxbG60SbbLFS3Oi7cAaBvyZW65-I24nFAN1H93gLIHTk4YDCTCdS0cKFUZE","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImZmZDY2NDljYmE3MjE5NjcyYmE3YTI2OTM0MDkyNzJhMzJjOTdkNTUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaGVhZGxpbmVzLWFwcCIsIm5hbWUiOiJLZW5uZWR5IE53YW9yZ3UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1YZFVJcWRNa0NXQS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS80MjUycnNjYnY1TS9waG90by5qcGciLCJhdWQiOiJoZWFkbGluZXMtYXBwIiwiYXV0aF90aW1lIjoxNDk4MDQyNzg2LCJ1c2VyX2lkIjoiUVlzZ3JPV1B1d1poQ2JoRk83TGRHMHV6YTh5MSIsInN1YiI6IlFZc2dyT1dQdXdaaENiaEZPN0xkRzB1emE4eTEiLCJpYXQiOjE0OTgwNDI3ODYsImV4cCI6MTQ5ODA0NjM4NiwiZW1haWwiOiJkZXZqY2tlbm5lZHlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDk5MjM2MDgwNDc1ODQ5MjA1ODMiXSwiZW1haWwiOlsiZGV2amNrZW5uZWR5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.if-lAbb-q8EJJkYvcdXDZPatZBu3aBQZYLvVp8o3rxIng17Ln7ha1Hnzn35gnAFapOwMIw2xYFs5QGwYZ6DFk7oAGgz-xOU3f-hyNX2xZo8c3MZA8o6WfxzTCRSZhooJORDhFqnP0qagQTmnvXStsqyWQOMnN2pCyZpF5Q5-tiSUgYwB4OLq1bQA4gnm8ZFQFw179PbvAdSun5D4kSsgepASy-XkhkCPJ9s288XXBQHfEsLBMdPqj12Pw3JREmVpZcsyi1EvLylqZw7xd-xUCFzPvL4Ru4y8CeBs4DWYIJ0-3jsMGan301qnbcLhLqRxhQ6XdRhE9T9_uy2GrhSTUA","expirationTime":1498046386515},"redirectEventId":null}');
  });

  it('renders correctly to page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });

  it('should <SourceSidebar /> component', () => {
    const wrapper = shallow(<App />);
    const sidebar = wrapper.find(SourceSidebar);
    expect(sidebar).to.have.length.of(1);
  });
});
