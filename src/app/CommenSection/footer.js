import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer-section position-relative" id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="footer-logo d-flex justify-content-center justify-content-md-start">
                                <img src="assets/images/logo.png" className='img-fluid' alt="logo" />
                            </div>
                            <div className="footer-images d-flex mt-2 mt-md-4 justify-content-center justify-content-md-start">
                                <div className='text-center me-4'>
                                    <img src="assets/images/nobot.png" className='img-fluid mb-2 no-bot' alt="nobot" />
                                    <h6 className="">No Bot</h6>
                                </div>
                                <div className='text-center'>
                                    <img src="assets/images/upi-icon.png" className='img-fluid mb-2' alt="upi-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="footer-links">
                                <h6>Useful Link :</h6>
                                <ul>
                                    <li>
                                        <Link href="#">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Features</Link>
                                    </li>
                                    <li>
                                        <Link href="#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="#">About us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <div className="footer-links">
                                <h6>Information :</h6>
                                <ul>
                                    <li>
                                        <Link href="/Privacy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms and Condition</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Gambling Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Refund Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="footer-links text-center text-sm-start w-100">
                                <h6>Follow us : </h6>
                                <ul className='social-ul m-auto m-sm-0'>
                                    <li>
                                        <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="21" viewBox="0 0 11 21" fill="none">
                                            <g clip-path="url(#clip0_3_154)">
                                                <path d="M3.1221 20.644V11.2595H0.640625V7.88056H3.1221V4.99454C3.1221 2.72668 4.58792 0.644043 7.96549 0.644043C9.333 0.644043 10.3442 0.775143 10.3442 0.775143L10.2645 3.93046C10.2645 3.93046 9.23326 3.92042 8.10788 3.92042C6.88988 3.92042 6.69474 4.48172 6.69474 5.41334V7.88056H10.3614L10.2018 11.2595H6.69474V20.644H3.1221Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3_154">
                                                    <rect width="9.728" height="20" fill="white" transform="translate(0.640625 0.644043)" />
                                                </clipPath>
                                            </defs>
                                        </svg></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <g clip-path="url(#clip0_3_158)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14531 1.53107C8.12281 1.48607 8.43448 1.47607 10.9245 1.47607C13.4145 1.47607 13.7261 1.48691 14.7028 1.53107C15.6795 1.57524 16.3461 1.73107 16.9295 1.95691C17.5403 2.18774 18.0945 2.54857 18.5528 3.01524C19.0195 3.47274 19.3795 4.02607 19.6095 4.63774C19.8361 5.22107 19.9911 5.88774 20.0361 6.86274C20.0811 7.84191 20.0911 8.15357 20.0911 10.6427C20.0911 13.1327 20.0803 13.4444 20.0361 14.4219C19.992 15.3969 19.8361 16.0636 19.6095 16.6469C19.3795 17.2587 19.0189 17.8129 18.5528 18.2711C18.0945 18.7377 17.5403 19.0977 16.9295 19.3277C16.3461 19.5544 15.6795 19.7094 14.7045 19.7544C13.7261 19.7994 13.4145 19.8094 10.9245 19.8094C8.43448 19.8094 8.12281 19.7986 7.14531 19.7544C6.17031 19.7102 5.50365 19.5544 4.92031 19.3277C4.30858 19.0977 3.75433 18.7371 3.29615 18.2711C2.8298 17.8133 2.46891 17.2593 2.23865 16.6477C2.01281 16.0644 1.85781 15.3977 1.81281 14.4227C1.76781 13.4436 1.75781 13.1319 1.75781 10.6427C1.75781 8.15274 1.76865 7.84107 1.81281 6.86441C1.85698 5.88774 2.01281 5.22107 2.23865 4.63774C2.46925 4.02614 2.83041 3.47217 3.29698 3.01441C3.75451 2.54816 4.30821 2.18728 4.91948 1.95691C5.50281 1.73107 6.16948 1.57607 7.14448 1.53107H7.14531ZM14.6286 3.18107C13.662 3.13691 13.372 3.12774 10.9245 3.12774C8.47698 3.12774 8.18698 3.13691 7.22031 3.18107C6.32615 3.22191 5.84115 3.37107 5.51781 3.49691C5.09031 3.66357 4.78448 3.86107 4.46365 4.18191C4.15952 4.47778 3.92546 4.83798 3.77865 5.23607C3.65281 5.55941 3.50365 6.04441 3.46281 6.93857C3.41865 7.90524 3.40948 8.19524 3.40948 10.6427C3.40948 13.0902 3.41865 13.3802 3.46281 14.3469C3.50365 15.2411 3.65281 15.7261 3.77865 16.0494C3.92531 16.4469 4.15948 16.8077 4.46365 17.1036C4.75948 17.4077 5.12031 17.6419 5.51781 17.7886C5.84115 17.9144 6.32615 18.0636 7.22031 18.1044C8.18698 18.1486 8.47615 18.1577 10.9245 18.1577C13.3728 18.1577 13.662 18.1486 14.6286 18.1044C15.5228 18.0636 16.0078 17.9144 16.3311 17.7886C16.7586 17.6219 17.0645 17.4244 17.3853 17.1036C17.6895 16.8077 17.9236 16.4469 18.0703 16.0494C18.1961 15.7261 18.3453 15.2411 18.3861 14.3469C18.4303 13.3802 18.4395 13.0902 18.4395 10.6427C18.4395 8.19524 18.4303 7.90524 18.3861 6.93857C18.3453 6.04441 18.1961 5.55941 18.0703 5.23607C17.9036 4.80857 17.7061 4.50274 17.3853 4.18191C17.0894 3.8778 16.7292 3.64375 16.3311 3.49691C16.0078 3.37107 15.5228 3.22191 14.6286 3.18107ZM9.75365 13.4686C10.4075 13.7408 11.1356 13.7775 11.8136 13.5725C12.4915 13.3675 13.0773 12.9335 13.4708 12.3446C13.8643 11.7557 14.0412 11.0485 13.9712 10.3437C13.9012 9.63886 13.5886 8.98022 13.087 8.48024C12.7672 8.16064 12.3805 7.91592 11.9548 7.7637C11.529 7.61147 11.0748 7.55554 10.6249 7.59992C10.1749 7.6443 9.74044 7.78789 9.35265 8.02035C8.96486 8.25281 8.63343 8.56836 8.38223 8.94428C8.13103 9.32021 7.9663 9.74715 7.89991 10.1944C7.83351 10.6416 7.8671 11.098 7.99826 11.5307C8.12942 11.9634 8.35488 12.3616 8.65841 12.6967C8.96195 13.0318 9.336 13.2954 9.75365 13.4686ZM7.59281 7.31107C8.03033 6.87355 8.54975 6.52649 9.12139 6.28971C9.69304 6.05292 10.3057 5.93105 10.9245 5.93105C11.5432 5.93105 12.1559 6.05292 12.7276 6.28971C13.2992 6.52649 13.8186 6.87355 14.2561 7.31107C14.6937 7.74859 15.0407 8.26801 15.2775 8.83966C15.5143 9.4113 15.6362 10.024 15.6362 10.6427C15.6362 11.2615 15.5143 11.8742 15.2775 12.4458C15.0407 13.0175 14.6937 13.5369 14.2561 13.9744C13.3725 14.858 12.1741 15.3544 10.9245 15.3544C9.67486 15.3544 8.47642 14.858 7.59281 13.9744C6.7092 13.0908 6.21279 11.8924 6.21279 10.6427C6.21279 9.39312 6.7092 8.19469 7.59281 7.31107ZM16.6811 6.63274C16.7896 6.53046 16.8764 6.40747 16.9364 6.27105C16.9964 6.13463 17.0285 5.98755 17.0307 5.83852C17.0328 5.68948 17.0051 5.54153 16.949 5.40342C16.893 5.2653 16.8098 5.13983 16.7044 5.03444C16.5991 4.92905 16.4736 4.84587 16.3355 4.78984C16.1974 4.73381 16.0494 4.70605 15.9004 4.70823C15.7513 4.7104 15.6043 4.74245 15.4678 4.80249C15.3314 4.86252 15.2084 4.94932 15.1061 5.05774C14.9072 5.2686 14.7983 5.54868 14.8026 5.83852C14.8068 6.12836 14.9238 6.40514 15.1288 6.61011C15.3337 6.81508 15.6105 6.9321 15.9004 6.93632C16.1902 6.94055 16.4703 6.83165 16.6811 6.63274Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3_158">
                                                    <rect width="20" height="20" fill="white" transform="translate(0.929688 0.644043)" />
                                                </clipPath>
                                            </defs>
                                        </svg></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M19.9217 4.7577C19.2258 5.06604 18.4783 5.27437 17.6925 5.36854C18.5033 4.88336 19.11 4.11976 19.3992 3.2202C18.6374 3.6727 17.8036 3.9912 16.9342 4.16187C16.3495 3.53759 15.5751 3.12381 14.7311 2.98477C13.8872 2.84572 13.0209 2.9892 12.2669 3.39291C11.5128 3.79663 10.9131 4.43801 10.561 5.21746C10.2088 5.99691 10.1238 6.87083 10.3192 7.70354C8.77557 7.62603 7.26552 7.22483 5.88702 6.52596C4.50852 5.82709 3.29237 4.84617 2.3175 3.64687C1.98417 4.22187 1.7925 4.88854 1.7925 5.59854C1.79213 6.2377 1.94953 6.86707 2.25073 7.43081C2.55194 7.99456 2.98763 8.47524 3.51917 8.8302C2.90273 8.81059 2.29989 8.64402 1.76083 8.34437V8.39437C1.76077 9.29082 2.07086 10.1597 2.63849 10.8535C3.20611 11.5474 3.99631 12.0235 4.875 12.201C4.30315 12.3558 3.70361 12.3786 3.12167 12.2677C3.36958 13.039 3.8525 13.7136 4.50281 14.1968C5.15312 14.6801 5.93826 14.9479 6.74833 14.9627C5.37319 16.0422 3.67491 16.6278 1.92667 16.6252C1.61698 16.6253 1.30756 16.6072 1 16.571C2.77456 17.712 4.84028 18.3176 6.95 18.3152C14.0917 18.3152 17.9958 12.4002 17.9958 7.2702C17.9958 7.10354 17.9917 6.9352 17.9842 6.76854C18.7436 6.21935 19.3991 5.53928 19.92 4.7602L19.9217 4.7577Z" fill="white" />
                                        </svg></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <g clip-path="url(#clip0_3_168)">
                                                <path d="M5.67531 18.144H2.04719V6.46029H5.67531V18.144ZM3.85906 4.86654C2.69906 4.86654 1.75781 3.90529 1.75781 2.74529C1.75781 2.18801 1.97919 1.65355 2.37325 1.25948C2.76732 0.865424 3.30178 0.644043 3.85906 0.644043C4.41635 0.644043 4.95081 0.865424 5.34487 1.25948C5.73893 1.65355 5.96031 2.18801 5.96031 2.74529C5.96031 3.90529 5.01906 4.86654 3.85906 4.86654ZM19.2541 18.144H15.6341V12.4565C15.6341 11.1009 15.6066 9.36279 13.7478 9.36279C11.8616 9.36279 11.5722 10.8353 11.5722 12.359V18.144H7.94781V6.46029H11.4272V8.05404H11.4778C11.9622 7.13592 13.1453 6.16717 14.9103 6.16717C18.5822 6.16717 19.2572 8.58529 19.2572 11.7259V18.144H19.2541Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3_168">
                                                    <rect width="20" height="20" fill="white" transform="translate(0.507812 0.644043)" />
                                                </clipPath>
                                            </defs>
                                        </svg></Link>
                                    </li>
                                </ul>
                                <p className='bold'>Contact  Us</p>
                                <Link href="mailto:kingsclub@gmail.com" className='d-flex align-items-center mb-4 justify-content-center justify-content-sm-start'><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18 7.37251V14.4995C18 15.1626 17.7366 15.7984 17.2678 16.2673C16.7989 16.7361 16.163 16.9995 15.5 16.9995H4.5C3.83696 16.9995 3.20107 16.7361 2.73223 16.2673C2.26339 15.7984 2 15.1626 2 14.4995V7.37251L9.746 11.9305C9.82295 11.9759 9.91066 11.9998 10 11.9998C10.0893 11.9998 10.177 11.9759 10.254 11.9305L18 7.37251ZM15.5 3.99951C16.1151 3.99942 16.7087 4.22612 17.1672 4.63625C17.6257 5.04638 17.9168 5.61115 17.985 6.22251L10 10.9195L2.015 6.22251C2.08316 5.61115 2.37432 5.04638 2.83279 4.63625C3.29127 4.22612 3.88485 3.99942 4.5 3.99951H15.5Z" fill="white" fill-opacity="0.8" />
                                </svg> kingsclub@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <p className='m-0'>Copyrights all rights reserved by RG Infotech | Privacy Policy | Terms of Service</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
