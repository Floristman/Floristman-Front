import React from 'react'
import { photos } from '../../../../utilits/photos/photos'

function HomeCatalogSM() {
    return (
        <section className='grid grid-cols-[repeat(2,auto)] text-center xs:pb-[20px] xs:text-center'>
            <div>
                <div className="relative">
                    <img src={photos.ForWhom} alt="ForWhom" />
                    <div className="absolute left-0 bottom-0 px-[30px] w-full py-[30px] rounded-tl-[10px] rounded-tr-[10px]  bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Для кого</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative mb-[10px]">
                    <img src={photos.Sweets} alt="Sweets" />
                    <div className="absolute left-0 bottom-0 px-[30px] w-full py-[30px] rounded-tl-[10px] rounded-tr-[10px] bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Сладости</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative mb-[10px]">
                    <img className='w-full' src={photos.GiftsMB} alt="Gifts" />
                    <div className="absolute left-0 bottom-0 px-[30px] w-full py-[30px] rounded-tl-[10px] rounded-tr-[10px]  bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Подарки</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative mb-[10px]">
                    <img className='w-full' src={photos.BouquetsMB} alt="Bouquets" />
                    <div className="absolute left-0 bottom-0 px-[30px] w-full py-[30px] rounded-tl-[10px] rounded-tr-[10px]  bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Букеты</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img className='w-full' src={photos.RosesMB} alt="Roses" />
                    <div className="absolute left-0 bottom-0 px-[30px] w-full py-[30px] rounded-tl-[10px] rounded-tr-[10px] bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Розы</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img className='w-full' src={photos.CollectionMB} alt="Collection" />
                    <div className="absolute left-0 bottom-0 px-[5px] w-full py-[25px] rounded-tl-[10px] rounded-tr-[10px] bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Праздничная коллекция</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative mt-[10px] left-[50%]">
                    <img className='w-full' src={photos.HomeFlowerMB} alt="HomeFlower" />
                    <div className="absolute bottom-0 left-0 px-[5px] w-full py-[25px] rounded-tl-[10px] rounded-tr-[10px]  bg-catalogBoxColor">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[15px] leading-[10px] text-headerText'>Комнатные растения</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default HomeCatalogSM