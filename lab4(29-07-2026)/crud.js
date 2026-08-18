import readline from 'readline/promises';
import { stdin, stdout } from 'process';

const File = "product.json"

const saveCart=()=>{
        await writeFile(FILE,JSON.stringify(cart , null,2));
};

const getCArt = ()=>{
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const addtoCart = async (item) => {
    const products = await getCArt();
    products.push(item);
    await saveCart(products);
};

const main = async () => {

    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {
        console.log("Welcome to shopping cart");
        console.log("1 ----------- Add to cart");
        console.log("2 ----------- Show Cart");
        console.log("3 ----------- Remove Items");
        console.log("4 ----------- Update Quantity");
        console.log("5 ----------- Checkout");

        choice = Number(await cin.question("Enter your choice: "));

        console.log("Entered choice:", choice);

        switch (Number(choice)) {
            case 1:
                await addToCart()
                console.log("Add to cart");
                break;

            case 2:
                console.log("Show cart items");
                break;

            case 3:
                console.log("Remove items");
                break;

            case 4:
                console.log("Update quantity");
                break;

            case 5:
                console.log("See you later...");
                process.exit()
                break;

            default:
                console.log("Invalid choice! Try again");
        }

    } while (choice != 5);

    cin.close();
};

main();