// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async (req, res) => {
  const url = req.query.url;
  const response = await axios.get(url);
  res.status(200).json(response.data);
};
