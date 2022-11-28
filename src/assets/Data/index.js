import icons from '../icon';
import Images from '../images';

const menuItems = [
    {
        title: 'profile',
        icon: icons.USER,
        config: 'Profile',
    },
    {
        title: 'chat list',
        icon: icons.MESSAGES3,
        config: 'ChatList',
    },
    {
        title: 'delivery address',
        icon: icons.GROUP,
        config: 'DeliveryAddress',
    },
    {
        title: 'Interesting product',
        icon: icons.HEART,
        config: 'IntProduct',
    },
    {
        title: 'Order history',
        icon: icons.BOX,
        config: 'OrderHistory',
    },
    {
        title: 'Reservation history',
        icon: icons.CALENDAR,
        config: 'ChatList',
    },
    {
        title: 'Coupon management',
        icon: icons.TICKETDIS,
        config: 'CouManagement',
    },
    {
        title: 'setting',
        icon: icons.SETTING,
        config: 'Setting',
    },
    {
        title: 'logout',
        icon: icons.LOGOUT,
        config: 'LoginScreen',
    },
];

const myCart = [
    {
        nameShop: 'cửa hàng khanh',
        image: Images.AVATAR,
        products: [
            {
                cart_item_id: 1,
                product_id: 1,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 4,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 2,
                product_id: 2,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 4,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 3,
                product_id: 3,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 4,
                stock: 1000,
                quantity: 6,
            },
        ],
    },

    {
        nameShop: 'cửa hàng khanh2',
        image: Images.AVATAR,
        products: [
            {
                cart_item_id: 4,
                product_id: 5,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 0,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 5,
                product_id: 4,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 4,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 6,
                product_id: 6,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                // price_discount: 1570633,
                stock: 1000,
                quantity: 6,
            },
            {
                cart_item_id: 7,
                product_id: 7,
                product_name: 'Kristina Bayer',
                product_image: Images.PRODUCT_TEST2,
                price: 10,
                price_discount: 3,
                stock: 1000,
                quantity: 6,
            },
        ],
    },
];

export default { menuItems, myCart };
