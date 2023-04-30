const projects = [
    {
        id: 1,
        name: "CampusCrate",
        description: "This is the project backing CampusCrate DAO, a perfect place for Blockchain club leaders to accelerate their clubs and projects to new heights. CampusCrate extensively keep in mind the need for Blockchain clubs, and provides all the resources to conduct all their operations on-chain.",
        image: "https://github.com/Harshkumar62367/CampusCrate/raw/main/CampusCrate.png",
        link: "https://github.com/Harshkumar62367/CampusCrate",
        clubName: "TESLA Club",
        contributors: ["Yugank", "Sudhanshu", "Harsh"],
        techStack: ["React", "Node", "Solidity", "TailwindCSS"],
        status: "In Progress",
        votes: 0,
        projectType: "Campus DAO",
        comments: [
            {
                id: 1,
                text: "This is an awesome project, providing so many on-chain operations for Blockchain clubs",
            },
        ]
    },
    {
        id: 1,
        name: "TrustMarket",
        description: "Trustmarket is a data marketplace built on Filecoin with the help of FVM to provide a standard for resolving any fraudulent dataset with a DAO that governs the validity of a dataset",
        image: "https://trust-market.vercel.app/_next/image?url=%2Fimages%2Fhero-img2.png&w=256&q=75",
        link: "https://github.com/Harshkumar62367/TrustMarket",
        clubName: "TESLA Club",
        contributors: ["Sudhanshu", "Harsh", "Saksham"],
        techStack: ["React", "Node", "Solidity", "NextJs"],
        status: "In progress",
        votes: 0,
        projectType: "Data Marketplace",
        comments: [
            {
                id: 1,
                text: "An awesome project solving some compelling issues of Data selling and buying.",
            },
        ]
    },
    {
        id: 2,
        name: "Kaizen",
        description: "Kaizen is a project built to handle and automate all the Tech Fest related tasks of AIIMS Patna. Kaizen handle online registration, as well as has a database that maintains list of all activities during AIIMS Patna Tech Fest ",
        image: "https://www.kaizenaiimspatna.com/images/kaizen.png",
        link: "https://github.com/SudhansuuRanjan/kaizen",
        clubName: "TESLA Club",
        contributors: ["Sudhanshu"],
        techStack: ["React", "Node", "NextJs", "MongoDB"],
        status: "Done",
        votes: 0,
        projectType: "Tech Fest Management",
        comments: [
            {
                id: 1,
                text: "An awesome project handling all Tech fest-related activities of AIIMS Patna.",
            },
        ]
    },
    {
        id: 3,
        name: "RentNFT",
        description: "RentNFT is a NFT project built on Polygon to enable lending and borrowing on NFTs, without the use of collaterals. RentNFT uses wrapped token model to ensure renting of NFTs without any collateral. ",
        image: "https://gateway.pinata.cloud/ipfs/QmP9MeLgTCSu2CwUW4wwEaFcv1VPbfZz2CtVpHNGSM6LYw",
        link: "https://github.com/Saksham010/Wraprotocol",
        clubName: "TESLA Club",
        contributors: ["Saksham", "Harsh"],
        techStack: ["Node", "NextJs", "Solidity"],
        status: "Done",
        votes: 0,
        projectType: "NFT Lending",
        comments: [
            {
                id: 1,
                text: "A real-world utility project solving liquidity in the NFT market.",
            },
        ]
    },
    {
        id: 4,
        name: "AlgoChat",
        description: "AlgoChat is a GPT-3 bot made by the TESLA club to answer all your doubts related to Algorand Blockchain. AlgoChat has been trained on new questions which makes it your perfect buddy to deep dive in Algorand Blockchain",
        image: "https://algo-chat.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgo-logo.e58ef18a.png&w=640&q=75",
        link: "https://github.com/Harshkumar62367/AlgoChat",
        clubName: "TESLA Club",
        contributors: ["Yugank", "Sudhanshu", "Harsh"],
        techStack: ["OpenAI", "NextJs"],
        status: "Done",
        votes: 0,
        projectType: "GPT-3 Bot",
        comments: [
            {
                id: 1,
                text: "A cool GPT-3 bot to solve all your Algorand-related doubts.",
            },
        ]
    },
    {
        id: 5,
        name: "Introduction to Polkadot",
        description: "Provides an overview of Polkadot, a next-generation blockchain platform that aims to connect different blockchain networks together. The author explains the key concepts of Polkadot, and discusses the benefits of using Polkadot for building decentralized applications.",
        image: "https://source.unsplash.com/ioyEITUD2G8",
        link: "https://medium.com/@yverma0720/introduction-to-polkadot-4ee164744435",
        clubName: "TESLA Club",
        tag: ["Polkadot",],
        author: "Yugank Verma",
        likes: 12,
        status: "Done",
        projectType: "Mood Setter",
        date: "2022-10-15T00:00:00.000Z",
        comments: [
            {
                id: 1,
                text: "One of the beginner guide on Polkadot.",
            },
        ]
    },
]

module.exports = projects;