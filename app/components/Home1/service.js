
'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import ServiceCard from "@/app/card/Home1/ServiceCard";
import SectionHeader from './sectionHeader';

const Service = () => {

    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);
    const Next = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slideNext();
        }
    };
    const Previous = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slidePrev();
        }
    };

    const serviceData = [
        
        {
            index: 1, title: 'tax planning', description: 'There are many variation of the pasage available majority have make suffered alteration.', serviceImage: '/service/service.svg',
            iconImage: (
                <svg
                    className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                >
                    <path d="M27.0454 42.7363C27.0527 42.7354 27.0596 42.7339 27.0669 42.7329L27.0576 42.7236L27.0454 42.7363ZM7.14355 16.0713H17.8579V12.5H3.57227V41.0713H26.7866V37.5H7.14355V16.0713ZM32.1436 12.5V16.0713H42.8579V26.7856H46.4297V12.5H32.1436ZM28.5723 31.5635V41.3848L37.501 46.2954L46.4297 41.3848V31.5635L37.5005 26.6523L28.5723 31.5635ZM42.8579 39.2729L37.501 42.2192L32.1436 39.2729V33.6748L37.5005 30.7285L42.8574 33.6748V39.2729H42.8579Z" />
                    <path d="M35.7148 36.4741C35.7148 36.9477 35.903 37.4019 36.2378 37.7368C36.5727 38.0716 37.0269 38.2598 37.5005 38.2598C37.9741 38.2598 38.4283 38.0716 38.7631 37.7368C39.098 37.4019 39.2861 36.9477 39.2861 36.4741C39.2861 36.0005 39.098 35.5464 38.7631 35.2115C38.4283 34.8766 37.9741 34.6885 37.5005 34.6885C37.0269 34.6885 36.5727 34.8766 36.2378 35.2115C35.903 35.5464 35.7148 36.0005 35.7148 36.4741Z" />
                    <path d="M23.2153 9.66797V21.4287H10.7153V25H39.2866V21.4287H26.7866V9.66797L29.0957 11.9771L31.6206 9.45166L25.001 2.83203L18.3813 9.45166L20.9063 11.9771L23.2153 9.66797Z" />
                </svg>
            ),
        },
        
        {
            index: 2, title: 'personal tax', description: 'There are many variation of the pasage available majority have make suffered alteration.', serviceImage: '/service/service2.svg',
            iconImage: (
                <svg
                    className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                >
                    <path d="M10.0301 28.5029H6.4447C4.91685 28.5029 3.67383 29.746 3.67383 31.274V47.2295C3.67383 48.7573 4.91685 50.0005 6.4447 50.0005H10.0301C11.5579 50.0005 12.8012 48.7575 12.8012 47.2295V31.274C12.8012 29.746 11.5579 28.5029 10.0301 28.5029ZM10.2505 47.2295C10.2505 47.3511 10.1517 47.4499 10.0301 47.4499H6.4447C6.32333 47.4499 6.22449 47.3511 6.22449 47.2295V31.274C6.22449 31.1524 6.32333 31.0536 6.4447 31.0536H10.0301C10.1517 31.0536 10.2505 31.1524 10.2505 31.274V47.2295Z" />
                    <path d="M21.0983 34.1738H17.5129C15.9851 34.1738 14.7418 35.4169 14.7418 36.9449V47.2288C14.7418 48.7566 15.9851 49.9998 17.5129 49.9998H21.0983C22.6261 49.9998 23.8692 48.7568 23.8692 47.2288V36.9449C23.8692 35.4169 22.6263 34.1738 21.0983 34.1738ZM21.3185 47.2288C21.3185 47.3503 21.2197 47.4492 21.0983 47.4492H17.5129C17.3913 47.4492 17.2925 47.3503 17.2925 47.2288V36.9449C17.2925 36.8233 17.3913 36.7245 17.5129 36.7245H21.0983C21.2197 36.7245 21.3185 36.8233 21.3185 36.9449V47.2288Z" />
                    <path d="M32.1666 33.4561H28.5813C27.0534 33.4561 25.8102 34.6991 25.8102 36.2271V47.2292C25.8102 48.7571 27.0534 50.0003 28.5813 50.0003H32.1666C33.6945 50.0003 34.9375 48.7573 34.9375 47.2292V36.2271C34.9375 34.6993 33.6945 33.4561 32.1666 33.4561ZM32.3869 47.2292C32.3869 47.3508 32.288 47.4496 32.1666 47.4496H28.5813C28.4597 47.4496 28.3608 47.3508 28.3608 47.2292V36.2271C28.3608 36.1056 28.4597 36.0067 28.5813 36.0067H32.1666C32.288 36.0067 32.3869 36.1056 32.3869 36.2271V47.2292Z" />
                    <path d="M43.5556 29.2207H39.9702C38.4423 29.2207 37.1991 30.4637 37.1991 31.9918V47.229C37.1991 48.7569 38.4423 50.0001 39.9702 50.0001H43.5556C45.0834 50.0001 46.3264 48.7571 46.3264 47.229V31.9918C46.3264 30.4637 45.0834 29.2207 43.5556 29.2207ZM43.7758 47.2288C43.7758 47.3504 43.6769 47.4492 43.5556 47.4492H39.9702C39.8486 47.4492 39.7498 47.3504 39.7498 47.2288V31.9916C39.7498 31.87 39.8486 31.7712 39.9702 31.7712H43.5556C43.6769 31.7712 43.7758 31.87 43.7758 31.9916V47.2288Z" />
                    <path d="M24.5225 0C15.6651 0 8.45886 7.20605 8.45886 16.0634C8.45886 24.9208 15.6649 32.1269 24.5223 32.1269C33.3797 32.1269 40.5855 24.9208 40.5855 16.0634C40.5855 7.20605 33.3799 0 24.5225 0ZM24.5225 29.5762C17.0714 29.5762 11.0097 23.5143 11.0097 16.0634C11.0097 8.61252 17.0714 2.55066 24.5225 2.55066C31.9734 2.55066 38.0351 8.61252 38.0351 16.0634C38.0351 23.5143 31.9732 29.5762 24.5225 29.5762Z" />
                    <path d="M27.3565 11.9541C27.3565 12.6583 27.9276 13.2294 28.6318 13.2294C29.336 13.2294 29.9072 12.6583 29.9072 11.9541C29.9072 9.42449 28.1532 7.29766 25.7978 6.72333V5.3515C25.7978 4.64731 25.2267 4.07617 24.5225 4.07617C23.8183 4.07617 23.2472 4.64731 23.2472 5.3515V6.72333C20.8916 7.29766 19.1376 9.42427 19.1376 11.9541C19.1376 14.4839 20.8916 16.6106 23.2472 17.1849V22.7003C22.324 22.2324 21.6883 21.2766 21.6883 20.1728C21.6883 19.4686 21.1172 18.8974 20.413 18.8974C19.7088 18.8974 19.1376 19.4686 19.1376 20.1728C19.1376 22.7026 20.8916 24.8292 23.2472 25.4035V26.7754C23.2472 27.4796 23.8183 28.0507 24.5225 28.0507C25.2267 28.0507 25.7978 27.4796 25.7978 26.7754V25.4035C28.1532 24.8292 29.9072 22.7026 29.9072 20.1728C29.9072 17.6429 28.1532 15.5163 25.7978 14.942V9.42682C26.7208 9.89466 27.3565 10.8505 27.3565 11.9541ZM21.6883 11.9541C21.6883 10.8503 22.324 9.89445 23.2472 9.42661V14.4816C22.3238 14.014 21.6883 13.0579 21.6883 11.9541ZM27.3565 20.173C27.3565 21.2768 26.721 22.2326 25.7978 22.7003V17.6457C26.7208 18.1133 27.3565 19.0694 27.3565 20.173Z" />
                </svg>
            )
        },
        {
            index: 2, title: 'personal tax', description: 'There are many variation of the pasage available majority have make suffered alteration.', serviceImage: '/service/service2.svg',
            iconImage: (
                <svg
                    className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                >
                    <path d="M10.0301 28.5029H6.4447C4.91685 28.5029 3.67383 29.746 3.67383 31.274V47.2295C3.67383 48.7573 4.91685 50.0005 6.4447 50.0005H10.0301C11.5579 50.0005 12.8012 48.7575 12.8012 47.2295V31.274C12.8012 29.746 11.5579 28.5029 10.0301 28.5029ZM10.2505 47.2295C10.2505 47.3511 10.1517 47.4499 10.0301 47.4499H6.4447C6.32333 47.4499 6.22449 47.3511 6.22449 47.2295V31.274C6.22449 31.1524 6.32333 31.0536 6.4447 31.0536H10.0301C10.1517 31.0536 10.2505 31.1524 10.2505 31.274V47.2295Z" />
                    <path d="M21.0983 34.1738H17.5129C15.9851 34.1738 14.7418 35.4169 14.7418 36.9449V47.2288C14.7418 48.7566 15.9851 49.9998 17.5129 49.9998H21.0983C22.6261 49.9998 23.8692 48.7568 23.8692 47.2288V36.9449C23.8692 35.4169 22.6263 34.1738 21.0983 34.1738ZM21.3185 47.2288C21.3185 47.3503 21.2197 47.4492 21.0983 47.4492H17.5129C17.3913 47.4492 17.2925 47.3503 17.2925 47.2288V36.9449C17.2925 36.8233 17.3913 36.7245 17.5129 36.7245H21.0983C21.2197 36.7245 21.3185 36.8233 21.3185 36.9449V47.2288Z" />
                    <path d="M32.1666 33.4561H28.5813C27.0534 33.4561 25.8102 34.6991 25.8102 36.2271V47.2292C25.8102 48.7571 27.0534 50.0003 28.5813 50.0003H32.1666C33.6945 50.0003 34.9375 48.7573 34.9375 47.2292V36.2271C34.9375 34.6993 33.6945 33.4561 32.1666 33.4561ZM32.3869 47.2292C32.3869 47.3508 32.288 47.4496 32.1666 47.4496H28.5813C28.4597 47.4496 28.3608 47.3508 28.3608 47.2292V36.2271C28.3608 36.1056 28.4597 36.0067 28.5813 36.0067H32.1666C32.288 36.0067 32.3869 36.1056 32.3869 36.2271V47.2292Z" />
                    <path d="M43.5556 29.2207H39.9702C38.4423 29.2207 37.1991 30.4637 37.1991 31.9918V47.229C37.1991 48.7569 38.4423 50.0001 39.9702 50.0001H43.5556C45.0834 50.0001 46.3264 48.7571 46.3264 47.229V31.9918C46.3264 30.4637 45.0834 29.2207 43.5556 29.2207ZM43.7758 47.2288C43.7758 47.3504 43.6769 47.4492 43.5556 47.4492H39.9702C39.8486 47.4492 39.7498 47.3504 39.7498 47.2288V31.9916C39.7498 31.87 39.8486 31.7712 39.9702 31.7712H43.5556C43.6769 31.7712 43.7758 31.87 43.7758 31.9916V47.2288Z" />
                    <path d="M24.5225 0C15.6651 0 8.45886 7.20605 8.45886 16.0634C8.45886 24.9208 15.6649 32.1269 24.5223 32.1269C33.3797 32.1269 40.5855 24.9208 40.5855 16.0634C40.5855 7.20605 33.3799 0 24.5225 0ZM24.5225 29.5762C17.0714 29.5762 11.0097 23.5143 11.0097 16.0634C11.0097 8.61252 17.0714 2.55066 24.5225 2.55066C31.9734 2.55066 38.0351 8.61252 38.0351 16.0634C38.0351 23.5143 31.9732 29.5762 24.5225 29.5762Z" />
                    <path d="M27.3565 11.9541C27.3565 12.6583 27.9276 13.2294 28.6318 13.2294C29.336 13.2294 29.9072 12.6583 29.9072 11.9541C29.9072 9.42449 28.1532 7.29766 25.7978 6.72333V5.3515C25.7978 4.64731 25.2267 4.07617 24.5225 4.07617C23.8183 4.07617 23.2472 4.64731 23.2472 5.3515V6.72333C20.8916 7.29766 19.1376 9.42427 19.1376 11.9541C19.1376 14.4839 20.8916 16.6106 23.2472 17.1849V22.7003C22.324 22.2324 21.6883 21.2766 21.6883 20.1728C21.6883 19.4686 21.1172 18.8974 20.413 18.8974C19.7088 18.8974 19.1376 19.4686 19.1376 20.1728C19.1376 22.7026 20.8916 24.8292 23.2472 25.4035V26.7754C23.2472 27.4796 23.8183 28.0507 24.5225 28.0507C25.2267 28.0507 25.7978 27.4796 25.7978 26.7754V25.4035C28.1532 24.8292 29.9072 22.7026 29.9072 20.1728C29.9072 17.6429 28.1532 15.5163 25.7978 14.942V9.42682C26.7208 9.89466 27.3565 10.8505 27.3565 11.9541ZM21.6883 11.9541C21.6883 10.8503 22.324 9.89445 23.2472 9.42661V14.4816C22.3238 14.014 21.6883 13.0579 21.6883 11.9541ZM27.3565 20.173C27.3565 21.2768 26.721 22.2326 25.7978 22.7003V17.6457C26.7208 18.1133 27.3565 19.0694 27.3565 20.173Z" />
                </svg>
            )
        },
        {
            index: 3, title: 'insurance tax', description: 'There are many variation of the pasage available majority have make suffered alteration.', serviceImage: '/service/service3.svg',
            iconImage: (
                <svg
                    className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                >
                    <path d="M23.4406 12.5H21.8812C21.0187 12.5 20.3187 13.2 20.3187 14.0625C20.3187 14.925 21.0187 15.625 21.8812 15.625H23.4469L23.45 17.1906C23.4515 18.0531 24.1531 18.7516 25.0156 18.75C25.8781 18.7484 26.5765 18.0469 26.575 17.1844L26.5719 15.625H28.1312C28.9937 15.625 29.6937 14.925 29.6937 14.0625C29.6937 13.2 28.9937 12.5 28.1312 12.5H26.5656L26.5625 10.9344C26.5609 10.0719 25.8594 9.37344 24.9969 9.375C24.1344 9.37657 23.4359 10.0781 23.4375 10.9406L23.4406 12.5Z" />
                    <path d="M40.625 14.0625V7.8125C40.625 6.56875 40.1313 5.37656 39.2516 4.49844C38.3734 3.61875 37.1812 3.125 35.9375 3.125C30.5266 3.125 19.4734 3.125 14.0625 3.125C12.8187 3.125 11.6266 3.61875 10.7484 4.49844C9.86875 5.37656 9.375 6.56875 9.375 7.8125V42.1875C9.375 43.4313 9.86875 44.6234 10.7484 45.5016C11.6266 46.3813 12.8187 46.875 14.0625 46.875C18.125 46.875 30.1813 46.875 35.9359 46.875C36.7984 46.875 37.4984 46.175 37.4984 45.3125C37.4984 44.45 36.7984 43.75 35.9359 43.75C30.1813 43.75 18.125 43.75 14.0625 43.75C13.6484 43.75 13.25 43.5859 12.9578 43.2922C12.6641 43 12.5 42.6016 12.5 42.1875V7.8125C12.5 7.39844 12.6641 7 12.9578 6.70781C13.25 6.41406 13.6484 6.25 14.0625 6.25H35.9375C36.3516 6.25 36.75 6.41406 37.0422 6.70781C37.3359 7 37.5 7.39844 37.5 7.8125V14.0625C37.5 14.925 38.2 15.625 39.0625 15.625C39.925 15.625 40.625 14.925 40.625 14.0625Z" />
                    <path d="M37.4719 22.1967C35.661 22.8436 34.3625 24.5764 34.3625 26.6108C34.3625 29.203 36.4454 31.278 39.0375 31.278C39.9016 31.278 40.6125 31.978 40.6125 32.842C40.6125 33.7045 39.9125 34.4045 39.05 34.4045C38.1875 34.4045 37.4875 33.7045 37.4875 32.842C37.4875 31.9795 36.7875 31.2795 35.925 31.2795C35.0625 31.2795 34.3625 31.9795 34.3625 32.842C34.3625 34.8764 35.6625 36.6108 37.4766 37.2577L37.4688 39.0748C37.4657 39.9373 38.1625 40.6405 39.025 40.6436C39.8875 40.6483 40.5907 39.9498 40.5938 39.0873L40.6016 37.2655C42.4266 36.6248 43.7375 34.8858 43.7375 32.842C43.7375 30.2561 41.6219 28.153 39.0375 28.153C38.1797 28.153 37.4875 27.4686 37.4875 26.6108C37.4875 25.7483 38.1875 25.0483 39.05 25.0483C39.9094 25.0483 40.6079 25.7436 40.6125 26.6014V26.6217C40.6188 27.478 41.3157 28.1733 42.175 28.1733C43.0375 28.1733 43.7375 27.4733 43.7375 26.6108C43.7375 24.5655 42.425 22.8248 40.5969 22.1858L40.6125 20.3436C40.6188 19.4811 39.925 18.7764 39.0625 18.7686C38.2 18.7623 37.4938 19.4577 37.4875 20.3186L37.4719 22.1967Z" />
                    <path d="M17.1875 26.5918H29.6875C30.55 26.5918 31.25 25.8918 31.25 25.0293C31.25 24.1668 30.55 23.4668 29.6875 23.4668H17.1875C16.325 23.4668 15.625 24.1668 15.625 25.0293C15.625 25.8918 16.325 26.5918 17.1875 26.5918Z" />
                    <path d="M17.1875 32.8613H29.6875C30.55 32.8613 31.25 32.1613 31.25 31.2988C31.25 30.4363 30.55 29.7363 29.6875 29.7363H17.1875C16.325 29.7363 15.625 30.4363 15.625 31.2988C15.625 32.1613 16.325 32.8613 17.1875 32.8613Z" />
                    <path d="M17.1875 39.0811H29.6875C30.55 39.0811 31.25 38.3811 31.25 37.5186C31.25 36.6561 30.55 35.9561 29.6875 35.9561H17.1875C16.325 35.9561 15.625 36.6561 15.625 37.5186C15.625 38.3811 16.325 39.0811 17.1875 39.0811Z" />
                </svg>
            )
        },
        {
            index: 3, title: 'insurance tax', description: 'There are many variation of the pasage available majority have make suffered alteration.', serviceImage: '/service/service3.svg',
            iconImage: (
                <svg
                    className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50"
                    height="50"
                >
                    <path d="M23.4406 12.5H21.8812C21.0187 12.5 20.3187 13.2 20.3187 14.0625C20.3187 14.925 21.0187 15.625 21.8812 15.625H23.4469L23.45 17.1906C23.4515 18.0531 24.1531 18.7516 25.0156 18.75C25.8781 18.7484 26.5765 18.0469 26.575 17.1844L26.5719 15.625H28.1312C28.9937 15.625 29.6937 14.925 29.6937 14.0625C29.6937 13.2 28.9937 12.5 28.1312 12.5H26.5656L26.5625 10.9344C26.5609 10.0719 25.8594 9.37344 24.9969 9.375C24.1344 9.37657 23.4359 10.0781 23.4375 10.9406L23.4406 12.5Z" />
                    <path d="M40.625 14.0625V7.8125C40.625 6.56875 40.1313 5.37656 39.2516 4.49844C38.3734 3.61875 37.1812 3.125 35.9375 3.125C30.5266 3.125 19.4734 3.125 14.0625 3.125C12.8187 3.125 11.6266 3.61875 10.7484 4.49844C9.86875 5.37656 9.375 6.56875 9.375 7.8125V42.1875C9.375 43.4313 9.86875 44.6234 10.7484 45.5016C11.6266 46.3813 12.8187 46.875 14.0625 46.875C18.125 46.875 30.1813 46.875 35.9359 46.875C36.7984 46.875 37.4984 46.175 37.4984 45.3125C37.4984 44.45 36.7984 43.75 35.9359 43.75C30.1813 43.75 18.125 43.75 14.0625 43.75C13.6484 43.75 13.25 43.5859 12.9578 43.2922C12.6641 43 12.5 42.6016 12.5 42.1875V7.8125C12.5 7.39844 12.6641 7 12.9578 6.70781C13.25 6.41406 13.6484 6.25 14.0625 6.25H35.9375C36.3516 6.25 36.75 6.41406 37.0422 6.70781C37.3359 7 37.5 7.39844 37.5 7.8125V14.0625C37.5 14.925 38.2 15.625 39.0625 15.625C39.925 15.625 40.625 14.925 40.625 14.0625Z" />
                    <path d="M37.4719 22.1967C35.661 22.8436 34.3625 24.5764 34.3625 26.6108C34.3625 29.203 36.4454 31.278 39.0375 31.278C39.9016 31.278 40.6125 31.978 40.6125 32.842C40.6125 33.7045 39.9125 34.4045 39.05 34.4045C38.1875 34.4045 37.4875 33.7045 37.4875 32.842C37.4875 31.9795 36.7875 31.2795 35.925 31.2795C35.0625 31.2795 34.3625 31.9795 34.3625 32.842C34.3625 34.8764 35.6625 36.6108 37.4766 37.2577L37.4688 39.0748C37.4657 39.9373 38.1625 40.6405 39.025 40.6436C39.8875 40.6483 40.5907 39.9498 40.5938 39.0873L40.6016 37.2655C42.4266 36.6248 43.7375 34.8858 43.7375 32.842C43.7375 30.2561 41.6219 28.153 39.0375 28.153C38.1797 28.153 37.4875 27.4686 37.4875 26.6108C37.4875 25.7483 38.1875 25.0483 39.05 25.0483C39.9094 25.0483 40.6079 25.7436 40.6125 26.6014V26.6217C40.6188 27.478 41.3157 28.1733 42.175 28.1733C43.0375 28.1733 43.7375 27.4733 43.7375 26.6108C43.7375 24.5655 42.425 22.8248 40.5969 22.1858L40.6125 20.3436C40.6188 19.4811 39.925 18.7764 39.0625 18.7686C38.2 18.7623 37.4938 19.4577 37.4875 20.3186L37.4719 22.1967Z" />
                    <path d="M17.1875 26.5918H29.6875C30.55 26.5918 31.25 25.8918 31.25 25.0293C31.25 24.1668 30.55 23.4668 29.6875 23.4668H17.1875C16.325 23.4668 15.625 24.1668 15.625 25.0293C15.625 25.8918 16.325 26.5918 17.1875 26.5918Z" />
                    <path d="M17.1875 32.8613H29.6875C30.55 32.8613 31.25 32.1613 31.25 31.2988C31.25 30.4363 30.55 29.7363 29.6875 29.7363H17.1875C16.325 29.7363 15.625 30.4363 15.625 31.2988C15.625 32.1613 16.325 32.8613 17.1875 32.8613Z" />
                    <path d="M17.1875 39.0811H29.6875C30.55 39.0811 31.25 38.3811 31.25 37.5186C31.25 36.6561 30.55 35.9561 29.6875 35.9561H17.1875C16.325 35.9561 15.625 36.6561 15.625 37.5186C15.625 38.3811 16.325 39.0811 17.1875 39.0811Z" />
                </svg>
            )
        },
       
    ]

    return (
        <section className="max-w-[1320px] mx-auto my-40">
            <SectionHeader heading='service' title='Tax Services that we provide' />
            <div className="service relative px-4 lg:px-0 mt-7 md:mt-10 lg:mt-[50px] space-y-4 md:space-y-0 w-full ">
                <Swiper
                    // slidesPerView={1}
                    // spaceBetween={24}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        668: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                    ref={swipperRef}
                    className="mt-10"
                >
                    {serviceData.map((data) => (
                        <SwiperSlide >
                            <ServiceCard index={data.index} title={data.title} description={data.description} serviceImage={data.serviceImage} iconImage={data.iconImage} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='hidden md:flex absolute right-0 -bottom-3 z-10 items-center justify-end space-x-6 mr-2'>
                    <button onClick={Previous} className='swipper-button group'>
                        <svg
                            className="mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                        >
                            <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
                        </svg>
                    </button>
                    <button onClick={Next} className='swipper-button group'>
                        <svg
                            className="rotate-180 mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                        >
                            <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Service;