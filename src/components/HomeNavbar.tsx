import React, { ReactComponentElement, useState } from 'react';

export function HomeNavbar(props) {

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div className="container-fluid">
                <img src="src/assets/github-logo.svg" alt="" width="30" height="24"/>
                <span className="navbar-brand mb-0 h1">Longest Common Subsequence</span>
            </div>
        </nav>
    );
}