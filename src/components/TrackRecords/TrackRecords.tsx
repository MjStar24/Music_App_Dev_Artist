
'use client'
import React, { useState } from 'react';
import drop from '../../assets/drop.svg'
import { CardContainer, Wrap1, Wrap4, Heading, DropdownButton, DropdownContainer, DropdownContent, DropdownItem,DropdownIcon, Options, OptionsWrap, Wrap6, ScrollContainer } from '../RevenueCard/style';
const options= ["Most Popular", "Most Recent", "Most Streamed"];
const TrackRecords =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = ({option}) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return(
        <div style={{width:`100%`,height:`400px`,borderRadius:`24px`,backgroundColor:`rgba(31, 34, 40, 0.50)`,padding:`8px`}}>
            <div style={{padding:`10px 8px`}}>
                <DropdownContainer>
                    <DropdownButton onClick={handleDropdownToggle}>Sort by: {selectedOption || 'Select'} <DropdownIcon src={drop} alt='' /></DropdownButton>
                    {isOpen?(<DropdownContent>
                        {options.map(option => (
                        <DropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                            {option}
                        </DropdownItem>
                        ))}
                    </DropdownContent>):""}
                </DropdownContainer>
            </div>
            <div style={{display:`flex`,flexDirection:`row`, width:`100%`, height:`100%`}}>
                <ScrollContainer>
                    <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`88px`,borderRadius:`16px`,width:`100%`,background: `rgba(28, 30, 34, 0.80)`,padding:`18px 24px`}}>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Royalties</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">CHT 50,355.35</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Strems</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">489,630</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Tracks</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">8</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Collaborators</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">5</p>
                        </div>
                    </div>
                    {Array.from(Array(10).keys()).map((index) => (
                        <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`112px`,borderRadius:`16px`,width:`100%`,background: `rgba(28, 30, 34, 0.80)`,padding:`8px`,marginTop:`8px`}}>
                            <img src={"https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png"} style={{width:`96px`, height:`96px`}} />
                            <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`, alignItems:`center`, width:`100%`, margin:`12px`}}>
                                <div>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">Track Name</p>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full" style={{marginTop:`8px`,opacity:`0.6`}}>You, Miyagi</p>
                                </div>
                                <div>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full" style={{marginBottom:`8px`,opacity:`0.6`}}>Total earned</p>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">CHT 3,593.34</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </ScrollContainer>
                <ScrollContainer>
                    <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`88px`,borderRadius:`16px`,width:`100%`,background: `rgba(28, 30, 34, 0.80)`,padding:`18px 24px`}}>
                    <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>NFTs</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">25/30</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Sold at</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">0.345ETH</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Total Sales</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">8 ETH</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Collection of</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">5</p>
                        </div>
                        <div>
                            <p className="text-l font-['Aileron'] font-light leading-[12px] text-white w-full" style={{opacity:`0.6`, marginBottom:`8px`}}>Sold</p>
                            <p className="text-xl font-['Aileron'] font-light leading-[20px] text-white w-full">5</p>
                        </div>
                    </div>
                    {Array.from(Array(10).keys()).map((index) => (
                        <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,alignItems:`center`,height:`112px`,borderRadius:`16px`,width:`100%`,background: `rgba(28, 30, 34, 0.80)`,padding:`8px`,marginTop:`8px`}}>
                            <img src={"https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png"} style={{width:`96px`, height:`96px`}} />
                            <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`, alignItems:`center`, width:`100%`, margin:`12px`}}>
                            <div>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">Track Name</p>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full" style={{marginTop:`8px`,opacity:`0.6`}}>You, Miyagi</p>
                                </div>
                                <div>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full" style={{marginBottom:`8px`,opacity:`0.6`}}>Last Sold</p>
                                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">CHT 3,593.34</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </ScrollContainer>
            </div>
        </div>
    )
}

export default TrackRecords;