export default function handler(req, res) {
  const { query } = req
  const { id } = query

  if(req.method === 'POST') {
    res.status(200).json({ name: `This is a test with a specific ID ${id} from POST request` })
  } else {
    res.status(200).json({ name: `This is a test with a specific ID ${id} from GET request` })
  } 
}
