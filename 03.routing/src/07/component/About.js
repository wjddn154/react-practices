import React from 'react';
import SiteLayout from "../layout/SiteLayout";
import styles1 from '../assets/scss/component/About.scss';
import styles2 from '../assets/scss/component/about/Navigation.scss';

export default function About() {
    return (
        <SiteLayout>
            <nav className={styles2.Navigation}>
                <a href={'/about/me'}>Me</a>
                <span/>
                <a href={'/about/location'}>Location</a>
            </nav>
            <div className={styles1.About}>
                <h2>정우입니다.</h2>
            </div>
        </SiteLayout>
    );
}