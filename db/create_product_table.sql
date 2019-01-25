drop table if exists product;

create table if not exists product (
    id serial,
    name varchar(50),
    price decimal,
    img_url text
);

insert into product (
    name,
    price,
    img_url
) values (
    'Shoes',
    800.56,
    'https://media03.toms.com/static/www/images/product/MENS/ATG/SIDE/10011588-GreyLinenMensPreston-P-1450x1015.jpg'
);

insert into product (
    name,
    price,
    img_url
) values (
    'Pants',
    56.45,
    'https://www.duluthtrading.com/dw/image/v2/BBNM_PRD/on/demandware.static/-/Sites-dtc-master-catalog/default/dw71870c7d/images/large/84505_STN.jpg?sw=331&sh=331&sm=fit'
);

insert into product (
    name,
    price,
    img_url
) values (
    'Jacket',
    239.00,
    'https://www.patagonia.com/dis/dw/image/v2/ABBM_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw162ab449/images/hi-res/84683_FEA.jpg?sw=750&sh=750&sm=fit&sfrm=png'
);

select * from product;