import { AllProduct } from "../model/productsModel";

interface CardProps {
    product: AllProduct

}
export function Card({product}: CardProps){
    return(
        <>
            <div className="flex flex-col rounded-lg bg-[#fff] w-[256px] cursor-pointer mb-5 hover:scale-105 transition duration-300">
                <div className="">
                    <img src={product.image_url}  className="h-[256px] rounded-t-lg"/>

                </div>
                <div className="relative flex flex-col p-5 space-y-3">
                    <span className="font-light" >{product.name}</span>
                    <span className="font-bold">{(product.price_in_cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>

            </div>
        </>
    )
}