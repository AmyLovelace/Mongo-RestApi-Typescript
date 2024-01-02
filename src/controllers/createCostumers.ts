interface CreateCustomerRequestBody {
    name: string;
    email: string;
    phone: string;
    address: string;
  }

  type RequiredProperties = {
    [key in keyof CreateCustomerRequestBody]: string;
  };

export async function createCostumerController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const { name, email, phone, address }:CreateCustomerRequestBody = req.body;
  
      const requiredProperties: RequiredProperties = {
        name: 'Name is required',
        email: 'Email is required',
        phone: 'Phone number is required',
        address: 'Address is required'
      };
  
    for (const property in requiredProperties) {
        if (!req.body[property as keyof CreateCustomerRequestBody]) {
        const errorMessage = requiredProperties[property as keyof CreateCustomerRequestBody];
        res.status(400).json({ message: errorMessage });
        return; 
        }
  }
  
  

      const existingCustomer = await db.collection('costumers').findOne({
        email: email.toLowerCase()

      });

      if(existingCustomer){
        return res.status(400).json({ message: 'Customer already exists'});
      }
  
      const result = await db.collection('costumers').insertOne({
        name,
        email: email.toLowerCase(),
        phone,
        address
      });
      console.log(result);

      if(result.acknowledged){

        res.status(200).json({ message: 'Costumer created successfully' });


      }else{
        throw new Error ('Customer was not created');
      }
  


    } catch (error: unknown) {

    if (error instanceof Error) {

      res.status(500).json({ error: error.toString() });
    } else {

      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
  }
  