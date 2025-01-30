import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">SMS PORTAL</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">    
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/add-library">Add Library</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/add-group">Add Group</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/add-contact">Add Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/add-message">Add Message</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}
