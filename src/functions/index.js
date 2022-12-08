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

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};
