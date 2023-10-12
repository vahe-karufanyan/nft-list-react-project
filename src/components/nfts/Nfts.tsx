/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './nfts.module.scss';
import { request } from '../../utils/fetchApi';
import { useEffect } from 'react';

const Nfts = () => {
  const [page, setPage] = useState(1);
  const [filteredNfts, setFilteredNfts] = useState([]);
  const query = useLocation().search.slice(1); // slice(1) to remove "?"

  useEffect(() => {
    const fetchAllNfts = async () => {
      const data = await request(`/nfts?_page=${page}&_limit=5&${query}`, 'GET');
      setFilteredNfts(data);
    };
    fetchAllNfts();
  }, [page, query]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredNfts?.length > 0 ? (
          <>
            <div className={classes.titles}>
              <h5>Selected nfts</h5>
              <h2>Nft you may like</h2>
            </div>
            <div className={classes.nfts}>
              {filteredNfts.map((nft: any) => (
                <div key={nft?.id} className={classes.nft}>
                  <Link to={`/nftDetails/${nft?.id}`} className={classes.imgContainer}>
                    <img src={nft?.nft_image} alt='' />
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
              <button className={classes.previous} disabled={page === 1} onClick={() => setPage(page - 1)}>
                &lt;
              </button>
              <span className={classes.page}>{page}</span>
              <button className={classes.next} onClick={() => setPage(page + 1)}>
                &gt;
              </button>
            </div>
          </>
        ) : (
          <h2 className={classes.noNft}>We have no nfts with the specified options.</h2>
        )}
      </div>
    </div>
  );
};

export default Nfts;
