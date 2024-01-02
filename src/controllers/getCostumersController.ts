

export async function getCostumerController(req: any, res: any) {
    try {
        const { db } = req.app;

        const result = await db.collection('costumers').find().toArray();

            res.status(200).json({message:"Costumer returned", data: result});
    }
    catch (error) {
        res.status(500).json({});
    }

}
