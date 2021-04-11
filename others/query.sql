SELECT 
  column1.id, 
  column1.username, 
  column2.username as parentUserName 
FROM 
  user as column1 
  LEFT JOIN user as column2 ON column1.parent = column2.id
