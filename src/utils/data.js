export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${uesrId}']`

  return query
} 