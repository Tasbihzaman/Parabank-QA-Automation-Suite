SELECT * FROM accounts
WHERE customer_id = :customerId
ORDER BY id
DESC LIMIT 1;
