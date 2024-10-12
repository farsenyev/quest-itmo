import CryptoJS from 'crypto-js';

const createHmacSHA256 = (secretKey: string, queryString: string) => {
  const hmac = CryptoJS.HmacSHA256(queryString, secretKey);

  let base64Hmac = CryptoJS.enc.Base64.stringify(hmac);

  return base64Hmac.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const verifyAuthParams = (authHeader: string | null) => {
  if (!authHeader) {
    return false;
  }

  let sign;
  const vkAuthParams = [];

  const authHeaderDecoded = authHeader.replace('VK ', '');

  const authParams = Buffer.from(authHeaderDecoded, 'base64')
    .toString()
    .slice(1);

  for (const param of authParams.split('&')) {
    const [key, value] = param.split('=');

    if (key === 'sign') {
      sign = value;
    } else if (key.startsWith('vk_')) {
      vkAuthParams.push({ key, value });
    }
  }

  if (!sign || !vkAuthParams.length) {
    return false;
  }

  const queryString = vkAuthParams
    .sort((a, b) => a.key.localeCompare(b.key))
    .reduce((acc, { key, value }, idx) => {
      return (
        acc + (idx === 0 ? '' : '&') + `${key}=${encodeURIComponent(value)}`
      );
    }, '');

  const paramsHash = createHmacSHA256(
    process.env.VK_APP_KEY as string,
    queryString
  );

  return paramsHash === sign;
};
