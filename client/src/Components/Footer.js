import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-box'>
                <div className='footer-info'>
                    <h1>Like & Follow</h1>
                    <div className='sns'>
                    <a href='https://www.instagram.com/tiramisu_di_maria/' className='instagram'><i class="fab fa-instagram"></i></a>
                    <a href='#' className='facebook'><i class="fab fa-facebook-square"></i></a>
                    </div>
                </div>

            </div>
            <div className='footer-copy'>
                <p>2020 &copy; By Dolce di Maria </p>
            </div>
        </div>
    )
}

export default Footer
