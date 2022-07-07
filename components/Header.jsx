    import React, {useContext, useState, useEffect} from 'react'
    import { getCategories } from '../services'
    import Link from 'next/link';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    const Header = () => {

        const [categories, setCategories] = useState([]);

    useEffect(() => {  
        getCategories()
            .then((newCategories)=> setCategories(newCategories))   
    }, [])  
    return (
    <div className="z-50 top-0 sticky bg-gradient-to-r from-sky-500 to-indigo-500 "   >        
        <div className="shadow-md">
            <div className="sm:px-4 lg:px-8 ">
            <div className="flex items-center container mx-auto px-20  h-16">
                <div className=" flex justify-end items-center px-2 lg:px-0">
                <Link href="/">
                    <span className=" cursor-pointer ">
                        {/* <svg id="logo-55" width="168" height="41" viewBox="0 0 168 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M49.2775 28.9524H61.2295V25.3524H53.5255V11.7924H49.2775V28.9524Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M68.3107 26.5524C66.6067 26.5524 65.7187 25.0644 65.7187 22.8324C65.7187 20.6004 66.6067 19.0884 68.3107 19.0884C70.0147 19.0884 70.9267 20.6004 70.9267 22.8324C70.9267 25.0644 70.0147 26.5524 68.3107 26.5524ZM68.3347 29.3364C72.2947 29.3364 74.8867 26.5284 74.8867 22.8324C74.8867 19.1364 72.2947 16.3284 68.3347 16.3284C64.3987 16.3284 61.7587 19.1364 61.7587 22.8324C61.7587 26.5284 64.3987 29.3364 68.3347 29.3364Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M81.7411 33.2004C83.5651 33.2004 85.1731 32.7924 86.2531 31.8324C87.2371 30.9444 87.8851 29.6004 87.8851 27.7524V16.6644H84.1411V17.9844H84.0931C83.3731 16.9524 82.2691 16.3044 80.6371 16.3044C77.5891 16.3044 75.4771 18.8484 75.4771 22.4484C75.4771 26.2164 78.0451 28.2804 80.8051 28.2804C82.2931 28.2804 83.2291 27.6804 83.9491 26.8644H84.0451V28.0884C84.0451 29.5764 83.3491 30.4404 81.6931 30.4404C80.3971 30.4404 79.7491 29.8884 79.5331 29.2404H75.7411C76.1251 31.8084 78.3571 33.2004 81.7411 33.2004ZM81.7171 25.3764C80.2531 25.3764 79.2931 24.1764 79.2931 22.3284C79.2931 20.4564 80.2531 19.2564 81.7171 19.2564C83.3491 19.2564 84.2131 20.6484 84.2131 22.3044C84.2131 24.0324 83.4211 25.3764 81.7171 25.3764Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M95.5835 26.5524C93.8795 26.5524 92.9915 25.0644 92.9915 22.8324C92.9915 20.6004 93.8795 19.0884 95.5835 19.0884C97.2875 19.0884 98.1995 20.6004 98.1995 22.8324C98.1995 25.0644 97.2875 26.5524 95.5835 26.5524ZM95.6075 29.3364C99.5675 29.3364 102.159 26.5284 102.159 22.8324C102.159 19.1364 99.5675 16.3284 95.6075 16.3284C91.6715 16.3284 89.0315 19.1364 89.0315 22.8324C89.0315 26.5284 91.6715 29.3364 95.6075 29.3364Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M103.302 28.9524H107.214V16.6644H103.302V28.9524ZM103.302 14.9604H107.214V11.7924H103.302V14.9604Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M108.911 33.0084H112.823V27.6804H112.871C113.639 28.7124 114.767 29.3364 116.351 29.3364C119.567 29.3364 121.703 26.7924 121.703 22.8084C121.703 19.1124 119.711 16.3044 116.447 16.3044C114.767 16.3044 113.567 17.0484 112.727 18.1524H112.655V16.6644H108.911V33.0084ZM115.343 26.3124C113.663 26.3124 112.703 24.9444 112.703 22.9524C112.703 20.9604 113.567 19.4484 115.271 19.4484C116.951 19.4484 117.743 20.8404 117.743 22.9524C117.743 25.0404 116.831 26.3124 115.343 26.3124Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M128.072 29.3364C131.288 29.3364 133.664 27.9444 133.664 25.2564C133.664 22.1124 131.12 21.5604 128.96 21.2004C127.4 20.9124 126.008 20.7924 126.008 19.9284C126.008 19.1604 126.752 18.8004 127.712 18.8004C128.792 18.8004 129.536 19.1364 129.68 20.2404H133.28C133.088 17.8164 131.216 16.3044 127.736 16.3044C124.832 16.3044 122.432 17.6484 122.432 20.2404C122.432 23.1204 124.712 23.6964 126.848 24.0564C128.48 24.3444 129.968 24.4644 129.968 25.5684C129.968 26.3604 129.224 26.7924 128.048 26.7924C126.752 26.7924 125.936 26.1924 125.792 24.9684H122.096C122.216 27.6804 124.472 29.3364 128.072 29.3364Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M138.978 29.3124C140.682 29.3124 141.762 28.6404 142.65 27.4404H142.722V28.9524H146.466V16.6644H142.554V23.5284C142.554 24.9924 141.738 26.0004 140.394 26.0004C139.146 26.0004 138.546 25.2564 138.546 23.9124V16.6644H134.658V24.7284C134.658 27.4644 136.146 29.3124 138.978 29.3124Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M148.168 28.9524H152.08V22.0644C152.08 20.6004 152.8 19.5684 154.024 19.5684C155.2 19.5684 155.752 20.3364 155.752 21.6564V28.9524H159.664V22.0644C159.664 20.6004 160.36 19.5684 161.608 19.5684C162.784 19.5684 163.336 20.3364 163.336 21.6564V28.9524H167.248V20.9604C167.248 18.2004 165.856 16.3044 163.072 16.3044C161.488 16.3044 160.168 16.9764 159.208 18.4644H159.16C158.536 17.1444 157.312 16.3044 155.704 16.3044C153.928 16.3044 152.752 17.1444 151.984 18.4164H151.912V16.6644H148.168V28.9524Z" class="cneutral" fill="#001830" stop-color="#001830"></path> <path d="M25.4099 1.97689L21.4769 0.923031L18.1625 13.2926L15.1702 2.12527L11.2371 3.17913L14.4701 15.2446L6.41746 7.19201L3.53827 10.0712L12.371 18.904L1.37124 15.9566L0.317383 19.8896L12.336 23.11C12.1984 22.5165 12.1256 21.8981 12.1256 21.2627C12.1256 16.7651 15.7716 13.1191 20.2692 13.1191C24.7668 13.1191 28.4128 16.7651 28.4128 21.2627C28.4128 21.894 28.3409 22.5086 28.205 23.0986L39.1277 26.0253L40.1815 22.0923L28.1151 18.8591L39.1156 15.9115L38.0617 11.9785L25.9958 15.2115L34.0484 7.15895L31.1692 4.27976L22.459 12.99L25.4099 1.97689Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> <path d="M28.1943 23.1444C27.8571 24.57 27.1452 25.8507 26.1684 26.8768L34.0814 34.7899L36.9606 31.9107L28.1943 23.1444Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> <path d="M26.0884 26.9596C25.0998 27.9693 23.8505 28.7228 22.4495 29.1111L25.3289 39.8571L29.2619 38.8032L26.0884 26.9596Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> <path d="M22.3026 29.1504C21.6526 29.3175 20.9713 29.4063 20.2692 29.4063C19.517 29.4063 18.7886 29.3043 18.0971 29.1134L15.2151 39.8692L19.1481 40.923L22.3026 29.1504Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> <path d="M17.9581 29.0737C16.5785 28.6661 15.3514 27.903 14.383 26.8904L6.45052 34.8229L9.32971 37.7021L17.9581 29.0737Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> <path d="M14.3168 26.8203C13.365 25.8013 12.6717 24.5377 12.3417 23.1341L1.38334 26.0704L2.43719 30.0034L14.3168 26.8203Z" class="ccustom" fill="#007dfc" stop-color="#007dfc"></path> </svg> */}
                        <svg id="logo-44" width="172" height="40" viewBox="0 0 172 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M49.0364 29H60.3891V25.7673H52.4982V10.6727H49.0364V29Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M67.2113 29.3818C68.5859 29.3818 69.795 29.0763 70.8386 28.4654C71.8907 27.846 72.7095 26.9933 73.295 25.9073C73.8889 24.8127 74.1859 23.5527 74.1859 22.1273C74.1859 20.7103 73.8931 19.4588 73.3077 18.3727C72.7222 17.2782 71.9034 16.4212 70.8513 15.8018C69.8077 15.1824 68.5944 14.8727 67.2113 14.8727C65.8537 14.8727 64.6531 15.1782 63.6095 15.7891C62.5659 16.4 61.7471 17.2527 61.1531 18.3473C60.5592 19.4333 60.2622 20.6933 60.2622 22.1273C60.2622 23.5442 60.5507 24.8 61.1277 25.8945C61.7131 26.9806 62.5277 27.8333 63.5713 28.4527C64.615 29.0721 65.8283 29.3818 67.2113 29.3818ZM67.2113 26.1491C66.1337 26.1491 65.315 25.7885 64.755 25.0673C64.2034 24.3376 63.9277 23.3576 63.9277 22.1273C63.9277 20.9309 64.1907 19.9636 64.7168 19.2254C65.2513 18.4788 66.0828 18.1054 67.2113 18.1054C68.3059 18.1054 69.1289 18.4703 69.6804 19.2C70.2404 19.9297 70.5204 20.9054 70.5204 22.1273C70.5204 23.3067 70.2447 24.2739 69.6931 25.0291C69.1501 25.7757 68.3228 26.1491 67.2113 26.1491Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M81.0319 29.3818C81.6768 29.3818 82.2707 29.3054 82.8138 29.1527C83.3653 29 83.8659 28.7836 84.3156 28.5036V29.8909C84.3326 30.4 84.201 30.8242 83.921 31.1636C83.6495 31.5115 83.2847 31.7703 82.8265 31.94C82.3683 32.1182 81.8804 32.2073 81.3629 32.2073C80.8792 32.2073 80.4295 32.1012 80.0138 31.8891C79.6065 31.677 79.2925 31.3673 79.0719 30.96L75.8647 32.5127C76.3907 33.4036 77.1416 34.1206 78.1174 34.6636C79.0932 35.2151 80.1665 35.4909 81.3374 35.4909C82.3471 35.4909 83.2847 35.3551 84.1501 35.0836C85.0156 34.8206 85.7453 34.4176 86.3392 33.8745C86.9416 33.3315 87.3532 32.64 87.5738 31.8C87.6501 31.503 87.701 31.2018 87.7265 30.8963C87.7604 30.5994 87.7774 30.2812 87.7774 29.9418V15.2545H84.7483V16.0182C84.2816 15.6533 83.7513 15.3733 83.1574 15.1782C82.5719 14.9745 81.9229 14.8727 81.2101 14.8727C79.895 14.8727 78.7495 15.1867 77.7738 15.8145C76.798 16.4424 76.0386 17.3036 75.4956 18.3982C74.961 19.4842 74.6938 20.7273 74.6938 22.1273C74.6938 23.5018 74.9568 24.7363 75.4829 25.8309C76.0174 26.9254 76.7598 27.7909 77.7101 28.4273C78.6604 29.0636 79.7677 29.3818 81.0319 29.3818ZM81.5919 26.3018C80.8453 26.3018 80.2344 26.1151 79.7592 25.7418C79.2841 25.3685 78.9319 24.8679 78.7029 24.24C78.4738 23.6036 78.3592 22.8994 78.3592 22.1273C78.3592 21.3636 78.478 20.6679 78.7156 20.04C78.9532 19.4036 79.318 18.8988 79.8101 18.5254C80.3107 18.1436 80.9471 17.9527 81.7192 17.9527C82.8053 17.9527 83.5816 18.3388 84.0483 19.1109C84.515 19.8745 84.7483 20.88 84.7483 22.1273C84.7483 23.3745 84.5107 24.3842 84.0356 25.1563C83.5689 25.92 82.7544 26.3018 81.5919 26.3018Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M95.9998 29.3818C97.3744 29.3818 98.5835 29.0763 99.6271 28.4654C100.679 27.846 101.498 26.9933 102.083 25.9073C102.677 24.8127 102.974 23.5527 102.974 22.1273C102.974 20.7103 102.682 19.4588 102.096 18.3727C101.511 17.2782 100.692 16.4212 99.6398 15.8018C98.5962 15.1824 97.3828 14.8727 95.9998 14.8727C94.6422 14.8727 93.4416 15.1782 92.398 15.7891C91.3544 16.4 90.5356 17.2527 89.9416 18.3473C89.3477 19.4333 89.0507 20.6933 89.0507 22.1273C89.0507 23.5442 89.3392 24.8 89.9162 25.8945C90.5016 26.9806 91.3162 27.8333 92.3598 28.4527C93.4035 29.0721 94.6168 29.3818 95.9998 29.3818ZM95.9998 26.1491C94.9222 26.1491 94.1034 25.7885 93.5434 25.0673C92.9919 24.3376 92.7162 23.3576 92.7162 22.1273C92.7162 20.9309 92.9792 19.9636 93.5053 19.2254C94.0398 18.4788 94.8713 18.1054 95.9998 18.1054C97.0944 18.1054 97.9174 18.4703 98.4689 19.2C99.0289 19.9297 99.3089 20.9054 99.3089 22.1273C99.3089 23.3067 99.0331 24.2739 98.4816 25.0291C97.9386 25.7757 97.1113 26.1491 95.9998 26.1491Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M104.5 13.3454H107.962V10.2909H104.5V13.3454ZM104.5 29H107.962V15.2545H104.5V29Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M110.225 35.1091H113.712V28.5036C114.162 28.7836 114.658 29 115.201 29.1527C115.753 29.3054 116.351 29.3818 116.996 29.3818C118.26 29.3818 119.368 29.0636 120.318 28.4273C121.268 27.7909 122.006 26.9254 122.532 25.8309C123.067 24.7363 123.334 23.5018 123.334 22.1273C123.334 20.7273 123.063 19.4842 122.52 18.3982C121.985 17.3036 121.23 16.4424 120.254 15.8145C119.278 15.1867 118.133 14.8727 116.818 14.8727C116.105 14.8727 115.452 14.9745 114.858 15.1782C114.272 15.3733 113.746 15.6533 113.28 16.0182V15.2545H110.225V35.1091ZM116.436 26.3018C115.282 26.3018 114.468 25.92 113.992 25.1563C113.517 24.3842 113.28 23.3745 113.28 22.1273C113.28 20.88 113.513 19.8745 113.98 19.1109C114.455 18.3388 115.231 17.9527 116.309 17.9527C117.081 17.9527 117.713 18.1436 118.205 18.5254C118.706 18.8988 119.075 19.4036 119.312 20.04C119.55 20.6679 119.669 21.3636 119.669 22.1273C119.669 22.8994 119.554 23.6036 119.325 24.24C119.096 24.8679 118.744 25.3685 118.269 25.7418C117.794 26.1151 117.183 26.3018 116.436 26.3018Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M129.606 29.3818C131.404 29.3818 132.813 28.9788 133.831 28.1727C134.849 27.3666 135.358 26.2594 135.358 24.8509C135.358 23.7818 135.027 22.9376 134.366 22.3182C133.712 21.6988 132.601 21.1854 131.031 20.7782C129.962 20.5066 129.164 20.286 128.638 20.1163C128.121 19.9467 127.777 19.7812 127.607 19.62C127.446 19.4588 127.366 19.2594 127.366 19.0218C127.366 18.623 127.556 18.3176 127.938 18.1054C128.329 17.8933 128.842 17.8085 129.478 17.8509C130.827 17.9527 131.566 18.5297 131.693 19.5818L135.231 18.9454C135.053 17.6982 134.442 16.7097 133.398 15.98C132.355 15.2418 131.023 14.8727 129.402 14.8727C127.739 14.8727 126.411 15.263 125.418 16.0436C124.426 16.8242 123.929 17.8763 123.929 19.2C123.929 20.2521 124.273 21.0836 124.96 21.6945C125.647 22.297 126.831 22.8145 128.511 23.2473C129.504 23.5103 130.233 23.7224 130.7 23.8836C131.175 24.0448 131.481 24.2103 131.616 24.38C131.752 24.5412 131.82 24.7576 131.82 25.0291C131.82 25.4618 131.65 25.8012 131.311 26.0473C130.972 26.2848 130.488 26.4036 129.86 26.4036C129.096 26.4036 128.464 26.2212 127.964 25.8563C127.472 25.4915 127.153 24.9867 127.009 24.3418L123.471 24.8763C123.7 26.3103 124.345 27.4218 125.406 28.2109C126.475 28.9915 127.875 29.3818 129.606 29.3818Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M141.744 29.4073C142.737 29.4073 143.602 29.2418 144.341 28.9109C145.079 28.58 145.698 28.1388 146.199 27.5873V29H149.253V15.2545H145.766V22.2291C145.766 23.0776 145.668 23.7648 145.473 24.2909C145.287 24.8085 145.045 25.203 144.748 25.4745C144.451 25.7376 144.133 25.9157 143.793 26.0091C143.454 26.1024 143.136 26.1491 142.839 26.1491C142.101 26.1491 141.528 25.9836 141.121 25.6527C140.722 25.3218 140.433 24.9103 140.255 24.4182C140.077 23.926 139.971 23.4382 139.937 22.9545C139.903 22.4624 139.886 22.0594 139.886 21.7454V15.2545H136.373V22.9673C136.373 23.1963 136.39 23.5612 136.424 24.0618C136.458 24.5624 136.556 25.1182 136.717 25.7291C136.878 26.3315 137.145 26.9127 137.519 27.4727C137.901 28.0327 138.431 28.4951 139.11 28.86C139.788 29.2248 140.667 29.4073 141.744 29.4073Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M151.258 29H154.745V20.6763C154.745 19.8873 154.961 19.2467 155.394 18.7545C155.835 18.2539 156.416 18.0036 157.138 18.0036C157.893 18.0036 158.483 18.2582 158.907 18.7673C159.339 19.2679 159.556 19.9721 159.556 20.88V29H163.018V20.6763C163.018 19.8873 163.234 19.2467 163.667 18.7545C164.108 18.2539 164.689 18.0036 165.41 18.0036C166.166 18.0036 166.755 18.2582 167.179 18.7673C167.612 19.2679 167.829 19.9721 167.829 20.88V29H171.29V19.9636C171.29 18.4618 170.887 17.2485 170.081 16.3236C169.284 15.3903 168.1 14.9236 166.53 14.9236C165.648 14.9236 164.838 15.1145 164.099 15.4963C163.361 15.8782 162.772 16.4 162.33 17.0618C161.974 16.417 161.465 15.8994 160.803 15.5091C160.141 15.1188 159.318 14.9236 158.334 14.9236C157.502 14.9236 156.739 15.0891 156.043 15.42C155.347 15.7424 154.77 16.1879 154.312 16.7563V15.2545H151.258V29Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M20 0C8.9543 0 0 8.9543 0 20C11.0457 20 20 11.0457 20 0Z" fill="#ffffff" class="ccustom" stop-color="#ffffff"></path> <path d="M20 40C31.0457 40 40 31.0457 40 20C28.9543 20 20 28.9543 20 40Z" fill="#ffffff" class="ccustom" stop-color="#ffffff"></path> <path d="M20 0C31.0457 0 40 8.9543 40 20C28.9543 20 20 11.0457 20 0Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> <path d="M20 40C8.9543 40 -9.65645e-07 31.0457 0 20C11.0457 20 20 28.9543 20 40Z" fill="#bbbbbb" class="ccompli2" stop-color="#bbbbbb"></path> </svg>
                    </span>
                </Link> 
                </div>
    
                
                <div className="hidden flex-1 lg:flex justify-end px-2 lg:ml-6">
                    <div className="flex">
                    <Link href={"/"} > 
                        <a className='ml-4 px-3 py-2 rounded-lg text-lime-50  hover:bg-indigo-300 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 '>Ana Sayfa</a>
                        
                    </Link>
    
                    <Link href={"/contact"}>
                        <a className='ml-4 px-3 py-2 rounded-lg text-lime-50  hover:bg-indigo-300 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 '>İletişim</a>
                    </Link>
    
                    <Link href={"/about"}>
                        <a className='ml-4 px-3 py-2 rounded-lg text-lime-50  hover:bg-indigo-300 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 '>Hakkımda</a>
                    </Link>
                    
                    <form class="flex items-center">   
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                <svg class="w-5 h-5 text-lime-50 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </form> 
               </div> 

                    
                    
    
                    </div>
    
                
            </div>
            </div>
    
    
    
    
    
        </div>
    </div>


    )
    }

    export default Header

