import axios from "axios";
import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from 'react-redux'
import { ArtikelAction } from "../action";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}
class CarouselComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artikel: []
        }
    }

    // GET DATA DARI NEWS API
    getNews = () => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-03-09&sortBy=publishedAt&apiKey=f96f8f4212914eef8166aecde21f3a4c')
            .then((res) => {
                // console.log(res.data)
                // console.log(res.data.articles)
                this.setState({ artikel: res.data.articles })
                this.props.ArtikelAction(res.data.articles)
            })
            .catch((err) => console.log("err", err))
    }

    componentDidMount() {
        this.getNews()
    }

    printArtikel = () => {
        let { artikel } = this.state
        return artikel.map((item, index) => {
            return (
                <div className="d-flex align-items-center border" height="auto">
                    <div className="d-flex flex-column align-items-center p-5">
                        <h4>{item.title}</h4>
                        <h6>{item.description}</h6>
                        <a>Continue reading...</a>
                    </div>
                    <img src={item.urlToImage} width="auto" height="200vh" />
                </div>
            )
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        return (
            <div >
                <Slider {...settings} >
                    {this.printArtikel()}
                </Slider>
            </div>
        );
    }
}

export default connect(null, { ArtikelAction })(CarouselComp)