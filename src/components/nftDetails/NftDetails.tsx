/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import classes from './nftDetails.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { request } from '../../utils/fetchApi'

interface Nft {
  id: string;
  nft_name: string;
  nft_collection: string;
  nft_image: string;
  price: number;
  category: string;
  smart_contract: string;
}

const NftDetails = () => {
  const [nftDetails, setNftDetails] = useState<Nft | null>(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/nfts?id=${id}`, "GET")
        setNftDetails(data[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetails()
  }, [id])

  return <>
  {nftDetails && <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img src={nftDetails.nft_image} alt='' />
        </div>
        <div className={classes.right}>
          <h3 className={classes.title}>
            Title: {nftDetails.nft_name}
          </h3>
          <div className={classes.details}>
            <div className={classes.typeAndCountry}>
              <div>Category: <span>{nftDetails.category}</span></div>
              <div>Collection: <span>{`${nftDetails?.nft_collection}`}</span></div>
            </div>
            <div className={classes.priceAndOwner}>
              <span className={classes.price}><span>Price: $ </span>{nftDetails.price}</span>
            </div>
          </div>
          <p className={classes.desc}>
            <span>code - {nftDetails.smart_contract}</span>
          </p>
        </div>
      </div>
    </div>}
  </>
}

export default NftDetails