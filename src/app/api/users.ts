import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const users = [
      {id: 1, name: "Arthur"},
      {id: 1, name: "Paulo"},
      {id: 1, name: "Pedro"}
    ]

    return res.json(users)
}

