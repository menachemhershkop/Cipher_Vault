"# Cipher_Vault" 









למחוק את פאקגגייסון לוק


curl -X POST -H "Content-Type: application/json" -d '{"username":"moshe","password":"abc"}' http://localhost:3000/api/auth/register
curl -X POST -H "Content-Type: application/json" -d '{"username":"dani", "password":"abc", "message":"attack at dawn", "cipherType":"reverse"}' http://localhost:3000/api/messages/encrypt
