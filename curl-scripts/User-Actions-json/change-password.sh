# TOEKN= Grab token from sign in  sh curl-scripts/json/change-password.sh

curl "http://tic-tac-toe.wdibos.com/change-password/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
