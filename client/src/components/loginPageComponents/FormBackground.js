import './FormBackground.css'
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../ui/Card";
import NavbarTop from "../ui/NavbarTop";
import Footer from "../ui/Footer";
import RecommendedOffersCarousel from "../mainPageComponents/RecommendedOffersCarousel.js";
import lady_banner from "../../graphics/tempImages/main_banner_lady_cutoff.png";
import SearchBar from "../mainPageComponents/SearchBar";
import JoinButton from "../ui/JoinButton";
import { Typography } from "@mui/material";



export default function FormBackground(props) {
    return <div className="formBackground">
{props.children}
        </div>;
}

