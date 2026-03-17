 Setup :
To get started, run npm install to install all dependencies. Since the database credentials are not uploaded for security, you must create a local .env file. You can find all the required environment variables in the .env.example file included in the project; simply copy its content and provide your local PostgreSQL details (DB_NAME, DB_USER, DB_PASS, etc.).

How to Use the CLI:
The application uses npx tsx to run the TypeScript files directly. Use the following commands to manage your products:

To Add a Product: Run npx tsx src/main.ts add "Product Name" Price.

To List All Products: Run npx tsx src/main.ts list  to display all stored data.

To Update a Product: Run npx tsx src/main.ts update ID --name "New Name" --price <New Price> to modify an existing item.

To Delete a Product: Run npx tsx src/main.ts delete <ID> to remove a specific product by its ID.

To Find a Product: Run npx tsx src/main.ts get ID 
