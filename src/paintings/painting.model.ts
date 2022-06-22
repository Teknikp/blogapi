export class Painting{
    constructor(
        public id: string,
        public name: string,
        public buydate: string,
        public selldate: string,
        public painter: string,
        public buyprice: number,
        public sellprice: number
    ){}
}