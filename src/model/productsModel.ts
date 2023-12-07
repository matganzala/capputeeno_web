export interface Products {
    data: Data;
}

export interface Data {
    allProducts: AllProduct[];
}

export interface AllProduct {
    id:             string;
    name:           string;
    description:    string;
    price_in_cents: number;
    image_url:      string;
    category:       string;
}

