<div align="center">
    <img src="./CampusCrate.png">
</div>
<p align='center'>A <strong>Decentralised</strong> solution to accelerate Blockchain clubs.</p>
<h1><a href="https://campus-crate-kohl.vercel.app/"> CampusCrate </a> ⛓</h1>

![website](https://user-images.githubusercontent.com/90385824/232301876-bb6633df-41e3-4a18-ac69-82307c20268c.png)
<p align='center' font-size='5px' ><font size='1px'>Home Page</font></p>

![voting](https://user-images.githubusercontent.com/72465090/235378011-0a3b9274-e470-4e2c-a543-196d49dd6d56.png)
<p align='center' font-size='5px' ><font size='1px'>Voting Page</font></p>

DAO functionalities:

* A Decentralized Autonomous Organization (DAO) expertly designed to cultivate and expedite the ecosystem projects.
* CampusCrate DAO is for college/university clubs to develop projects(personalized for every university with limited functionality) with verifiers and club leaders to vote on proposals.
* NFTs for members and leaders with DAO tokens for voting proposals.
* Club leader can propose new proposals and vote on proposals, as well as secure funding for their respective Blockchain club.

<br>
<br>

# Problem we trying to Solve 🤔

* Many blockchain clubs around the world face significant challenges to get coverage and collaborate with other clubs.
* Many student clubs die out due to a lack of guidance, vision, and funding.
* The lack of proper web3 student infrastructure is a key factor in preventing blockchain clubs/projects from gaining traction and recognition.

<br>

# Solution we Gave 😎

1. Introducing an innovative solution to expedite student clubs - a Decentralized Autonomous Organisation (DAO) specifically designed for university Blockchain clubs. 

2. Our approach comprises a DAO structure built for Blockchain club leaders around the world, to accelerate their Blockchain clubs through the global community of CampusCrate.

3. We have built excellent tooling in our DAO so that any club leader can showcase his club projects, bounties and achievements and can even request for Grant to support his/her club operations.

<br>

# Our Platform

![website](https://user-images.githubusercontent.com/90385824/232301876-bb6633df-41e3-4a18-ac69-82307c20268c.png)
![image](https://user-images.githubusercontent.com/72465090/235378226-f51704e6-9451-42e1-9981-f25472929916.png)
![image](https://user-images.githubusercontent.com/72465090/235378255-b56aed1d-d413-4857-aeee-2d81e2f9a735.png)
![image](https://user-images.githubusercontent.com/72465090/235378264-237f429f-0eba-46ea-9b68-6bde2107f1d1.png)
![image](https://user-images.githubusercontent.com/72465090/235378276-674e54ac-2d2c-4d4b-945b-bef303f33076.png)


<br>

# Implementation

## ERC1155 Contract for membership NFTs
We have used ERC1155 contract to deploy NFTs of <em> CampusCrate DAO </em> membership.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0x12C381A9b06EDeB5a03Be718bbBCF6a1dB306f8a
```

## ERC20 contract
We have deployed <em> CampusCrate Goveranance Token</em> which is a ERC20 token.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0xbf9a9f4ff3da3ea6b17c59b04332edd89b072c0c
```
## Voting contract
A voting cortract has been deployed on Polygon to give votting access to CampusCrate DAO members.<br>
Deployed Address:
```
https://mumbai.polygonscan.com/address/0xc8A95Bc1dF176777F52C1F0cD3d7dd93206CEed8
```

## DAO Treasury
We have a DAO treasury account which holds over 90% of CampusCrate tokens, with no single entity claiming ownership or control of account.

<br>

# How it works👷‍♂️
It divided in two part:<strong> Server and client </strong>  
## Server
It consists of following scripts:<br>
1. <strong>Initialize-sdk.js</strong> : It initialize the thirdWeb SDks which we can use to call transactions in other scripts.
2. <strong>deploy-drop.js</strong> : This scripts is used for metadata creation of CampusCrate membership NFTs. 
3. <strong>config-nft.js</strong> : Used for deployment of NFTs to the <em>Mumbai Testnet</em>
4. <strong>set-claim-condition.js</strong> : This script is used for claiming the NFT for membership of DAO. 
5. <strong>deploy-token.js</strong> : This script is used for deployment of <em>CampusCrate Governance token</em> {CCT} to <strong> AddressZero</strong>
6. <strong>print-money.js</strong> : Used for amoumt to token to be minted for the DAO. For now we have minted <u>1,000,000</u> CCT tokens.
7. <strong>airdrop.js</strong> : With the help of this script, we transfer tokens to new joined members for voting to thier accounts.
8. <strong>setup-vote.js</strong> : This script is used for giving voting access to DAO members only. 
9. <strong>create-vote-proposal.js</strong> : With the help of this file, members are given access to create proposals.

<br>

# Tech Stack Used👨‍💻

### ThirdWeb SDK
Visit https://thirdweb.com to know more.

### Reactjs
Refer to https://react.dev/ install React

### TailwindCSS
Refer to TailwindCSS [docs](https://tailwindcss.com/)

### NodeJS
A Javascript runtime environment that executes Javascript code outside a web browser.

### Polygon
Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It is a scaling solution for Ethereum that allows developers to quickly and easily build and deploy Ethereum-compatible blockchain networks tailored to the needs of their decentralized applications (dApps) and users.

### ExpressJs
Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

### Metamask
Metamask is a browser extension that allows users to interact with the Ethereum blockchain. It allows users to connect to the Ethereum network and interact with smart contracts.

### IPFS
IPFS is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open. It is a distributed file system that seeks to connect all computing devices with the same system of files. In some ways, this is similar to the original aims of the Web, but IPFS is actually more similar to a single bittorrent swarm exchanging git objects.
<br> 

# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install Create-React-App
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app globally.

```bash
npm install -g create-react-app
```

### Learn Tailwind CSS
This project uses `Tailwind CSS` for styling. Refer to https://tailwindcss.com/ to learn more about Tailwind CSS.


## Live WebSite URL

The WebSite is deployed in https://campus-crate-kohl.vercel.app/

Click on the link to see the website.

## Cloning and Running the Application in local

Clone the project into local.

Install all the npm packages. Go into the root folder in each folder client and server and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command in the `client` folder of the project

```bash
npm run start
```

And Type the following command in the `server` folder of the project

```bash
npm run dev
```

Also you need to add .env file in `server` folder:

Its format looks like:

```
PRIVATE_KEY=<YOUR WALLET PRIVATE KEY>
WALLET_ADDRESS=<YOUR WALLET ADDRESS>
QUICKNODE_API_URL=<YOUR RPC URL>
```

The Client Runs on [http://localhost:3000/](http://localhost:3000/)<br>
The Server Runs on [http://localhost:4000/](http://localhost:4000/)
<br> 
<br>

## Contributors ✨

Team of <em> CampusCrate </em> 💕:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align='center'>
<a href = "https://github.com/Harshkumar62367/CampusCrate/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Harshkumar62367/CampusCrate"/>
</a>
</div>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

