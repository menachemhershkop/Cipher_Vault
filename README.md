"# Cipher_Vault" 









למחוק את פאקגגייסון לוק


curl -X POST -H "Content-Type: application/json" -d '{"username":"moshe","password":"abc"}' http://localhost:3000/api/auth/register

curl -X POST -H "Content-Type: application/json" -d '{"username":"dani", "password":"abc", "message":"attack at dawn", "cipherType":"reverse"}' http://localhost:3000/api/messages/encrypt

curl -X POST -H "Content-Type: application/json" -d '{"username":"dani", "password":"abc", "messageid":2}' http://localhost:3000/api/messages/decrypt

curl -X GET -H "Content-Type: application/json" -H "username: dani" -H "password:abc" http://localhost:3000/api/users/me
