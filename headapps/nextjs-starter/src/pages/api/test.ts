import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    debugger;
    if(req.method === 'POST'){
        res.status(200).json({data: 'hello world'});
    }else{
        res.status(405).json({ error: 'method not allowed' });
    }
}