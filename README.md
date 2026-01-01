# Menachem Hershkop

# chermon

# 316611649



In this scenario, I used the supabase service due to the fact that the tables can be managed in real time, and the atles service to optimally manage access to mongoDB.

coomand for evry ruot:

curl -X POST -H "Content-Type: application/json" -d '{"username":"moshe","password":"abc"}' http://localhost:3000/api/auth/register

curl -X POST -H "Content-Type: application/json" -d '{"username":"dani", "password":"abc", "message":"attack at dawn", "cipherType":"reverse"}' http://localhost:3000/api/messages/encrypt

curl -X POST -H "Content-Type: application/json" -d '{"username":"dani", "password":"abc", "messageid":2}' http://localhost:3000/api/messages/decrypt

curl -X GET -H "Content-Type: application/json" -H "username: dani" -H "password:abc" http://localhost:3000/api/users/me

command for getting to the mongoDB server:

MONGO\_URI=mongodb+srv://hersmm\_db\_user:KjtZZrZ9GVzrsJI8@cluster0.cxnpvvo.mongodb.net/?appName=Cluster0
DB\_NAME=kodcode

command for getting to the supabase server:

SUPABASE\_URL=https://oulkobyxrvftscgtcdgp.supabase.co
SUPABASE\_KEY=sb\_secret\_wm4WPJUXgNPgEoMSsuj11g\_AR5gryRK

for applay the server comand:
node ./app.js

