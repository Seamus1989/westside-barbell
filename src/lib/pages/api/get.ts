import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { body, headers } = req;

    // eslint-disable-next-line no-console
    console.log('body', body);
    // eslint-disable-next-line no-console
    console.log('headers', headers);

    // TODO Check headers for auth, attach string and add to secrets in vercel

    const token = headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }
    // TODO Check token is valid. Do this now please.
    // if (token !== process.env.RETOOL_API_TOKEN) {
    if (token !== 'test_token') {
      throw new Error('Invalid token.');
    }

    res.status(200).send({
      message: 'Payment data updated successfully.',
      data: { hello: 'world' },
    });
  } catch (error) {
    res.status(500).send({
      message: (error as Error)?.message || 'There was an unknown error.',
    });
    throw error;
  }
};

export default handler;
