import CryptoJS from 'crypto-js';
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
    const secretKey = 'my-secret-key';
    const bankInfo = {
      accountNumber: '1234567890',
      routingNumber: '9876543210',
      accountName: 'John Doe',
    };
    const bankInfoString = JSON.stringify(bankInfo);

    const encryptedBankInfo = CryptoJS.AES.encrypt(
      bankInfoString,
      secretKey
    ).toString();

    // eslint-disable-next-line no-console
    console.log('encryptedBankInfo', encryptedBankInfo);

    const decryptedBankInfo = CryptoJS.AES.decrypt(
      encryptedBankInfo,
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    const bankInfoObject = JSON.parse(decryptedBankInfo);
    // eslint-disable-next-line no-console
    console.log('bankInfoObject', bankInfoObject);

    res.status(200).send({
      message: 'Payment data updated successfully.',
      data: { hello: 'world', ...bankInfo, encrypt: encryptedBankInfo },
    });
  } catch (error) {
    res.status(500).send({
      message: (error as Error)?.message || 'There was an unknown error.',
    });
    throw error;
  }
};

export default handler;
