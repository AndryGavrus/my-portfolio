import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
    const { t } = useTranslation();

    const art = encodeURIComponent(
        //     `
        //   <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="320">
        //     <defs>
        //       <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        //         <stop offset="0%" stop-color="#60a5fa"/>
        //         <stop offset="100%" stop-color="#a78bfa"/>
        //       </linearGradient>
        //     </defs>
        //     <rect width="100%" height="100%" fill="#0b1020"/>
        //     <g fill="url(#g)" font-family="Inter,Arial" font-size="140" font-weight="700">
        //       <text x="50%" y="55%" text-anchor="middle">404</text>
        //     </g>
        //   </svg>
        // `
        `    <svg fill="none" height="264" width="480" xmlns="http://www.w3.org/2000/svg"><path d="M310.1 52v16.2H207.4V38.1h-73.5v173.4h73.5l181.5 1.1V52h-78.8Z" fill="url(#a)"></path><path d="M370.3 62.9h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM370.3 72.5h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM370.3 82.1h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM370.3 91.7h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM370.3 101.3h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2ZM370.3 111h-48.6c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h48.6c.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2ZM148.6 47.2h-6.3v6.3h6.3v-6.3ZM161.3 47.2H155v6.3h6.3v-6.3ZM174.1 47.2h-6.3v6.3h6.3v-6.3ZM186.8 47.2h-6.3v6.3h6.3v-6.3ZM148.6 62.9h-6.3v6.3h6.3v-6.3ZM161.3 62.9H155v6.3h6.3v-6.3ZM174.1 62.9h-6.3v6.3h6.3v-6.3ZM186.8 62.9h-6.3v6.3h6.3v-6.3ZM148.6 78.6h-6.3v6.3h6.3v-6.3ZM161.3 78.6H155v6.3h6.3v-6.3ZM174.1 78.6h-6.3v6.3h6.3v-6.3ZM186.8 78.6h-6.3v6.3h6.3v-6.3Z" fill="#fff"></path><path d="M269 175.7c-5.2 11.2-12.3 11.2-14.6 11.2-5.6 0-10.3-3.5-13.8-10.5-4.3-8.4-6.5-21-6.5-36.5v-.6h-29.7v.4c.2 21.9 4.7 40.2 13.1 52.8a41.7 41.7 0 0 0 35.9 20c16.3 0 29.6-7.1 38.5-20.4 8.3-12.6 12.6-30.4 12.8-52.8H275a92.7 92.7 0 0 1-6 36.4Z" fill="#5571E9"></path><path d="M305.9 86.2A42.2 42.2 0 0 0 269 66.1a44.3 44.3 0 0 0-37.5 20c-9 12.8-13.7 31.2-13.8 53.2h29.7a85 85 0 0 1 6.8-37c3.6-7 8.3-10.6 13.7-10.6 7.6 0 20.4 6.1 20.4 47v.6H318v-1.4c.1-21.8-4-39.3-12.1-51.7ZM419.1 146.9h-12.2V66.1h-28.1l-1.8 2.6-58 83.1-1.1 1.6v19.5h60.4v35.4h28.6v-35.4h18.2v-26h-6Zm-65.9 0 25.1-34.9v34.9h-25.1Z" fill="#5571E9"></path><path d="M86.4 208.5a2 2 0 0 1-1.9-1.7L65.7 39.7c-.1-1 .6-2 1.7-2.1 1-.1 2 .6 2.1 1.7l18.8 167.1c.1 1-.6 2-1.7 2.1h-.2ZM137.4 208.5a2 2 0 0 1-1.9-1.7L116.7 39.7c-.1-1 .6-2 1.7-2.1 1-.1 2 .6 2.1 1.7l18.8 167.1c.1 1-.6 2-1.7 2.1h-.2Z" fill="#8C9EA5"></path><path d="M120.5 58.8h-51a1.9 1.9 0 1 1 0-3.8h51c1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9ZM121.6 75.4H71.7a1.9 1.9 0 1 1 0-3.8h49.9a1.9 1.9 0 1 1 0 3.8ZM122.7 92H73.8a1.9 1.9 0 1 1 0-3.8h48.9c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM126.1 108.6H76a1.9 1.9 0 1 1 0-3.8h50.1a1.9 1.9 0 1 1 0 3.8ZM128 125.2H77.6a1.9 1.9 0 1 1 0-3.8H128c1 0 1.9.8 1.9 1.9a2 2 0 0 1-1.9 1.9ZM129.9 141.7H79.4a1.9 1.9 0 1 1 0-3.8h50.5a1.9 1.9 0 1 1 0 3.8Z" fill="#8C9EA5"></path><path d="M118.9 43H64.1a3.5 3.5 0 0 1-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5h54.8c1.9 0 3.5 1.6 3.5 3.5s-1.5 3.5-3.5 3.5Z" fill="#B0BEC5"></path><path d="M97.4 208.5h-.2a2 2 0 0 1-1.7-2.1l18.8-167.1a2 2 0 0 1 2.1-1.7 2 2 0 0 1 1.7 2.1L99.3 206.8c-.1 1-.9 1.7-1.9 1.7ZM46.4 208.5h-.2a2 2 0 0 1-1.7-2.1L63.3 39.3a2 2 0 0 1 2.1-1.7 2 2 0 0 1 1.7 2.1L48.3 206.8c-.1 1-.9 1.7-1.9 1.7Z" fill="#B0BEC5"></path><path d="M114.3 58.8h-51a1.9 1.9 0 1 1 0-3.8h51c1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9ZM112.2 75.4H62.3a1.9 1.9 0 1 1 0-3.8h49.9a1.9 1.9 0 1 1 0 3.8ZM110.1 92H61.2a1.9 1.9 0 1 1 0-3.8h48.9c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM107.9 108.6H57.8a1.9 1.9 0 1 1 0-3.8h50.1c1 0 1.9.8 1.9 1.9-.1 1-.9 1.9-1.9 1.9ZM106.3 125.2H55.9a1.9 1.9 0 1 1 0-3.8h50.4c1 0 1.9.8 1.9 1.9a2 2 0 0 1-1.9 1.9ZM104.5 141.7H54a1.9 1.9 0 1 1 0-3.8h50.5c1 0 1.9.8 1.9 1.9-.1 1.1-.9 1.9-1.9 1.9Z" fill="#B0BEC5"></path><path d="m151.7 160.7 62.4-41.2 5-3.3-3.3-5-10.5-15.9-1.7-2.6-3.1-.1-101.3-2.7-1.9-.1-1.6 1-9.7 6.4-5 3.3 3.3 5 30 45.4-24.5 16.2-5 3.3 3.3 5 9.2 13.9 3.3 5 5-3.3 24.5-16.2 6.7 10.2 3.3 5 5-3.3 11.5-7.6 5-3.3-3.3-5-6.6-10.1Zm-29.6-44.9 42.9 1.7-29.1 19.2-13.8-20.9Z" fill="#5571E9"></path><path d="M63.8 186.7a15.6 15.6 0 0 0 0 31.2h131.8v-31.2H63.8Z" fill="#B0BEC5"></path><path d="M63.8 186.7a15.6 15.6 0 0 0 0 31.2h131.8v-31.2H63.8Z" fill="url(#b)"></path><path d="M201.5 216.7a15.6 15.6 0 1 0-11.8-28.8 15.6 15.6 0 0 0 11.8 28.8Z" fill="#CFD8DC"></path><path d="M195.6 213.5a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="#B0BEC5"></path><path d="M195.6 213.5a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="url(#c)"></path><path d="M47 159a15.6 15.6 0 0 0 0 31.2h131.8V159H47Z" fill="#B0BEC5"></path><path d="M47 159a15.6 15.6 0 0 0 0 31.2h131.8V159H47Z" fill="url(#d)"></path><path d="M189.9 185.6a15.6 15.6 0 1 0-22.1-22 15.6 15.6 0 0 0 22 22Z" fill="#CFD8DC"></path><path d="M178.8 185.8a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="#B0BEC5"></path><path d="M178.8 185.8a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="url(#e)"></path><path d="M29.6 186.7a15.6 15.6 0 0 0 0 31.2h131.8v-31.2H29.6Z" fill="#B0BEC5"></path><path d="M167.5 216.7a15.6 15.6 0 1 0-12.2-28.7 15.6 15.6 0 0 0 12.2 28.7Z" fill="#CFD8DC"></path><path d="M161.4 213.5a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="#B0BEC5"></path><path d="M161.4 213.5a11.2 11.2 0 1 0 0-22.4 11.2 11.2 0 0 0 0 22.4Z" fill="url(#f)"></path><path d="M273.6 212.4c-6 0-8.9-7.5-4.3-11.4a13.3 13.3 0 0 1 13-2c2.2.8 4.7.3 6.5-1.2 2.6-2.3 6.2-3.6 9.8-3.7 3.4-.1 6.7.7 10 1.7 2.6.9 5.6-.1 7.2-2.3 7-9.6 18.4-15.7 30.2-17.8a39.8 39.8 0 0 1 21.4 1.3c5.1 2 9.6 5.6 12.4 10.2a6.5 6.5 0 0 0 6.8 3c5.1-1 10.9.9 14.5 4.7a6.6 6.6 0 0 0 7.9 1.4c2.3-1.3 4.8-2.2 7.5-2.3a11 11 0 0 1 8.2 3.4c1.6 1.8 4 2.5 6.4 2.1a8.1 8.1 0 0 1 5.4 1c5.7 3.3 3.2 12-3.4 12l-159.5-.1Z" fill="#CFD8DC"></path><path d="M273.6 212.4c-6 0-8.9-7.5-4.3-11.4a13.3 13.3 0 0 1 13-2c2.2.8 4.7.3 6.5-1.2 2.6-2.3 6.2-3.6 9.8-3.7 3.4-.1 6.7.7 10 1.7 2.6.9 5.6-.1 7.2-2.3 7-9.6 18.4-15.7 30.2-17.8a39.8 39.8 0 0 1 21.4 1.3c5.1 2 9.6 5.6 12.4 10.2a6.5 6.5 0 0 0 6.8 3c5.1-1 10.9.9 14.5 4.7a6.6 6.6 0 0 0 7.9 1.4c2.3-1.3 4.8-2.2 7.5-2.3a11 11 0 0 1 8.2 3.4c1.6 1.8 4 2.5 6.4 2.1a8.1 8.1 0 0 1 5.4 1c5.7 3.3 3.2 12-3.4 12l-159.5-.1Z" fill="url(#g)"></path><path d="M443 205.6H263.5a2.7 2.7 0 0 0-2.7 2.7v7c0 1.5 1.2 2.7 2.7 2.7H443c1.5 0 2.7-1.2 2.7-2.7v-7c0-1.5-1.2-2.7-2.7-2.7Z" fill="#455A64"></path><path d="M42.1 149.2h-7.5l.2 78.8h7.5l-.2-78.8Z" fill="#37474F"></path><path d="M29.3 224.7v.9c0 1.3 1.1 2.4 2.4 2.4h13.8c1.3 0 2.4-1.1 2.4-2.4v-.9H29.3Z" fill="#37474F"></path><path d="M42.4 221.1h-7.6l-5.5 3.6H48l-5.6-3.6Z" fill="#455A64"></path><path d="m42.4 221.1-.2-71.9h-2.8l.2 71.9 2.7 3.6v.9c0 1.3-1.1 2.4-2.4 2.4h5.7c1.3 0 2.4-1.1 2.4-2.4v-.9l-5.6-3.6Z" fill="url(#h)"></path><path d="M47.5 140.1c0-5-4.1-9.1-9.1-9.1s-9.1 4.1-9.1 9.1 4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1Z" fill="#E53935"></path><path d="M38.4 149.2c5 0 9.1-4.1 9.1-9.1 0-1.6-.4-3.1-1.2-4.4L34 148c1.3.7 2.8 1.2 4.4 1.2Z" fill="url(#i)"></path><path d="M458.2 151.6H451l.2 75.7h7.3l-.2-75.7Z" fill="#37474F"></path><path d="M445.6 224v.8c0 1.3 1.1 2.4 2.4 2.4h13.4c1.3 0 2.4-1.1 2.4-2.4v-.8h-18.2Z" fill="#37474F"></path><path d="M458.4 220.5H451l-5.4 3.5h18.2l-5.4-3.5Z" fill="#455A64"></path><path d="m458.4 220.5-.2-68.9h-2.7l.2 68.9 2.6 3.5v.8c0 1.3-1.1 2.4-2.4 2.4h5.5c1.3 0 2.4-1.1 2.4-2.4v-.8l-5.4-3.5Z" fill="url(#j)"></path><path d="M463.3 142.8a8.8 8.8 0 1 0-17.6 0 8.8 8.8 0 0 0 17.6 0Z" fill="#E53935"></path><path d="M454.5 151.6a8.8 8.8 0 0 0 7.7-13.1l-12 12c1.3.7 2.7 1.1 4.3 1.1Z" fill="url(#k)"></path><path d="M453.3 138.5c0 .9-.7 1.7-1.7 1.7s-1.7-.7-1.7-1.7c0-.9.7-1.7 1.7-1.7.9 0 1.7.7 1.7 1.7Z" fill="#fff" opacity="0.5"></path><path d="m464.9 151.6-436.8.8V169l436.8-.8v-16.5Z" fill="#F5D100"></path><path d="m46.9 152.4-16.5 16.5h-2.3v-9.4l7.2-7.1h11.6ZM68.8 152.3l-16.5 16.6H40.7l16.4-16.6h11.7ZM90.7 152.3l-16.5 16.5H62.5L79 152.3h11.7ZM112.6 152.2l-16.5 16.6H84.4l16.5-16.5 11.7-.1ZM134.5 152.2 118 168.7l-11.7.1 16.5-16.6h11.7ZM156.3 152.2l-16.4 16.5h-11.7l16.5-16.5h11.6ZM178.2 152.1l-16.4 16.6h-11.7l16.5-16.6h11.6ZM200.1 152.1l-16.5 16.5H172l16.4-16.5h11.7ZM222 152l-16.5 16.6h-11.7l16.5-16.6H222ZM243.9 152l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM265.8 151.9l-16.5 16.6h-11.7l16.5-16.5 11.7-.1ZM287.7 151.9l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM309.5 151.9l-16.4 16.5h-11.7l16.5-16.5h11.6ZM331.4 151.8l-16.5 16.6h-11.6l16.5-16.6h11.6ZM353.3 151.8l-16.5 16.5h-11.6l16.4-16.5h11.7ZM375.2 151.7l-16.5 16.6H347l16.5-16.5 11.7-.1ZM397.1 151.7l-16.5 16.5-11.7.1 16.5-16.6h11.7ZM419 151.7l-16.5 16.5h-11.7l16.5-16.5H419ZM440.9 151.6l-16.5 16.6h-11.7l16.5-16.6h11.7ZM462.7 151.6l-16.4 16.5h-11.7l16.5-16.5h11.6ZM464.9 159.6l.1 8.5h-8.5l8.4-8.5Z" fill="#263238"></path><path d="m28.1 168.9 436.9-.8-.1-8.4-436.8.8v8.4Z" fill="url(#l)"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="a" x1="261.4" x2="261.4" y1="211.2" y2="-38.3"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#D6D7F4"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="b" x1="121.9" x2="121.9" y1="176.7" y2="209.5"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="c" x1="223.6" x2="183.2" y1="202.3" y2="202.3"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="d" x1="105.1" x2="105.1" y1="157.1" y2="196.4"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="e" x1="206.9" x2="166.4" y1="174.6" y2="174.6"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="f" x1="189.5" x2="149" y1="202.3" y2="202.3"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="g" x1="370.6" x2="325" y1="185.5" y2="239.1"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#B0BEC5"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="h" x1="18.7" x2="80.6" y1="179.1" y2="205.3"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="i" x1="40.7" x2="40.7" y1="132.2" y2="150.7"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="j" x1="435.7" x2="495.2" y1="180.3" y2="205.5"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="k" x1="456.7" x2="456.8" y1="135.1" y2="153.1"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="l" x1="158.5" x2="293.1" y1="40.9" y2="229.6"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop><stop offset="1"></stop></linearGradient></defs></svg>
`
    );

    return (
        <section className="section">
            <div
                className="card"
                style={{
                    padding: 20,
                    display: 'grid',
                    gap: 16,
                    justifyItems: 'center',
                }}
            >
                <img
                    src={`data:image/svg+xml;charset=utf-8,${art}`}
                    alt="404"
                    style={{ width: '100%', maxWidth: 520 }}
                />
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, textAlign: 'center' }}
                >
                    {t('notfound.title')}
                </motion.h2>
                <p
                    style={{
                        color: 'var(--text-muted)',
                        textAlign: 'center',
                        marginTop: 0,
                    }}
                >
                    {t('notfound.desc')}
                </p>
                <Link to="/" className="btn">
                    {t('notfound.backHome')}
                </Link>
            </div>
        </section>
    );
};
