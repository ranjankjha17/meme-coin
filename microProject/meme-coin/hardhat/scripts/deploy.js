const hre=require("hardhat");

async function main(){
    const [owner]=await hre.ethers.getSigners();
    const contractFactory=await hre.ethers.getContractFactory("MemeCoin");
    const contract=await contractFactory.deploy();
    await contract.deployed();

    console.log("MemeCoin Contract deployed to:",contract.address);
    console.log("MemeCoin Contract owner address:",owner.address);  

}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})

//MemeCoin Contract deployed to: 0x4Abb615001106A19A6958C5e23BCD15780b91f56
//MemeCoin Contract owner address: 0x0dc519676A9512006e97901CdF97d9A04c31c0dB