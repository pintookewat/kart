const data = [
    {
        id: 1,
        img: "https://rukminim2.flixcart.com/image/832/832/kyxb9u80/t-shirt/k/n/y/xl-t67-nbwh-eyebogler-original-imagbfyc3rkzaj2y.jpeg?q=70",
        title: 'Striped Men Round Neck Blue T-Shirt',
        cost: 196,
        rating: "3.6",
        detail: "",
        qnt: 1
    },
    {
        id: 2,
        img: "https://rukminim2.flixcart.com/image/832/832/k6fd47k0/shirt/e/u/v/l-c301-dustygreen-dennis-lingo-original-imafzvvr7q8zn9kh.jpeg?q=70",
        title: 'Men Slim Fit Solid Slim Collar Casual Shirt',
        cost: 400,
        rating: "4.1",
        detail: "",
        qnt: 1
    },
    {
        id: 3,
        img: "https://rukminim2.flixcart.com/image/832/832/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70",
        title: 'Fastrack Minimalists Analog Watch - For Men',
        cost: 850,
        rating: "4.3",
        detail: "",
        qnt: 1
    },
    {
        id: 4,
        img: "https://rukminim2.flixcart.com/image/832/832/kwb07m80/trouser/m/a/j/34-slim-fit-men-dark-grey-cotton-lycra-blend-trousers-moonvelly-original-imag9ycrzzt8j5uf.jpeg?q=70",
        title: 'Regular Fit Men Light Green Lycra Blend Trousers',
        cost: 399,
        rating: "4",
        detail: "",
        qnt: 1
    },
    {
        id: 5,
        img: "https://rukminim2.flixcart.com/image/832/832/khtghow0-0/trouser/i/4/k/40-mt230-02-darknavy-srey-original-imafxqtyvtvu82d9.jpeg?q=70",
        title: 'Slim Fit Men Dark Blue Polyester Blend Trousers',
        cost: 450,
        rating: "3.9",
        detail: "",
        qnt: 1
    },
    {
        id: 6,
        img: "https://rukminim2.flixcart.com/image/832/832/klfhk7k0/wallet-card-wallet/f/2/i/plain-album-plain-album-wallet-nice-purse-original-imagykefzfmshszu.jpeg?q=70",
        title: 'Men Trendy,  Leather Wallet - Mini  (11 Card Slots)',
        cost: 299,
        rating: "4",
        detail: "",
        qnt: 1
    },
    {
        id: 7,
        img: "https://rukminim2.flixcart.com/image/832/832/l2rwzgw0/shoe/c/f/a/6-snk-410-white-40-bruton-white-original-imagefjrtpee9hud.jpeg?q=70",
        title: 'Modern Trendy Sneakers Shoes Sneakers For Men  (White)',
        cost: 499,
        rating: "3.5",
        detail: "",
        qnt: 1
    },
    {
        id: 8,
        img: "https://rukminim2.flixcart.com/image/416/416/kq6yefk0/sherwani/u/y/q/m-jss-7700007-chote-raja-collection-original-imag49ftvtgaehgf.jpeg?q=70",
        title: 'Chote Raja Collection chote raja collection Solid Sherwani Solid Sherwani',
        cost: 1614,
        rating: "3.4",
        detail: "",
        qnt: 1
    },
    {

        id: 9,
        img: "https://rukminim2.flixcart.com/image/832/832/kmax8y80/hand-messenger-bag/n/v/a/k-k-ji-42-vhbkkji42-shoulder-bag-balaji-original-imagf8m6ztmkdhhj.jpeg?q=70",
        title: 'Women Pink Shoulder Bag - Extra Spacious',
        cost: 284,
        rating: "3.7",
        detail: "",
        qnt: 1

    },
    {

        id: 10,
        img: "https://rukminim2.flixcart.com/image/832/832/l0bbonk0/watch/n/o/z/-original-imaf8gufth3gkvcp.jpeg?q=70",
        title: 'Attivo Collection Analog Watch - For Women',
        cost: 474,
        rating: "4.5",
        detail: "",
        qnt: 1

    },
    {

        id: 11,
        img: "https://rukminim2.flixcart.com/image/832/832/kwfaj680/kurta/9/i/x/xl-863-green-jaffry-embroidery-original-imag93um4wzkmxxe.jpeg?q=70",
        title: 'Women Printed Rayon Straight Kurta ',
        cost: 331,
        rating: "3.4",
        detail: "",
        qnt: 1

    },
    {

        id: 12,
        img: "https://rukminim2.flixcart.com/image/832/832/kz8qsnk0/sari/x/t/8/free-3vmika3001-fashein-unstitched-original-imagbah3dgd9w8vd.jpeg?q=70",
        title: 'Paisley, Woven, Self Design Banarasi Silk Blend Saree  (Pink, Gold)',
        cost: 799,
        rating: "4.8",
        detail: "",
        qnt: 1

    },
    {

        id: 13,
        img: "https://rukminim2.flixcart.com/image/832/832/koudfgw0/sandal/l/z/z/5-bt2702-blue-tyga-grey-original-imag37wyrhszyuzy.jpeg?q=70",
        title: 'Women Grey Casual Sandal',
        cost: 279,
        rating: "4.1",
        detail: "",
        qnt: 1

    },
    {

        id: 14,
        img: "https://rukminim2.flixcart.com/image/832/832/l1l1rww0/night-dress-nighty/4/0/j/free-nl9925-combo-navya-silvar-original-imagd4yesgh8eqzg.jpeg?q=70",
        title: 'Women Nighty  (Multicolor)',
        cost: 499,
        rating: "2.6",
        detail: "",
        qnt: 1

    },
    {

        id: 15,
        img: "https://rukminim2.flixcart.com/image/416/416/ktszgy80/combo-kit/c/p/9/matte-as-hell-nude-vs-bold-crayon-lipstick-gift-box-original-imag72b5qybasdsc.jpeg?q=70",
        title: 'SUGAR Cosmetics Matte As Hell "Nude Vs Bold" ',
        cost: 3039,
        rating: "4.5",
        detail: "",
        qnt: 1

    },
    {

        id: 16,
        img: "https://rukminim2.flixcart.com/image/832/832/kj0bp8w0-0/top/i/r/d/l-elyr177-elyraa-original-imafyzhw4bhgda4v.jpeg?q=70",
        title: 'Casual Regular Sleeves Solid Women Dark Green Top',
        cost: 499,
        rating: "4.2",
        detail: "",
        qnt: 1

    },
    {

        id: 17,
        img: "https://rukminim2.flixcart.com/image/832/832/k6ci8i80/kids-apparel-combo/t/e/y/10-11-years-capfrock-ftc-fashions-original-imafkzcdegdyzkfy.jpeg?q=70",
        title: 'Girls Midi/Knee Length Party Dress ',
        cost: 179,
        rating: "3.9",
        detail: "",
        qnt: 1

    },
    {

        id: 18,
        img: "https://rukminim2.flixcart.com/image/416/416/kpa39u80/block-construction/1/h/s/diy-smart-stick-blocks-imagination-creativity-education-learning-original-imag3k65dmzzfgbm.jpeg?q=70",
        title: 'Urban Infotech Multi color games',
        cost: 260,
        rating: "2.9",
        detail: "",
        qnt: 1

    },
    {

        id: 19,
        img: "https://rukminim2.flixcart.com/image/832/832/l1zc6fk0/shirt/3/t/s/11-12-years-121246526749-c675-gini-jony-original-imagdfhsrjzmxkv2.jpeg?q=70",
        title: 'Boys Regular Fit Printed Casual Shirt',
        cost: 809,
        rating: "4.2",
        detail: "",
        qnt: 1

    },
    {

        id: 20,
        img: "https://rukminim2.flixcart.com/image/832/832/kulk9zk0/kids-shoe/8/d/y/3-rg611-radhika-group-original-imag7zw8dbjgsy3g.jpeg?q=70",
        title: 'Lace Running Shoes For Boys & Girls  (Multicolor)',
        cost: 379,
        rating: "4.9",
        detail: "",
        qnt: 1

    },
    {

        id: 21,
        img: "https://rukminim2.flixcart.com/image/832/832/l29c9e80/kids-cap/b/s/b/2-3-years-uwu-01-ambitieux-original-imagdn8whrjsyfct.jpeg?q=70",
        title: 'Kids Cap  (Multicolor)',
        cost: 269,
        rating: "3.5",
        detail: "",
        qnt: 1

    },
    {

        id: 22,
        img: "https://rukminim2.flixcart.com/image/832/832/k0e66q80/sunglass/c/k/s/medium-bi-1581-bull-i-original-imafk6m2uepnkyn8.jpeg?q=70",
        title: 'UV Protection Oval Sunglasses ',
        cost: 344,
        rating: "4.3",
        detail: "",
        qnt: 1

    },
    {

        id: 23,
        img: "https://rukminim2.flixcart.com/image/832/832/kxkqavk0/kids-track-pant/x/s/u/6-7-years-2tpatti-gkidz-original-imagaya8kfgqgyrg.jpeg?q=70",
        title: 'Track Pant For Boys  (Multicolor, Pack of 2)',
        cost: 299,
        rating: "3.5",
        detail: "",
        qnt: 1

    },
    {

        id: 24,
        img: "https://rukminim2.flixcart.com/image/832/832/kdhphu80/watch/9/m/t/barbie-projector-pink-red-analogue-kids-watches-combo-boys-girls-original-imafud62ykgcngf3.jpeg?q=70",
        title: 'Barbie Projector Pink Red Analogue Kids Watches ',
        cost: 277,
        rating: "3.8",
        detail: "",
        qnt: 1

    },


]
export default data;