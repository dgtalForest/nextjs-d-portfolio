import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
            <div className="grid items-center grid-flow-row gap-4 px-8 my-6 justify md:grid-cols-2 grid-rows-auto">

                {
                    isLoading ?
                        [1, 2, 3, 4].map(() => (
                            <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
