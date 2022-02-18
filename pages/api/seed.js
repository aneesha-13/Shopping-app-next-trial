import nc from 'next-connect';
import db from '../../database/db';
import data from '../../utils/data';
import User from '../../models/user';

const handler = nc();

handler.get(async (req, res) => {
//   return res.send({ message: 'already seeded' });
 console.log(data);
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;