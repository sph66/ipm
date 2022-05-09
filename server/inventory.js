const yup = require('yup');

const { resources: { INVENTORY }, read, add, update } = require('./storage');

const schema = yup.object({
  id: yup.number(),
  title: yup.string().required(),
  year: yup.number().min(1950).max((new Date()).getFullYear()).required(),
  obs: yup.string(),
});

const findMany = (search) => {
  const inventories = read(INVENTORY)

  return Object.values(inventories)
    .filter(inv => {
      if (!search) {
        return true;
      }

      return inv.title?.toLowerCase().indexOf(search) > -1 ||
        inv.year?.toLowerCase().indexOf(search) > -1 ||
        inv?.obs?.toLowerCase().indexOf(search) > -1;
    });
};

const findOne = (id) => read(INVENTORY)[id];

const addInventory = async (data) => {
  await schema.validate(data)

  return add(INVENTORY, id, data);
}

const updateInventory = async (id, data) => {
  await schema.validate(data)

  return update(INVENTORY, id, data);
}

const inventoryResource = app => {
  app.get('/inventories', (req, res) => {
    res.json(findMany(req.query?.search?.toLowerCase()));
  });

  app.get('/inventories/:id', (req, res) => {
    res.json(findOne(req.params.id));
  });

  app.post('/inventories', async (req, res) => {
    try {
      const item = await addInventory(req.body);

      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (err) {
      return res.status(422).json({
        success: false,
        errors: err.errors,
      });
    }
  });

  app.patch('/inventories/:id', async (req, res) => {
    const inventory = findOne(req.params?.id);
    if (!inventory) {
      throw new Error(`Inventory not found`);
    }

    try {
      const item = await updateInventory(req.params.id, req.body);

      res.status(200).json({
        success: true,
        data: item,
      });
    } catch (err) {
      console.log(err);
      return res.status(422).json({
        success: false,
        errors: err.errors,
      });
    }
  });
}

module.exports = {
  inventoryResource,
};
