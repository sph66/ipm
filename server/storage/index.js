const fs = require('fs');

const INVENTORY = 'inventory';

const registry = {
  [INVENTORY]: __dirname + '/inventories.json',
};

const getFile = resource => {
  if (!registry[resource]) {
    throw new Error(`Unknown resource "${resource}"`);
  }

  return registry[resource];
}

const read = (resource) => {
  try {
    const file = getFile(resource);
    const content = fs.readFileSync(file) || '';

    return JSON.parse(content) || {};
  } catch (err) {
    return {};
  }
}

const write = (resource, records) => {
  fs.writeFileSync(getFile(resource), JSON.stringify(records));
}

const add = (resource, item) => {
  const records = read(resource);

  item.id = Object.values(records)
    .reduce((max, rec) => Math.max(max, rec.id), 0) + 1;

  records[item.id] = item;

  write(resource, records);

  return item;
}

const update = (resource, id, item) => {
  const records = read(resource);

  records[id] = {
    ...records[id],
    ...item,
    id,
  };

  write(resource, records);

  return records[id];
}

module.exports = {
  resources: {
    INVENTORY,
  },
  read,
  add,
  update,
};
