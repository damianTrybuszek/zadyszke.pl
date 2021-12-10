import './FormBackground.css'
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";
import RecommendedOffersCarousel from "../components/RecommendedOffersCarousel.js";
import lady_banner from "../graphics/tempImages/main_banner_lady_cutoff.png";
import SearchBar from "../components/SearchBar";
import JoinButton from "../components/JoinButton";
import { Typography } from "@mui/material";



export default function FormBackground(props) {
    return <div className="formBackground">
{props.children}
        </div>;
}

