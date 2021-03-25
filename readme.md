Backend requires an .env file in ./backfile with PORT=####

Frontend port can be changed by adding PORT=#### to the beginning of the npm start command in package.json in /frontend

Use:
Launch backend
Launch frontend
POST /fact with your fact, frontend should reflect update
```
curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"info": "Shark teeth are embedded in the gums rather than directly affixed to the jaw, and are constantly replaced throughout life.", "source": "https://en.wikipedia.org/wiki/Shark"}'\
 -s http://localhost:3001/fact
```