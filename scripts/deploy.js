const { ethers } = require("hardhat");

async function main() {
    const Cars = await ethers.getContractFactory("Cars");

    const cars = await Cars.deploy();
    console.log("Contract deployed at address:", cars.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});