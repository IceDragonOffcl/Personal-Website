const fetch = require('isomorphic-unfetch')

let key1 = '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';
let key2 = 'RjyonDEVH1Hpaq0NSrKyMWuLa1wmPK4KbGqv';

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/IceDragonOffcl/repos', {
        headers: {
            Authorization: 'token '+key1+key2
        }
    })).json();

    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
