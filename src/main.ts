import { Command } from "commander";
import { Product } from "./product";
import sequelize  from "./db";

const program = new Command();

async function checkConn() {
  try {
    await sequelize.authenticate();
    console.log(" Database connected");
    await sequelize.sync();
  } catch (err: any) {
    console.error(" Database connection failed");
    console.log("--- Error Details ---");
    console.log("Message:", err.message); 
    console.log("Code:", err.parent?.code || "N/A");
    process.exit(1);
  }
}

program
  .command("list")
  .description("List all products")
  .action(async () => {
    await checkConn(); 
    const products = await Product.findAll();

    if (products.length === 0) {
      console.log("No products found.");
    } else {
      for (const product of products) {
        const p = product.toJSON();
        console.log(`ID: ${p.id} | Name: ${p.name} | Price: $${p.price}`);
      }
    }
  });

program
  .command("add <name> <price> ")
  .description("Add a new product")
  .action(async (name, price) => {
    await checkConn();
    const product = await Product.create({
      name,
      price: parseFloat(price), 
  
    });
    console.log("Product added:", product.toJSON());
  });

program
  .command("get <id>")
  .description("Get product by id")
  .action(async (id) => {
    await checkConn();
    const product = await Product.findByPk(id);
    if (!product) {
      console.log("Product not found");
    } else {
      console.log(product.toJSON());
    }
  });

program
  .command("delete <id>")
  .description("Delete product")
  .action(async (id) => {
    await checkConn();
    const product = await Product.findByPk(id);
    if (!product) {
      console.log("Product not found");
      return;
    }
    await product.destroy();
    console.log("Product deleted");
  });

program
  .command("update <id> <name> <price>")
  .description("Update product")
  .action(async (id, name, price) => {
    await checkConn();
    const product = await Product.findByPk(id);
    if (!product) {
      console.log("Product not found");
      return;
    }
    await product.update({ name, price: parseFloat(price) });
    console.log("Product updated:", product.toJSON());
  });

program.parseAsync(process.argv).then(async () => {
  await sequelize.close();
  process.exit(0);
});
