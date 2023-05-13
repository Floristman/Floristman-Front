import React from 'react'
import { photos } from '../../../../utilits/photos/photos'

function HomeCatalog() {
    return (
        <section className='flex'>
            <div>
                <div className="forWhom relative max-w-[280px] mb-[25px]">
                    <img src={photos.ForWhom} alt="ForWhom" />
                    <div className="absolute w-full flex justify-between rounded-tl-[10px] rounded-tr-[10px] items-center bottom-0 bg-catalogBoxColor">
                        <div>
                            <img src={photos.TopLeft} alt="" />
                            <img src={photos.BottomLeft} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Для кого</p>
                        <div>
                            <img src={photos.TopRight} alt="" />
                            <img src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
                <div className="gifts relative max-w-[280px]">
                    <img src={photos.Sweets} alt="ForWhom" />
                    <div className="absolute w-full flex justify-between rounded-tl-[10px] rounded-tr-[10px] items-center bottom-0 bg-catalogBoxColor">
                        <div>
                            <img src={photos.TopLeft} alt="" />
                            <img src={photos.BottomLeft} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Сладости</p>
                        <div>
                            <img src={photos.TopRight} alt="" />
                            <img src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-[20px]'>
                <div className="gifts relative max-w-[575px] mb-[30px]">
                    <img src={photos.Gifts} alt="gifts" />
                    <div className="absolute px-[47px] py-[95px] lg:py-[70px] rounded-tl-[10px] rounded-bl-[10px] bottom-0 right-0 bg-catalogBoxColor md:px-0 md:py-0 md:h-[100%] md:w-[35%] md:text-center">
                        <div className='h-[44%]'>
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Для кого</p>
                        <div>
                            <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                            <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
                <div className="Bouquets relative max-w-[575px] mb-[30px]">
                    <img src={photos.Bouquets} alt="gifts" />
                    <div className="absolute justify-between px-[55px] py-[120px] lg:py-[100px] h-full rounded-tr-[10px] rounded-br-[10px] bottom-0 left-0 bg-catalogBoxColor md:px-0 md:py-0 md:h-[100%] md:w-[35%] md:text-center">
                        <div className="h-[44%]">
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Букеты</p>
                        <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                        <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                    </div>
                </div>
                <div className="Roses relative max-w-[575px] mb-[30px]">
                    <img src={photos.Roses} alt="gifts" />
                    <div className="absolute justify-between px-[64px] py-[95px] lg:py-[85px] h-full rounded-tl-[10px] rounded-bl-[10px] items-center bottom-0 right-0 bg-catalogBoxColor md:px-0 md:py-0 md:h-[100%] md:w-[35%] md:text-center">
                        <div className="h-[44%]">
                            <img className='absolute left-[10px] top-[10px]' src={photos.TopLeft} alt="" />
                            <img className='absolute right-[10px] top-[10px]' src={photos.TopRight} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Розы</p>
                        <img className='absolute left-[10px] bottom-[10px]' src={photos.BottomLeft} alt="" />
                        <img className='absolute right-[10px] bottom-[10px]' src={photos.BottomRight} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="Collection relative max-w-[280px] mb-[25px]">
                    <img src={photos.Collection} alt="ForWhom" />
                    <div className="absolute w-full flex justify-between rounded-tl-[10px] text-center rounded-tr-[10px] items-center bottom-0 bg-catalogBoxColor">
                        <div>
                            <img src={photos.TopLeft} alt="" />
                            <img src={photos.BottomLeft} alt="" />
                        </div>
                        <p className='font-[600] text-[14px] leading-[20px] text-headerText'>Праздничная коллекция</p>
                        <div>
                            <img src={photos.TopRight} alt="" />
                            <img src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
                <div className="HomeFlower relative max-w-[280px]">
                    <img src={photos.HomeFlower} alt="ForWhom" />
                    <div className="absolute w-full flex justify-between rounded-tl-[10px] text-center rounded-tr-[10px] items-center bottom-0 bg-catalogBoxColor">
                        <div>
                            <img src={photos.TopLeft} alt="" />
                            <img src={photos.BottomLeft} alt="" />
                        </div>
                        <p className='font-[600] text-[16px] leading-[20px] text-headerText'>Комнатные растения</p>
                        <div>
                            <img src={photos.TopRight} alt="" />
                            <img src={photos.BottomRight} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCatalog