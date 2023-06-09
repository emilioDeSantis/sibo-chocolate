const categories = [
    {
        id: 1,
        name: "Coffee Bars",
        slug: "coffee-bars",
        color: '#542112',
        accent: '#542112',
        backgroundImageUrl: "/catagory test.png",
        text:'jhgfjh',
        products: [
            {
                id: 1,
                name: "Espresso",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/espresso bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#3D2221',
            },
            {
                id: 2,
                name: "Latte",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/latte bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#E9CEB4',
            },
            {
                id: 3,
                name: "Cafe con Leche",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/leche bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#F4C288',
            },
            {
                id: 4,
                name: "Cafe Turco",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/turco bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#8D9762',
            },
        ],
    },
    {
        id: 2,
        name: "Sugar Free",
        slug: "sugar-free",
        color: '#C5683A',
        backgroundImageUrl: "/catagory test.png",
        products: [
            {
                id: 1,
                name: "Milk",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/milk milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#F5C387',
            },
            {
                id: 2,
                name: "Mint",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
    {
        id: 3,
        name: "Dark Bars",
        slug: "dark-bars",
        color: '#C5683A',
        backgroundImageUrl: "/catagory test.png",
        products: [
            {
                id: 1,
                name: "Milk",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/milk milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#F5C387',
            },
            {
                id: 2,
                name: "Mint",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
    {
        id: 4,
        name: "Milk Bars",
        slug: "milk-bars",
        color: "#8C3B1E",
        backgroundImageUrl: "/catagory test.png",
        products: [
            // {
            //     id: 1,
            //     name: "Milk",
            //     description:
            //         "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
            //     backgroundImageUrl: "/milk milk bar.png",
            //     cacaoPercentage: 45,
            //     weightInGrams: 50,
            //     flavorProfile: "Herbal, with dried fruit and tapa de dulce",
            //     price: 12.15,
            //     color: '#F5C387',
            // },
            {
                id: 2,
                name: "Mint",
                description:
                    "Our smooth milk chocolate bar with a kiss of fresh mint. This classic combination warms the heart and cools the palate.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 4.99,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
    {
        id: 5,
        name: "Coated Coffee & Nuts",
        slug: "coated-coffee-nuts",
        color: '#C5683A',
        backgroundImageUrl: "/catagory test.png",
        products: [
            {
                id: 1,
                name: "Milk",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/milk milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#F5C387',
            },
            {
                id: 2,
                name: "Mint",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
    {
        id: 6,
        name: "Hot Chocolate Mix",
        slug: "hot-chocolate-mix",
        color: '#C5683A',
        backgroundImageUrl: "/catagory test.png",
        products: [
            {
                id: 1,
                name: "Milk",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/milk milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#F5C387',
            },
            {
                id: 2,
                name: "Mint",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
    {
        id: 7,
        name: "Coated Fruit",
        slug: "coated-fruit",
        backgroundImageUrl: "/catagory test.png",
        color: '#C5683A',
        products: [
            {
                id: 1,
                name: "Milk",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/milk milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.15,
                color: '#F5C387',
            },
            {
                id: 2,
                name: "Mint",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mint milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 16.15,
                color: '#D3E4B3',
            },
            {
                id: 3,
                name: "Roasted Almond",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/almond milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 12.85,
                color: '#C5683A',
            },
            {
                id: 4,
                name: "Mocha Toffee",
                description:
                    "Smooth and creamy texture that effortlessly dissolves on your tongue, providing a velvety and gratifying mouthfeel. Opulent and flavorful, exuding a luscious and indulgent taste that is certain to please your taste buds.",
                backgroundImageUrl: "/mocha milk bar.png",
                cacaoPercentage: 45,
                weightInGrams: 50,
                flavorProfile: "Herbal, with dried fruit and tapa de dulce",
                price: 22.95,
                color: '#E7C5AF',
            },
        ],
    },
];

export default categories;
