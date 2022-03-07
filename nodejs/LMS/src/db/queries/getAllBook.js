export default `
 SELECT
 b.id,
 b.bookcategory_id,
 bc.name as bookcategory_name,
 b.author,
 b.edition,
 b.created_at,
 FROM books b
 INNER JOIN book_category bc on b.bookcategory_id = bc.id
 GROUP BY b.id, b.bookcategory_id, bc.name, b.author,b.edition, b.created_at
 `;