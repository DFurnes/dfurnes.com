import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { path = '/', token } = req.query;

  // Keep it secret, keep it safe!
  if (token !== process.env.PREVIEW_MODE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Ensure we've been given a safe redirect path:
  const ALLOWED_PATHS = /^\/(notes\/[a-z0-9]+(?:-[a-z0-9]+)*)?$/;
  if (typeof path !== 'string' || !ALLOWED_PATHS.test(path)) {
    return res.status(401).json({ message: 'Invalid path.' });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: path });
  res.end();
};
