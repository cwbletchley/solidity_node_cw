const { ethers } = require("hardhat");

async function main() {
    const Cars = await ethers.getContractFactory("Cars");
    const SuperHonk = await ethers.getContractFactory("SuperHonk");
    const superHonk = SuperHonk.deploy();

    const cars = await Cars.deploy((await superHonk).address);
    console.log("Contract deployed at address:", cars.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});