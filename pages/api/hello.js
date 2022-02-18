// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../database/db"

export default async function handler(req, res) {
  await db.connect();
  await db.disconnect();
  res.status(200).json({ name: 'John Doe' })
}
