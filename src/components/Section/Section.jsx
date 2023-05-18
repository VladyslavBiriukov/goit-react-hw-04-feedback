import React from "react";
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
    <section className={css.section}>
        <h1 className={css.section__title}>{title}</h1>
        <>{children}</>
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;