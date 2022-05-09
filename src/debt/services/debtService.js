const DEBT_STORAGE_KEY = "clients";

export const findAll = () => {
  const storageClients = localStorage.getItem(DEBT_STORAGE_KEY);

  return storageClients ? JSON.parse(storageClients) : [];
};

export const add = (debt) => {
  const clients = findAll();

  const id =
    1 +
    clients.reduce((maxId, { id }) => {
      return Math.max(maxId, id);
    }, 0);
  debt.id = id;

  clients.push(debt);
  localStorage.setItem(DEBT_STORAGE_KEY, JSON.stringify(clients));

  return debt;
};

export const payDebt = (clientId) => {
  const clients = findAll();
  const client = clients.find((client) => client.id == clientId);

  client.paid = true;
  localStorage.setItem(DEBT_STORAGE_KEY, JSON.stringify(clients));

  return client;
};

export const findOne = (id) => {
  const clients = findAll();
  const client = clients.find((client) => client.id == id);

  return client;
};

export const updateDebt = ({ id, paymentAmount }) => {
  const clients = findAll();
  const client = clients.find((client) => client.id == id);

  console.log(paymentAmount, parseFloat(paymentAmount), id, client.payment);
  client.payment = parseFloat(client.payment) - parseFloat(paymentAmount);
  localStorage.setItem(DEBT_STORAGE_KEY, JSON.stringify(clients));

  return client;
};

export const deleteDebt = (debtId) => {
  const clients = findAll();

  for (let i = 0; i < clients.length; i++) {
    if (clients[i].id == debtId) {
      clients.splice(i, 1);
    }
  }

  localStorage.setItem(DEBT_STORAGE_KEY, JSON.stringify(clients));

  return clients;
};
