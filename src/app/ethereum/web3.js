import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { 
  // We are in the Browser and Metamask is running.
  web3 = new Web3(window.web3.currentProvider) // We are using the current provider that Metamask has injected in the web page. The reason is because it accesses Rinkeby
} else { 
  // we are on the Server or Metamask is not running.
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/42e02b49638343bfa66c0f72f302669f'
  )
  web3 = new Web3(provider)
}

export default web3