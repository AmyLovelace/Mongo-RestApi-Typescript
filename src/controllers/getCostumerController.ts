import { ObjectId } from 'mongodb';

export async function getCostumerController(req: any, res: any) {
    try {
        const { db } = req.app;

        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ message: "Please enter a valid id." });
        }

        const objectId = new ObjectId(id);

        const result = await db.collection('costumers').findOne({ _id: objectId });

        if (!result) {
            return res.status(404).json({ message: "Customer not found." });
        }

        res.status(200).json({ message: "Customer returned", customer: result });
    } catch (error) {
        res.status(500).json({ message: 'Request failed' });
    }
}
