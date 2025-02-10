import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Select from 'react-select';

// Image
import paymentImg01 from "assets/images/payment/img-01.png";
import paymentImg02 from "assets/images/payment/img-02.png";
import paymentImg03 from "assets/images/payment/img-03.png";
import paymentImg04 from "assets/images/payment/img-04.png";

import productImg01 from "assets/images/product/img-01.png";
import productImg04 from "assets/images/product/img-04.png";
import productImg08 from "assets/images/product/img-08.png";

import delivery1 from "assets/images/brand/delivery-1.png";
import delivery2 from "assets/images/brand/delivery-2.png";
import delivery3 from "assets/images/brand/delivery-3.png";

// Icon
import { ShoppingBag, ChevronLeft, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const countryOptions = [
        { value: "Afghanistan", label: "Afghanistan" },
        { value: "Åland Islands", label: "Åland Islands" },
        { value: "Albania", label: "Albania" },
        { value: "Algeria", label: "Algeria" },
        { value: "American Samoa", label: "American Samoa" },
        { value: "Andorra", label: "Andorra" },
        { value: "Angola", label: "Angola" },
        { value: "Anguilla", label: "Anguilla" },
        { value: "Antarctica", label: "Antarctica" },
        { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
        { value: "Argentina", label: "Argentina" },
        { value: "Armenia", label: "Armenia" },
        { value: "Aruba", label: "Aruba" },
        { value: "Australia", label: " Australia" },
        { value: "Austria", label: " Austria" },
        { value: "Azerbaijan", label: " Azerbaijan" },
        { value: "Bahamas", label: " Bahamas" },
        { value: "Bahrain", label: " Bahrain" },
        { value: "Bangladesh", label: " Bangladesh" },
        { value: "Barbados", label: " Barbados" },
        { value: "Belarus", label: " Belarus" },
        { value: "Belgium", label: " Belgium" },
        { value: "Belize", label: " Belize" },
        { value: "Benin", label: " Benin" },
        { value: "Bermuda", label: " Bermuda" },
        { value: "Bhutan", label: " Bhutan" },
        { value: "Bolivia", label: " Bolivia" },
        { value: "Bosnia and Herzegovina", label: " Bosnia and Herzegovina" },
        { value: 'Botswana', label: 'Botswana' },
        { value: 'Bouvet Island', label: 'Bouvet Island' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'British Indian Ocean Territory', label: 'British Indian Ocean Territory' },
        { value: 'Brunei Darussalam', label: 'Brunei Darussalam' },
        { value: 'Bulgaria', label: 'Bulgaria' },
        { value: 'Burkina Faso', label: 'Burkina Faso' },
        { value: 'Burundi', label: 'Burundi' },
        { value: 'Cambodia', label: 'Cambodia' },
        { value: 'Cameroon', label: 'Cameroon' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Cape Verde', label: 'Cape Verde' },
        { value: 'Cayman Islands', label: 'Cayman Islands' },
        { value: 'Central African Republic', label: 'Central African Republic' },
        { value: 'Chad', label: 'Chad' },
        { value: 'Chile', label: 'Chile' },
        { value: 'China', label: 'China' },
        { value: 'Christmas Island', label: 'Christmas Island' },
        { value: 'Cocos (Keeling) Islands', label: 'Cocos (Keeling) Islands' },
        { value: 'Colombia', label: 'Colombia' },
        { value: 'Comoros', label: 'Comoros' },
        { value: 'Congo', label: 'Congo' },
        { value: 'Congo, The Democratic Republic of The', label: 'Congo, The Democratic Republic of The' },
        { value: 'Cook Islands', label: 'Cook Islands' },
        { value: 'Costa Rica', label: 'Costa Rica' },
        { value: "Cote D'ivoire", label: "Cote D'ivoire" },
        { value: 'Croatia', label: 'Croatia' },
        { value: 'Cuba', label: 'Cuba' },
        { value: 'Cyprus', label: 'Cyprus' },
        { value: 'Czech Republic', label: 'Czech Republic' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Djibouti', label: 'Djibouti' },
        { value: 'Dominica', label: 'Dominica' },
        { value: 'Dominican Republic', label: 'Dominican Republic' },
        { value: 'Ecuador', label: 'Ecuador' },
        { value: 'Egypt', label: 'Egypt' },
        { value: 'El Salvador', label: 'El Salvador' },
        { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
        { value: 'Eritrea', label: 'Eritrea' },
        { value: 'Estonia', label: 'Estonia' },
        { value: 'Ethiopia', label: 'Ethiopia' },
        { value: 'Falkland Islands (Malvinas)', label: 'Falkland Islands (Malvinas)' },
        { value: 'Faroe Islands', label: 'Faroe Islands' },
        { value: 'Fiji', label: 'Fiji' },
        { value: 'Finland', label: 'Finland' },
        { value: 'France', label: 'France' },
        { value: 'French Guiana', label: 'French Guiana' },
        { value: 'French Polynesia', label: 'French Polynesia' },
        { value: 'French Southern Territories', label: 'French Southern Territories' },
        { value: 'Gabon', label: 'Gabon' },
        { value: 'Gambia', label: 'Gambia' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'Gibraltar', label: 'Gibraltar' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Greenland', label: 'Greenland' },
        { value: 'Grenada', label: 'Grenada' },
        { value: 'Guadeloupe', label: 'Guadeloupe' },
        { value: 'Guam', label: 'Guam' },
        { value: 'Guatemala', label: 'Guatemala' },
        { value: 'Guernsey', label: 'Guernsey' },
        { value: 'Guinea', label: 'Guinea' },
        { value: 'Guinea-bissau', label: 'Guinea-bissau' },
        { value: 'Guyana', label: 'Guyana' },
        { value: 'Haiti', label: 'Haiti' },
        { value: 'Heard Island and Mcdonald Islands', label: 'Heard Island and Mcdonald Islands' },
        { value: 'Holy See (Vatican City State)', label: 'Holy See (Vatican City State)' },
        { value: 'Honduras', label: 'Honduras' },
        { value: 'Hong Kong', label: 'Hong Kong' },
        { value: 'Hungary', label: 'Hungary' },
        { value: 'Iceland', label: 'Iceland' },
        { value: 'India', label: 'India' },
        { value: 'Indonesia', label: 'Indonesia' },
        { value: 'Iran, Islamic Republic of', label: 'Iran, Islamic Republic of' },
        { value: 'Iraq', label: 'Iraq' },
        { value: 'Ireland', label: 'Ireland' },
        { value: 'Isle of Man', label: 'Isle of Man' },
        { value: 'Israel', label: 'Israel' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Jamaica', label: 'Jamaica' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Jersey', label: 'Jersey' },
        { value: 'Jordan', label: 'Jordan' },
        { value: 'Kazakhstan', label: 'Kazakhstan' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'Kiribati', label: 'Kiribati' },
        { value: 'Korea, Democratic People\'s Republic of', label: 'Korea, Democratic People\'s Republic of' },
        { value: 'Korea, Republic of', label: 'Korea, Republic of' },
        { value: 'Kuwait', label: 'Kuwait' },
        { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'Lao People\'s Democratic Republic', label: 'Lao People\'s Democratic Republic' },
        { value: 'Latvia', label: 'Latvia' },
        { value: 'Lebanon', label: 'Lebanon' },
        { value: 'Lesotho', label: 'Lesotho' },
        { value: 'Liberia', label: 'Liberia' },
        { value: 'Libyan Arab Jamahiriya', label: 'Libyan Arab Jamahiriya' },
        { value: 'Liechtenstein', label: 'Liechtenstein' },
        { value: 'Lithuania', label: 'Lithuania' },
        { value: 'Luxembourg', label: 'Luxembourg' },
        { value: 'Macao', label: 'Macao' },
        { value: 'Macedonia, The Former Yugoslav Republic of', label: 'Macedonia, The Former Yugoslav Republic of' },
        { value: 'Madagascar', label: 'Madagascar' },
        { value: 'Malawi', label: 'Malawi' },
        { value: 'Malaysia', label: 'Malaysia' },
        { value: 'Maldives', label: 'Maldives' },
        { value: 'Mali', label: 'Mali' },
        { value: 'Malta', label: 'Malta' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Martinique', label: 'Martinique' },
        { value: 'Mauritania', label: 'Mauritania' },
        { value: 'Mauritius', label: 'Mauritius' },
        { value: 'Mayotte', label: 'Mayotte' },
        { value: 'Mexico', label: 'Mexico' },
        { value: 'Micronesia, Federated States of', label: 'Micronesia, Federated States of' },
        { value: 'Moldova, Republic of', label: 'Moldova, Republic of' },
        { value: 'Monaco', label: 'Monaco' },
        { value: 'Mongolia', label: 'Mongolia' },
        { value: 'Montenegro', label: 'Montenegro' },
        { value: 'Montserrat', label: 'Montserrat' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Mozambique', label: 'Mozambique' },
        { value: 'Myanmar', label: 'Myanmar' },
        { value: 'Namibia', label: 'Namibia' },
        { value: 'Nauru', label: 'Nauru' },
        { value: 'Nepal', label: 'Nepal' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'Netherlands Antilles', label: 'Netherlands Antilles' },
        { value: 'New Caledonia', label: 'New Caledonia' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Nicaragua', label: 'Nicaragua' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Nigeria', label: 'Nigeria' },
        { value: 'Niue', label: 'Niue' },
        { value: 'Norfolk Island', label: 'Norfolk Island' },
        { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Oman', label: 'Oman' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Palestinian Territory, Occupied', label: 'Palestinian Territory, Occupied' },
        { value: 'Panama', label: 'Panama' },
        { value: 'Papua New Guinea', label: 'Papua New Guinea' },
        { value: 'Paraguay', label: 'Paraguay' },
        { value: 'Peru', label: 'Peru' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Pitcairn', label: 'Pitcairn' },
        { value: 'Poland', label: 'Poland' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Puerto Rico', label: 'Puerto Rico' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Reunion', label: 'Reunion' },
        { value: 'Romania', label: 'Romania' },
        { value: 'Russian Federation', label: 'Russian Federation' },
        { value: 'Rwanda', label: 'Rwanda' },
        { value: 'Saint Helena', label: 'Saint Helena' },
        { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
        { value: 'Saint Lucia', label: 'Saint Lucia' },
        { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
        { value: 'Saint Vincent and The Grenadines', label: 'Saint Vincent and The Grenadines' },
        { value: 'Samoa', label: 'Samoa' },
        { value: 'San Marino', label: 'San Marino' },
        { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Senegal', label: 'Senegal' },
        { value: 'Serbia', label: 'Serbia' },
        { value: 'Seychelles', label: 'Seychelles' },
        { value: 'Sierra Leone', label: 'Sierra Leone' },
        { value: 'Singapore', label: 'Singapore' },
        { value: 'Slovakia', label: 'Slovakia' },
        { value: 'Slovenia', label: 'Slovenia' },
        { value: 'Solomon Islands', label: 'Solomon Islands' },
        { value: 'Somalia', label: 'Somalia' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'South Georgia and The South Sandwich Islands', label: 'South Georgia and The South Sandwich Islands' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'Sudan', label: 'Sudan' },
        { value: 'Suriname', label: 'Suriname' },
        { value: 'Svalbard and Jan Mayen', label: 'Svalbard and Jan Mayen' },
        { value: 'Swaziland', label: 'Swaziland' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Syrian Arab Republic', label: 'Syrian Arab Republic' },
        { value: 'Taiwan', label: 'Taiwan' },
        { value: 'Tajikistan', label: 'Tajikistan' },
        { value: 'Tanzania, United Republic of', label: 'Tanzania, United Republic of' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Timor-leste', label: 'Timor-leste' },
        { value: 'Togo', label: 'Togo' },
        { value: 'Tokelau', label: 'Tokelau' },
        { value: 'Tonga', label: 'Tonga' },
        { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
        { value: 'Tunisia', label: 'Tunisia' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'Turkmenistan', label: 'Turkmenistan' },
        { value: 'Turks and Caicos Islands', label: 'Turks and Caicos Islands' },
        { value: 'Tuvalu', label: 'Tuvalu' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States', label: 'United States' },
        { value: 'United States Minor Outlying Islands', label: 'United States Minor Outlying Islands' },
        { value: 'Uruguay', label: 'Uruguay' },
        { value: 'Uzbekistan', label: 'Uzbekistan' },
        { value: 'Vanuatu', label: 'Vanuatu' },
        { value: 'Venezuela', label: 'Venezuela' },
        { value: 'Viet Nam', label: 'Viet Nam' },
        { value: 'Virgin Islands, British', label: 'Virgin Islands, British' },
        { value: 'Virgin Islands, U.S.', label: 'Virgin Islands, U.S.' },
        { value: 'Wallis and Futuna', label: 'Wallis and Futuna' },
        { value: 'Western Sahara', label: 'Western Sahara' },
        { value: 'Yemen', label: 'Yemen' },
        { value: 'Zambia', label: 'Zambia' },
        { value: 'Zimbabwe', label: 'Zimbabwe' }
    ];


    return (
        <React.Fragment>
            <BreadCrumb title='Checkout' pageTitle='Ecommerce' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-12">
                    <div className="flex gap-1 px-4 py-3 mb-5 text-sm text-green-500 border border-green-200 rounded-md md:items-center bg-green-50 dark:bg-green-400/20 dark:border-green-500/50">
                        <ShoppingBag className="h-4 shrink-0" /> <p>The minimum order requirement is <b>$1,800</b>. To meet this threshold, please add additional products with a combined value of <b>$300</b>.</p>
                    </div>
                </div>
                <div className="xl:col-span-8">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="grow">
                            <Link to="#!" className="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-600"><ChevronLeft className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1 rtl:rotate-180" /> <span className="align-middle">Back to Cart</span></Link>
                        </div>
                        <div className="shrink-0">
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Place Order</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180" /></button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Shipping Information</h6>
                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
                                    <div className="xl:col-span-4">
                                        <label htmlFor="firstNameInput" className="inline-block mb-2 text-base font-medium">First Name</label>
                                        <input type="text" id="firstNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter First Name" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="middleNameInput" className="inline-block mb-2 text-base font-medium">Middle Name</label>
                                        <input type="text" id="middleNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Middle Name" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="lastNameInput" className="inline-block mb-2 text-base font-medium">Last Name</label>
                                        <input type="text" id="lastNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Last Name" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="phoneNumberInput" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                        <input type="text" id="phoneNumberInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(012) 345 678 9010" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="alternativeNumberInput" className="inline-block mb-2 text-base font-medium">Alternative Number</label>
                                        <input type="text" id="alternativeNumberInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(012) 345 678 9010" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="emailAddressInput" className="inline-block mb-2 text-base font-medium">Email Address</label>
                                        <input type="email" id="emailAddressInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter email" />
                                    </div>
                                    <div className="xl:col-span-12">
                                        <label htmlFor="streetAddressInput" className="inline-block mb-2 text-base font-medium">Street Address</label>
                                        <input type="text" id="streetAddressInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Street address" />
                                    </div>
                                    <div className="xl:col-span-12">
                                        <label htmlFor="townCityInput" className="inline-block mb-2 text-base font-medium">Town/City</label>
                                        <input type="text" id="townCityInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Town/City" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="stateInput" className="inline-block mb-2 text-base font-medium">State</label>
                                        <input type="text" id="stateInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="State" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="countryInput" className="inline-block mb-2 text-base font-medium">Country</label>
                                        <Select id="countryInput" name="countryInput"
                                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={countryOptions}
                                        />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="zipcodeInput" className="inline-block mb-2 text-base font-medium">ZipCode</label>
                                        <input type="text" id="zipcodeInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="ZipCode" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Delivery</h6>

                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <input id="deliveryOption1" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400 peer" type="radio" name="deliveryChoose" value="express-delivery" defaultChecked />
                                    <label htmlFor="deliveryOption1" className="flex flex-col gap-4 p-5 border rounded-md cursor-pointer md:flex-row border-slate-200 dark:border-zink-500 peer-checked:border-purple-500 dark:peer-checked:border-purple-700 grow">
                                        <span className="shrink-0">
                                            <img src={delivery1} alt="" className="h-12" />
                                        </span>
                                        <span className="grow">
                                            <span className="block mb-1 font-semibold text-15">Express Delivery</span>
                                            <span className="text-slate-500 dark:text-zink-200">Expected delivery: 01 Nov, Wednesday</span>
                                        </span>
                                        <span className="shrink-0">
                                            <span className="block text-lg font-semibold">$11.99</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input id="deliveryOption2" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400 peer" type="radio" name="deliveryChoose" value="express-delivery" />
                                    <label htmlFor="deliveryOption2" className="flex flex-col gap-4 p-5 border rounded-md cursor-pointer md:flex-row border-slate-200 dark:border-zink-500 peer-checked:border-purple-500 dark:peer-checked:border-purple-700 grow">
                                        <span className="shrink-0">
                                            <img src={delivery2} alt="" className="h-12" />
                                        </span>
                                        <span className="grow">
                                            <span className="block mb-1 font-semibold text-15">Air Logistic Delivery</span>
                                            <span className="text-slate-500 dark:text-zink-200">Expected delivery: 06 Nov, Monday</span>
                                        </span>
                                        <span className="shrink-0">
                                            <span className="block text-lg font-semibold">$5</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input id="deliveryOption3" className="size-4 border rounded-full appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-purple-500 checked:border-purple-500 dark:checked:bg-purple-500 dark:checked:border-purple-500 checked:disabled:bg-purple-400 checked:disabled:border-purple-400 peer" type="radio" name="deliveryChoose" value="express-delivery" />
                                    <label htmlFor="deliveryOption3" className="flex flex-col gap-4 p-5 border rounded-md cursor-pointer md:flex-row border-slate-200 dark:border-zink-500 peer-checked:border-purple-500 dark:peer-checked:border-purple-700 grow">
                                        <span className="shrink-0">
                                            <img src={delivery3} alt="" className="h-12" />
                                        </span>
                                        <span className="grow">
                                            <span className="block mb-1 font-semibold text-15">Free Delivery</span>
                                            <span className="text-slate-500 dark:text-zink-200">Expected delivery: 11 Nov, Saturday</span>
                                        </span>
                                        <span className="shrink-0">
                                            <span className="block text-lg font-semibold">$0</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Payment Information</h6>
                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                    <div className="xl:col-span-12">
                                        <label htmlFor="cardNumberInput" className="inline-block mb-2 text-base font-medium">Card Number</label>
                                        <input type="text" pattern="\d*" maxLength={16} id="cardNumberInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="XXXX XXXX XXXX XXXX" />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="expiringInput" className="inline-block mb-2 text-base font-medium">Expiring (MM/YY)</label>
                                        <input type="text" pattern="\d*" maxLength={4} id="expiringInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="MM/YY" />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="cvvInput" className="inline-block mb-2 text-base font-medium">CVV Code</label>
                                        <input type="text" pattern="\d*" maxLength={3} id="cvvInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="000" />
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3">
                                <h6 className="mb-1">We accept the following cards</h6>
                                <div className="flex items-center gap-2">
                                    <img src={paymentImg01} alt="" className="h-8" />
                                    <img src={paymentImg02} alt="" className="h-8" />
                                    <img src={paymentImg03} alt="" className="h-8" />
                                    <img src={paymentImg04} alt="" className="h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Orders Summary</h6>
                            <div className="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                                These products are limited, checkout within <span className="font-bold">03m 21s</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0">
                                                        <img src={productImg08} alt="" className="h-8" />
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 text-15"><Link to="/apps-ecommerce-product-overview" className="transition-all duration-300 ease-linear hover:text-custom-500">Roar Twill Blue Baseball Cap</Link></h6>
                                                        <p className="text-slate-500 dark:text-zink-200">$149.99 x 02</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left">$299.98</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0">
                                                        <img src={productImg04} alt="" className="h-8" />
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 text-15"><Link to="/apps-ecommerce-product-overview" className="transition-all duration-300 ease-linear hover:text-custom-500">Mesh Ergonomic Green Chair</Link></h6>
                                                        <p className="text-slate-500 dark:text-zink-200">$362.21 x 1</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left">$362.21</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center justify-center size-12 rounded-md bg-slate-100 shrink-0">
                                                        <img src={productImg01} alt="" className="h-8" />
                                                    </div>
                                                    <div className="grow">
                                                        <h6 className="mb-1 text-15"><Link to="/apps-ecommerce-product-overview" className="transition-all duration-300 ease-linear hover:text-custom-500">Smartest Printed T-shirt</Link></h6>
                                                        <p className="text-slate-500 dark:text-zink-200">$89.99 x 03</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3.5 py-4 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 dark:border-zink-500 ltr:text-right rtl:text-left">$269.97</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Sub Total
                                            </td>
                                            <td className="px-3.5 pt-4 pb-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">$932.16</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Estimated Tax (18%)
                                            </td>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">$167.79</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Item Discounts (12%)
                                            </td>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">-$111.86</td>
                                        </tr>
                                        <tr>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Shipping Charge
                                            </td>
                                            <td className="px-3.5 py-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">$0</td>
                                        </tr>
                                        <tr className="font-semibold">
                                            <td className="px-3.5 pt-3 first:pl-0 last:pr-0 text-slate-500 dark:text-zink-200">
                                                Total Amount (USD)
                                            </td>
                                            <td className="px-3.5 pt-3 first:pl-0 last:pr-0 ltr:text-right rtl:text-left">$988.09</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Place Order</span> <MoveRight className="inline-block size-4 align-middle ltr:ml-1 rtl:mr-1 rtl:rotate-180" /></button>
                            </div>
                        </div>
                    </div>
                    <h6 className="mb-4 underline text-16">Additional Service</h6>
                    <div className="card">
                        <div className="flex flex-col gap-3 md:items-center card-body md:flex-row">
                            <div className="grow">
                                <h6 className="mb-1 text-15">Care + Package</h6>
                                <p className="text-slate-500 dark:text-zink-200">2 year of additional care</p>
                            </div>
                            <div className="shrink-0">
                                <b>$24.99</b>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in">
                                    <input type="checkbox" name="carePackage" id="carePackage" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" />
                                    <label htmlFor="carePackage" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="flex flex-col gap-3 md:items-center card-body md:flex-row">
                            <div className="grow">
                                <h6 className="mb-1 text-15">Environment Friendly</h6>
                                <p className="text-slate-500 dark:text-zink-200">The primary goal of eco-warriors is creating</p>
                            </div>
                            <div className="shrink-0">
                                <b>$19.99</b>
                            </div>
                            <div className="shrink-0">
                                <div className="relative inline-block w-10 align-middle transition duration-200 ease-in">
                                    <input type="checkbox" name="friendlyCheckbox" id="friendlyCheckbox" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" />
                                    <label htmlFor="friendlyCheckbox" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Checkout;
