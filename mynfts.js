
let nftCollection = [];

// This function will accept some parameters, create an NFT object using those parameters for its metadata,
// and store it in the array declared above.
function createNFT(brandName, category, color, price) {
    const nftData = {
        brand: brandName,
        type: category,
        color: color,
        price: price
    };

    nftCollection.push(nftData);
    console.log("\n", nftData.brand, " Successfully Created!");
}

// This function will loop through the array of NFTs and print their metadata using console.log()
function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\nID: ", i + 1);
        console.log("Brand: ", nftCollection[i].brand);
        console.log("Type: ", nftCollection[i].type);
        console.log("Color: ", nftCollection[i].color);
        console.log("Price: ", nftCollection[i].price);
    }
}

// This function will print the total number of NFTs we have created
function getNFTCount() {
    console.log("\nTotal NFTs Created: ", nftCollection.length);
}

// Call the functions below

createNFT("Harley", "Motorbike", "Black", "7 Eth");
createNFT("Tesla", "Car", "Silver", "12 Eth");
createNFT("Ferrari", "Car", "Red", "20 Eth");
displayNFTs();
getNFTCount();
