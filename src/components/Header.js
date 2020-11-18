import React, { useEffect } from 'react'
// import styled from 'styled-components'

function Header() {
    // const HeaderStyled = styled.div`
    //     width: 100%;
    //     height: 50px;
    //     padding: 10px 20px;
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     z-index: 99;
    //     transition: background-color 0.6s;
    //     &.darkBackground {
    //         background-color: black;
    //     }
    //     img {
    //         height: 100%;
    //     }
    // `
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         const element = document.getElementById('header');
    //         if(window.scrollY >= 250){
    //             element.classList.add('darkBackground');
    //         } else {
    //             element.classList.remove('darkBackground');
    //         }
    //         return() => {
    //             window.removeEventListener('scroll');
    //         }
    //     });

    // }, [])

    useEffect(() => {
        window.addEventListener('load', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const getPram = urlParams.get('id');
            let findID;
            if(getPram !== null) {
                findID = document.getElementById(getPram).offsetTop
            }
            if(getPram !== null && findID !== null) {
                // findID = document.getElementById(getPram).offsetTop
                window.scrollTo({ top: findID, behavior: 'smooth'});
                console.log('LETS GO!')
            }

        })
        return() => {
            window.removeEventListener('load');
        }
    }, [])

    return (
        <>
        {/* <HeaderStyled id="header">
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="NETFLIX"/>
        </HeaderStyled> */}
        </>
    )

}

export default Header
