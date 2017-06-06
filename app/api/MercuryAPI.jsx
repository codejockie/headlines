import mercuryParser from 'mercury-parser';

const API_KEY = 'z1Gv8hCJVTTyzednIRKiOOrracFirvNkxgLn1sCP';
const mercury = mercuryParser(API_KEY);

export default function parseArticle(url) {
  return mercury.parse(url)
    .then(response => { console.log(response); return response; })
    .catch(error => error);
}
