import { startApolloServer } from "./app.js"
import {resolvers} from "./graphql/resolvers.js"
import {typeDefs} from "./graphql/typeDefs.js"
import {connectDB} from "./db.js"


connectDB();

startApolloServer(typeDefs, resolvers);

// app.listen(3000)
// console.log("Server on port 3000")
// nos quedamos en min23