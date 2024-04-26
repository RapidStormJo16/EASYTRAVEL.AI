import React from 'react'
import { NavLink} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './nav1.css';
export default function Nav1() {
  return (
    <div>
    <nav className="Items">
        <h1 className="navbar-logo">EASYTRAVEL.AI</h1>
        <ul className="menu">
              <li class="links">
                <NavLink  to="/" className="links"><i class="fa-solid fa-igloo"></i> Home</NavLink>
              </li>
              <li class="links">
              <NavLink  to="/itinerary" className="links"><i class="fa-solid fa-clipboard-list"></i> Personalized Itinerary</NavLink>
              </li>
              <li class="links">
              <NavLink  to="/expense" className="links"><i class="fa-solid fa-calculator"></i> Expense Tracker</NavLink>
              </li>
              <li class="links">
              <NavLink  to="/suggestion" className="links"><i class="fa-regular fa-paper-plane"></i> Suggestion Box</NavLink>
              </li>
              <li>
              <button class="btn btn-outline-danger me-2" type="submit" >Log Out</button>
              </li>
        </ul>
        <form class="log" role="search">
              {/* <button class="btn btn-outline-secondary" type="submit">SignUp</button> */}

            </form>

    </nav>
    </div>
  )
}
