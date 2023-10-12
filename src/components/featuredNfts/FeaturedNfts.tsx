import React from 'react';
import classes from './featuredNfts.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { request } from '../../utils/fetchApi';

interface Nft {
  id: string;
  nft_name: string;
  nft_collection: string;
  nft_image: string;
  price: number;
  category: string;
  smart_contract: string;
}

const FeaturedNfts = () => {
  const [featuredNfts, setFeaturedNfts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await request(`/nfts?_page=${page}&_limit=5`, 'GET');
        setFeaturedNfts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeatured();
  }, [page]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Listed Nfts you may like</h2>
        </div>
        <div className={classes.featuredNfts}>
          {featuredNfts?.map((nft: Nft) => (
            <div className={classes.featuredNft} key={nft.id}>
              <Link to={`/nftDetails/${nft.id}`} className={classes.imgContainer}>
                <img src={nft.nft_image} alt='' />
              </Link>
              <div className={classes.details}>
                <div className={classes.priceAndOwner}>
                  <span className={classes.nftTitle}>{nft?.nft_name}</span>
                  <span className={classes.price}>$ {nft?.price}</span>
                </div>
                <div className={classes.desc}>{nft?.category}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.pagination}>
          <button className={classes.previous} disabled={page===1} onClick={() => setPage(page - 1)}>&lt;</button>
          <span className={classes.page}>{page}</span>
          <button className={classes.next} onClick={() => setPage(page + 1)}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNfts;
