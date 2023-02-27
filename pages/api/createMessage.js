// This Next.js template already is configured to write with this Sanity Client
import {client} from '../../sanity' 

export default async function createMessage(req, res) {
  // Destructure the pieces of our request
  const { _id, name, email, message} = JSON.parse(req.body)
  try {
    // Use our Client to create a new document in Sanity with an object  
    await client.create({
      _type: 'message',
      post: {
        _type: 'reference',
        _ref: _id,
      },
     name,
     email,
     message
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit message`, err})
  }
    
  return res.status(200).json({ message: 'Comment message' })
}