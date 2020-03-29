import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {}  {
    return {
      products: [
        { id:0, name: 'Iphone 4', cost: 5000, img: 'https://static-eu.insales.ru/images/products/1/3154/150465618/8.jpg' },
        { id:1, name: 'Iphone 4s', cost: 7000, img:'https://static-eu.insales.ru/images/products/1/3285/150465749/7.jpg'},
        { id:2, name: 'Iphone 5', cost: 8000, img: 'https://avatars.mds.yandex.net/get-mpic/200316/img_id6065002438114542120/9hq'},
        { id:3, name: 'Iphone 5c', cost: 7500, img: 'https://allsvyaz.ru/image/cache/catalog/iphone/iphone5c/iphone5c-500x500.jpg'},
        { id:4, name: 'Iphone 5s', cost: 8500, img: 'https://www.yablokitradein.ru/image/cache/catalog/5s%20gold/%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202017-02-03%20%D0%B2%2020.59.42-500x500.png'},
        { id:5, name: 'Iphone 6', cost: 10000, img: 'https://i3.stat01.com/1/5321/53203204/075a3e/smartfon-apple-iphone-6-64gb-ceryj-kosmos.jpg'},
        { id:6, name: 'Iphone 6s', cost: 12000, img: 'https://avatars.mds.yandex.net/get-mpic/1081556/img_id2240878368476486323.jpeg/9hq'},
        { id:7, name: 'Iphone 7', cost: 18000, img: 'https://avatars.mds.yandex.net/get-mpic/331398/img_id7110655480195890269.jpeg/9hq'},
        { id:8, name: 'Iphone 8', cost: 35000, img: 'https://kvantshop.ru/images/stories/virtuemart/product/image-catalog-Apple-iPhone_8_Red-2-500x500.jpg'},
        { id:9, name: 'Iphone 10', cost: 48000, img: 'https://avatars.mds.yandex.net/get-mpic/364668/img_id1668394135474795668.png/9hq'},
        { id:10, name: 'Iphone 10xr', cost: 50000, img: 'https://domgsm.ru/image/cache//Smartfon_Apple_iPhone_Xr_128GB_23-500x500.jpg'},
        { id:11, name: 'Iphone 10xs', cost: 56000, img: 'https://redstoreua.com/image/cache/catalog/products/iphone/smartfon-apple-iphone-xs-max-dual-sim-256gb-gold-mt762-10100194-main-500x500.jpg'},
        { id:12, name: 'Iphone 11', cost: 70000, img: 'https://avatars.mds.yandex.net/get-mpic/1571231/img_id3153382916649673789.jpeg/9hq'},
        { id:13, name: 'Iphone 11pro', cost: 90000, img: 'https://avatars.mds.yandex.net/get-mpic/1886132/img_id4276652075289055278.jpeg/9hq'},
        { id:14, name: 'Iphone 11proMax', cost: 110000, img: 'https://img.mvideo.ru/Pdb/50129687b.jpg'},
      ]
    }
  }

}

