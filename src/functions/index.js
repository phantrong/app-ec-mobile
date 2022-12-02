export const formatPrice = (price, unit = 'VNĐ') => {
    if (!price) price = 0;
    if (price) price = Math.ceil(price);
    return price?.toFixed(0)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ' + unit;
};

export const convertPriceToString = (price) => {
    if (!price) price = '';
    if (price) price = String(Math.ceil(Number(price)));
    return price;
};
