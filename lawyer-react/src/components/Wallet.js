import React from 'react';

const Wallet = () => {

    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
      };
    
      //------Inserted Code------\\
      const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
          //If it isn't installed we ask the user to click to install it
            <h1>not</h1>
        } else {
          //If it is installed we change our button text
<h1>connect</h1>        }
      };
      MetaMaskClientCheck();

    return (
        <div>
            Wallet Page
        </div>
    )
}

export default Wallet;