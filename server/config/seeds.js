const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Clothing" },
    { name: "Coffee Mugs" },
    { name: "Posters" },
    { name: "Stickers" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Web Developer Unisex T-shirt",
      description: "Support Etsy Shop: Devarmor",
      website: `https://www.etsy.com/listing/964628269/source-code-programmer-t-shirt-computer?click_key=e28570352af40a39a9eddc67f2a715571eb0a51b%3A964628269&click_sum=f29a6365&ref=user_curated_list-20&frs=1`,
      image: "prod1.jpeg",
      category: categories[0]._id,
      price: 21.95,
      quantity: 16,
    },
    {
      name: "I need a <br>! Coffee Mug",
      description: `Support Etsy Shop: XtraOrdinaryStore`,
      website: `https://www.etsy.com/listing/504152745/i-need-a-break-funny-coding-script-web?click_key=9e3caf54b28da568449c3de39f4424f72926d9b5%3A504152745&click_sum=bb6c676b&ref=user_curated_list-1&frs=1`,
      image: "prod2.jpeg",
      category: categories[1]._id,
      price: 27.33,
      quantity: 10,
    },
    {
      name: "Women Who Code",
      category: categories[0]._id,
      description: `Support Etsy Shop: MsSoftwareEngineer`,
      website: `https://www.etsy.com/listing/1155829712/women-who-code-write-the-future?click_key=32992a6064f18281172dcb4801af365b30b96905%3A1155829712&click_sum=56f2094c&ref=user_curated_list-2&frs=1`,
      image: "prod3.jpeg",
      price: 32.99,
      quantity: 5,
    },
    {
      name: "6 Stages of Debugging",
      category: categories[0]._id,
      description: `Support Etsy Shop: IceCreamRolls`,
      website: `https://www.etsy.com/listing/1132213362/6-stages-of-debugging-shirt-coding?click_key=d54cfaddd1c215a1a2851b62cbb4190c783a0655%3A1132213362&click_sum=b41812ab&ref=user_curated_list-16`,
      image: "prod4.jpeg",
      price: 16.99,
      quantity: 5,
    },
    {
      name: "IT WORKS! Unisex T-shirt",
      category: categories[0]._id,
      description: `Support Etsy Shop: Customerica`,
      website: `https://www.etsy.com/listing/1220992975/computer-programmer-gift-software?click_key=f6aaaf2abea9ccd0280d8975492bd0f7b5b803b1%3A1220992975&click_sum=6326bf87&ref=user_curated_list-2&pro=1&frs=1`,
      image: "prod5.jpeg",
      price: 12.16,
      quantity: 7,
    },
    {
      name: "It's a Good Day to Code T-shirt",
      category: categories[0]._id,
      description: `Support Etsy Shop: Merchtours`,
      website: `https://www.etsy.com/listing/1143506812/coding-shirt-computer-team-code-shirt?click_key=48a289c76d5eecf377cfef4c9d6747e2991e0fcd%3A1143506812&click_sum=ed0604cc&ref=user_curated_list-8&pro=1&frs=1&sts=1`,
      image: "prod6.jpeg",
      price: 16.95,
      quantity: 5,
    },
    {
      name: "Currently Code T-shirt",
      category: categories[0]._id,
      description: `Support Etsy Shop: Apparelella`,
      website: `https://www.etsy.com/listing/1200037194/coder-shirt-programmers-tshirt-coding?click_key=d33ecf98326631264018bdfbc93c227b11d0f6bc%3A1200037194&click_sum=1fb0001c&ref=user_curated_list-11&pro=1&frs=1`,
      image: "prod7.jpeg",
      price: 22.05,
      quantity: 5,
    },
    {
      name: "I Can Google Better than You T-shirt",
      category: categories[0]._id,
      description: `Support Etsy Shop: ThreadHubStore`,
      website: `https://www.etsy.com/listing/1130879926/senior-developer-t-shirt-for-developers?click_key=0143ce7e05074c272477bbf365867aa6da7ccaf8%3A1130879926&click_sum=b46ac214&ref=user_curated_list-16&frs=1`,
      image: "prod8.jpeg",
      price: 22.02,
      quantity: 5,
    },
    {
      name: "Fluent in Code Crew Sweater",
      category: categories[0]._id,
      description: `Support Etsy Shop: LaSTEMgirl`,
      website: `https://www.etsy.com/listing/810471267/fluent-in-code-embroidered-crewneck?click_key=b6a676e868a2023de7c67cb1cb852f034db93571%3A810471267&click_sum=e0d05341&ref=user_curated_list-4`,
      image: "prod9.jpeg",
      price: 33.99,
      quantity: 11,
    },
    {
      name: "Web Developer Crew Sweater",
      category: categories[0]._id,
      description: `Support Etsy Shop: TravelingAdventures`,
      website: `https://www.etsy.com/listing/1133937339/web-developer-sweatshirt-software?click_key=db592793170491c317a883ded67b8a1e0e6bafcc%3A1133937339&click_sum=c2d0f3ae&ref=user_curated_list-10&pro=1&frs=1`,
      image: "prod10.jpeg",
      price: 31.63,
      quantity: 11,
    },
    {
      name: "I only COMMIT to Git Mug",
      category: categories[1]._id,
      description: `Support Etsy Shop: KSWDesignStudio`,
      website: `https://www.etsy.com/listing/745734924/gift-for-programmer-i-only-commit-to-git?click_key=bff5d529eb52e782073ed795404f1cd822e87894%3A745734924&click_sum=728452d5&ref=user_curated_list-11&frs=1`,
      image: "prod11.jpeg",
      price: 22.99,
      quantity: 4,
    },
    {
      name: "got code? Sticker",
      category: categories[3]._id,
      description: `Support Etsy Shop: LaSTEMgirl`,
      website: `https://www.etsy.com/listing/779289718/got-code-vinyl-decal-sticker-coding?click_key=bdd41a23da0fa85b2f94e432cd94eb8b0d1ccfd2%3A779289718&click_sum=9e125b39&ref=user_curated_list-14`,
      image: "prod12.jpeg",
      price: 4.99,
      quantity: 15,
    },
    {
      name: "Can't Stop Screaming CSS Sticker",
      category: categories[3]._id,
      description: `Support Etsy Shop: FliffmallowCo`,
      website: `https://www.etsy.com/listing/1024692128/css-funny-vinyl-sticker-tech-stickers?click_key=cc06fd07f58ae262688d99667e658f57956f4f29%3A1024692128&click_sum=3a72dcc1&ref=user_curated_list-15`,
      image: "prod13.jpeg",
      price: 4.56,
      quantity: 12,
    },
    {
      name: "In Case of Fire Mug",
      category: categories[1]._id,
      description: `Support Etsy Shop: Codebrew`,
      website: `https://www.etsy.com/listing/955470103/in-case-of-fire-git-mug-dark-mode?click_key=5448aa8f3322f7c5f9197b16c30162c3c5bccf13%3A955470103&click_sum=e0a17ae0&ref=user_curated_list-2&frs=1`,
      image: "prod14.jpeg",
      price: 19.99,
      quantity: 10,
    },
    {
      name: "Give me coffee and I'll React Mug",
      category: categories[1]._id,
      description: `Support Etsy Shop: MsSoftwareEngineer`,
      website: `https://www.etsy.com/listing/1127104099/give-me-coffee-and-ill-react-mug?click_key=9847ffb8c9f2d6a3fd08aa3a4dda3772a7598135%3A1127104099&click_sum=90d4714d&ref=user_curated_list-8`,
      image: "prod15.jpeg",
      price: 14.99,
      quantity: 6,
    },
    {
      name: "Coffee, Code, Repeat Poster",
      category: categories[2]._id,
      description: `Support Etsy Shop: msSoftwareEngineer`,
      website: `https://www.etsy.com/listing/1072403945/coffee-code-repeat-print-software?click_key=925fec4c22f14addc4b01e4366b77302c74abd31%3A1072403945&click_sum=085fbf44&ref=user_curated_list-10`,
      image: "prod16.jpeg",
      price: 3.99,
      quantity: 15,
    },
    {
      name: "Unexpected '{' on line 32 Mug",
      category: categories[1]._id,
      description: `Support Etsy Shop: StrictlyBussinessMugs`,
      website: `https://www.etsy.com/listing/628231900/software-engineer-gift-for-software?click_key=bd3a64e3db18eb0f70685c45dabc8ffc6ec0f902%3A628231900&click_sum=8a3843c7&ref=user_curated_list-1&pro=1&frs=1`,
      image: "prod17.jpeg",
      price: 14.96,
      quantity: 5,
    },
    {
      name: "Programmer Definition Poster",
      category: categories[2]._id,
      description: `Support Etsy Shop: LittleGiraffePrints`,
      website: `https://www.etsy.com/listing/932220382/programmer-definition-programmer-print?click_key=13c2663812a64422a98fb42456928c509d83ad26%3A932220382&click_sum=472ab770&ref=user_curated_list-4&pro=1&frs=1`,
      image: "prod18.jpeg",
      price: 2.73,
      quantity: 10,
    },
    {
      name: "I can't. I have to code. Mug",
      category: categories[1]._id,
      description: `Support Etsy Shop: ProgrammingGifts`,
      website: `https://www.etsy.com/listing/1084308470/computer-programming-programmer-gift?click_key=8378eff2f1712aa8dc4470fb1f39dab2c2f045b2%3A1084308470&click_sum=66f5859b&ref=user_curated_list-8&frs=1`,
      image: "prod19.jpeg",
      price: 14.95,
      quantity: 8,
    },
    {
      name: "Softweird Engineer T-shirt",
      category: categories[0]._id,
      description: `Support Etsy Shop: LaSTEMgirl`,
      website: `https://www.etsy.com/listing/1099833441/softweird-engineer-shirt-software?click_key=1fa60dcda68ec2642628de8d42bc3a8e9bbc2ac3%3A1099833441&click_sum=eb1940fe&ref=user_curated_list-12&pro=1&frs=1`,
      image: "prod20.jpeg",
      price: 19.96,
      quantity: 10,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Jack",
    lastName: "Black",
    email: "jack@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Steve",
    lastName: "White",
    email: "steve@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
