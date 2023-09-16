import { styled } from "styled-components"
import Button, { ButtonStyle } from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import FlyingButton from "./FlyingButton";
const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
    background-color: #fff;    
    padding: 20px;]
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: .9rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: block;
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
    @media screen and (min-width: 768px){
        display: flex;
        gap: 5px;
    }
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: 400;
    text-align: right;
    @media screen and (min-width: 768px){
        font-size: 1.2rem;
        font-weight: 600;
        text-align: left;
    }
`;



export default function ProductBox({_id,title,decription,price,images}){
    const uri = '/product/'+_id;
    return (
        <ProductWrapper>
            <WhiteBox href={uri}>
                <div>
                    <img src={images?.[0]}></img>
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={uri}>{title}</Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>   
    )
}