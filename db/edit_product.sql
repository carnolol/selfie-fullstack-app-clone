UPDATE products
SET name = ${name},
price = ${price},
img = ${img}
WHERE id = ${id}
returning *;