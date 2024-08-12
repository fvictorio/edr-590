const { it } = require("node:test");
const hre = require("hardhat");

it("test", async function () {
  await hre.network.provider.send("eth_accounts");
});
