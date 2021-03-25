let clients = []
let facts = []

function sendEventsToAll(newFact) {
  console.log(newFact)
  clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}

async function addFact(request, response, next) {
  const newFact = request.body;
  facts.push(newFact);
  response.json(newFact)
  return sendEventsToAll(newFact);
}

function eventsHandler(request, response, next) {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    response.writeHead(200, headers);
  
    const data = `data: ${JSON.stringify(facts)}\n\n`;
  
    response.write(data);
  
    const clientId = Date.now();
  
    const newClient = {
      id: clientId,
      response
    };
  
    clients.push(newClient);
  
    request.on('close', () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter(client => client.id !== clientId);
    });
  }

  module.exports = {
      eventsHandler,
      factsHandler: addFact
  }