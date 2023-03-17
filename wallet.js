const connectWalletButton = document.getElementById("connect-wallet");

async function connectWallet() {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      // Initialize Web3.js
      const web3 = new Web3(window.ethereum);

      // Get the connected account
      const account = accounts[0];

      // You can now interact with the connected account using web3.js
      console.log("Connected account:", account);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  } else {
    alert("Please install MetaMask to use this feature.");
  }
}

// Attach event listener to the "Connect Wallet" button
connectWalletButton.addEventListener("click", connectWallet);
