
import { AllProduct } from "../model/productsModel";

interface CardProps {
    result: AllProduct

}

export function Card({result}: CardProps){
    // console.log(result.id)
    return(
        <>
            <div className="flex flex-col rounded-lg bg-[#fff] w-[256px] cursor-pointer mb-5 hover:scale-105 transition duration-300">
                <div className="">
                    <img src={result.image_url}  className="h-[256px] rounded-t-lg"/>

                </div>
                <div className="relative flex flex-col p-5 space-y-3">
                    <span>{result.name}</span>
                    <span className="font-bold">{(result.price_in_cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>

            </div>
        </>
    )
}