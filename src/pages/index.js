import React from "react";
import Slide from "../components/Slide";
import Selling from "../components/Selling";
import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {getCategory} from "../actions/category";
import { wrapper } from "../store";
import { END } from "redux-saga";

const Index = () => {
    const htmlMarkup = (html) => {
        return {__html: html};
    };
    const dispatch = useDispatch();
    const category  = useSelector((state) => state.category);
    const hehe = () => {
        dispatch(getCategory())
    }
    return (
        <>    
            <button onClick={hehe}>hihi</button>
            <div className="container mx-auto">
                <NavBar />
                <Slide category={category}/>
                <Selling/>
                <div className='mt-10'>
                    <h4>Hot</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                        <div className="col-span-2 ...">
                            <ProductItem />
                        </div>
                        <ProductItem />
                        <ProductItem />

                        <ProductItem />
                        <ProductItem />
                        <div className="col-span-2 ...">
                            <ProductItem />
                        </div>

                    </div>
                </div>

                <div className='relative mt-10'>
                    <h4>Bài viết</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    );
};

  
export default wrapper.withRedux(Index);
