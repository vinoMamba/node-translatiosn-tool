import * as https from 'https';
import * as querystring from 'querystring';
import md5 = require('md5');

export const translate = (word) => {

    const appid = '???';
    const secretKey = '???';
    const salt = Math.random();
    const sign = md5(appid + word + salt + secretKey);
    const query: string = querystring.stringify({
        q: word,
        from: 'en',
        to: 'zh',
        appid,
        salt,
        sign
    });
    const options = {
        hostname: 'api.fanyi.baidu.com',
        port: 443,
        path: `/api/trans/vip/translate?${query}`,
        method: 'GET'
    };
    const req = https.request(options, (res) => {

        res.on('data', (d) => {
            const result = process.stdout.write(d);
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
};
