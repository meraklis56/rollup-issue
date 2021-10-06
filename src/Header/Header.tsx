import React, { FC, FunctionComponent, ReactElement, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { HeaderTypes } from './Header.types';
import { NextPage } from 'next';

type Props = {
    options?: any
}
const Header = ({options}: Props) => {
    const [openMenu, setMenuState] = useState(false);

    const toggleHamburger = () => {
        setMenuState(!openMenu);
        console.log(openMenu);
    //
    //     document.getElementsByClassName(styles. hamburger)[0].classList.toggle(styles.open);
    //     document.getElementsByClassName(styles.logoHolder)[0].classList.toggle(styles.open);
    //     document.getElementsByClassName(styles.contentHolder)[0].classList.toggle(styles.open);
    //     document.getElementsByClassName(styles.header)[0].classList.toggle(styles.open);
    //     document.getElementsByClassName(styles.liHolder)[1].classList.toggle(styles.open);
    }

    return (
        <nav className={ styles.header }>
            <div className={ styles.contentHolder + ' container' }>
                <div className={ styles.logoHolder } onClick={toggleHamburger}>
                    <svg width="83.1" height="76" viewBox="0 0 113 103">
                        <path d="M56.5 102.8c-29 0-48.9-7-50.5-7.5-2.1-.7-5.6-2.5-5.6-6.8V14.9c0-2.2 1-5.2 5.6-6.8C7.7 7.4 27 .3 56.5.3s48.8 7.1 50.6 7.8c4.6 1.6 5.6 4.5 5.6 6.8v73.6c0 3.2-1.9 5.5-5.5 6.8-1.7.6-20 7.5-50.7 7.5z" fill="#fff"/>
                        <path fill="#ffc20e" d="M109.5 89.3c0 1.5-1.1 2.2-2.8 2.8 0 0-18.4 7.5-50.2 7.5-29.9 0-50.2-7.5-50.2-7.5-1.6-.5-2.8-1.3-2.8-2.8V14.1c0-1.5 1.2-2.3 2.8-2.8 0 0 19.7-7.7 50.2-7.7 30.5 0 50.2 7.7 50.2 7.7 1.6.5 2.8 1.3 2.8 2.8v75.2z"/>
                        <path d="M17.5 71.2h9v2.6h-5.4v2.7h5.3v2.6h-5.3V84h-3.5V71.2zM30.2 71.2h3.5v12.9h-3.5V71.2zM37.9 71.2h4.4l3.2 6.3 1.1 2.8h.2l-.2-2.7v-6.3h3.3v12.9h-4.5l-3.3-6.6c-.5-1-.9-2-.9-2.5h-.1l.1 2v7.1h-3.3v-13zM66.5 84.1h-3.7l-.8-2.7h-4.8l-.9 2.6h-3.5l4.7-12.9H62l4.5 13zm-5.3-5.2l-1-3-.5-2h-.1c-.1.7-.4 1.5-.6 2l-1 3h3.2zM69.5 71.2h4.4l3.2 6.3 1.1 2.8h.2l-.2-2.7v-6.3h3.3v12.9H77l-3.3-6.6c-.5-1-.9-2-.9-2.5h-.1l.1 2v7.1h-3.3v-13zM88.1 79.9a2 2 0 002.1 1.8c1 0 1.8-.4 1.8-1.2 0-.7-.4-1-1.7-1.4l-2.1-.7c-1.6-.6-3-1.7-3-3.5 0-2.7 2.4-4 5.4-4 3.7 0 4.3 2.2 4.6 2.9l-3.1 1c-.1-.4-.5-1.4-1.7-1.4s-1.7.5-1.7 1.1c0 .7.4.9 1.7 1.4l2.4.9c1.7.6 2.7 1.6 2.7 3.3 0 1.9-1.3 4.2-5.5 4.2-3.9 0-4.7-2.4-5-3.2l3.1-1.2z" fill="#fff"/>
                        <path d="M16.7 34.7c1.6-4.8 5.3-9 12.4-9 9.3 0 11.6 6.4 11.6 12.5v15.7l.2 8.9h-3.6l-.2-5.8c-2.9 3.2-6.3 6.6-11.9 6.6-6.4 0-10.2-4.4-10.2-10.2C15 42.3 25.2 41 34.6 41h2.5c-.2-6.5-.4-12-8.4-12-5.6 0-7.4 4-8.7 6.9l-3.3-1.2zm20.4 9.2h-2.4c-9.1 0-15.8 1.2-15.8 9 0 5.4 3.7 7.1 6.9 7.1 4.5 0 6.9-2.5 11.3-6.7v-9.4zM43.4 26.4h4.4l9 14.5 9.7-14.5h4.1L59.2 43.5l12.3 19.3H67L56.8 46.4 46.2 62.8h-4.4l12.6-19.1-11-17.3z" fill="#111"/>
                        <path d="M83.8 25.7c12.1 0 14.7 11.7 14.7 19.1 0 9.2-4.2 18.8-14.7 18.8S69.1 54 69.1 44.8c0-7.4 2.6-19.1 14.7-19.1zm0 34.6c6.7 0 10.9-5.5 10.9-16.3 0-7.4-3-15-10.9-15s-10.9 7.6-10.9 15c0 10.8 4.2 16.3 10.9 16.3z" fill="#111"/>
                        <path d="M96.3 28c0-1.5 1.2-2.3 2.4-2.3s2.4.8 2.4 2.3c0 1.5-1.2 2.3-2.4 2.3-1.3 0-2.4-.9-2.4-2.3zm4 0c0-1-.7-1.7-1.6-1.7-.9 0-1.7.7-1.7 1.7s.7 1.7 1.6 1.7c.9 0 1.7-.7 1.7-1.7zm-2 1.2h-.6v-2.5h.9c.7 0 1.1.2 1.1.8 0 .5-.3.6-.7.7l.6 1.1H99l-.6-1h-.2v.9zm.5-1.5c.2 0 .3-.1.3-.3 0-.2-.3-.3-.5-.3h-.3v.6h.5z" fill="#111"/>
                    </svg>
                </div>
                <Link href="/">
                    <a>Home</a>
                </Link>

                <div className={ styles.linksHolder }>
                    <ul className={ styles.liHolder + ' ' + styles.desktop }>
                        {/*{ options.map((header) => {*/}
                        {/*            return (<li key={ header.url }>*/}
                        {/*                        <a>{ header.url }</a>*/}
                        {/*                    </li>)})}*/}
                    </ul>

                    {/*<ul className={ styles.liHolder + ' ' + styles.mobile}>*/}
                    {/*    { options.map((header) => {*/}
                    {/*        return (*/}
                    {/*            <li key={ header.url }>*/}
                    {/*                <Link as={`/${ header.slug }`} href="`/${header.slug}`">*/}
                    {/*                    <a>{ header.url }</a>*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*    <li className={ styles.closeButton }><a onClick={() => toggleHamburger()}>close</a></li>*/}
                    {/*</ul>*/}
                </div>
            </div>

            <div className={ styles.hamburgerHolder }>
                <div className={ styles.hamburger }>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default Header;
