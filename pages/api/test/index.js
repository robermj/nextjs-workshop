export default function handler(req, res) {
  if(req.method === 'POST') {
    res.status(200).json({ name: 'This is a test from POST request' })
  } else {
    res.status(200).json({ name: 'This is a test from GET request' })
  } 
}
