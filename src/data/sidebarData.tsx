import { Brand } from "../modals/Brand";
import { Sorting } from "../modals/Sorting";
import { Color } from "../modals/Color";


export const colorsData: Color[] =[
    {name: 'Label Text', active:false, count: 0},
    {name: 'Lacivert', active:false, count: 0},
    {name: 'Sarı', active:false, count: 0},
    {name: 'Siyah', active:false, count: 0},
    {name: 'Beyaz', active:false, count: 0},
    {name: 'Kırmızı', active: false, count: 0},
    {name: 'Mor', active: false, count: 0},
];

export const sorting: Sorting[] =[
    {name: 'En Düşük Fiyat', active:false},
    {name: 'En Yüksek Fiyat', active:false},
    {name: 'En Yeniler (A>Z)', active:false},
    {name: 'En Yeniler (Z>A)', active:false}
]

export const brandsData: Brand[] =[
    {name: 'Samsung', active:false, count: 0},
    {name: 'Nokia', active:false, count: 0},
    {name: 'Apple', active:false, count: 0},
    {name: 'LG', active:false, count: 0},
    {name: 'Huawei', active:false, count: 0},
    {name: 'Xiaomi', active:false, count: 0},
    {name: 'General Mobile', active:false, count: 0}
]