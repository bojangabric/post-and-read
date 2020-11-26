import nextConnect from 'next-connect';
import middleware from '../../../lib/database';
import { format } from 'date-fns';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  const { title, post, author, picture, avatar } = req.body;
  let doc = await req.db.collection('posts').insertOne({
    title: title,
    post: post,
    author: author,
    picture: picture,
    avatar: avatar,
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
  });
  res.json(doc);
});

export default handler;
