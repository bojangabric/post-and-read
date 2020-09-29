import nextConnect from 'next-connect';
import middleware from '../../../lib/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { title, post, author } = req.body;
  let doc = await req.db
    .collection('posts')
    .insertOne({ title: title, post: post, author: author, picture: 'https://via.placeholder.com/1920x1080' });
  res.json(doc);
});

export default handler;
