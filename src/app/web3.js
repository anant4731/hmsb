import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { 
  web3 = new Web3(window.web3.currentProvider) 
} else { 
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/42e02b49638343bfa66c0f72f302669f'
  )
  web3 = new Web3(provider)
}
export default web3
