import React, { useState } from 'react';
import logo from './logo2.png';
import banner from './banner.png';
import male from './male.png';
import female from './female.png';
import './App.css';

import { Layout, Menu, Breadcrumb, Card, Avatar, Button, Modal, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import Slider from "react-slick";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

// slick-react settings
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", background: "#0097BF", zIndex: "1", right: "-45px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", background: "#0097BF", zIndex: "1", left: "-45px"
      }}
      onClick={onClick}
    />
  );
}
const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  speed: 300,
  swipeToSlide: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  cssEase: "cubic-bezier(0,0,.18,1)",
  responsive: [
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const data = [
  {
    name: "陳阿華  63歲",
    content: "謝謝益富益力壯，讓我每天都能攝取均衡的營養，並有足夠的體力可以照顧孩子，之後我也會繼續用益富益力壯，並推薦給身邊所有辛苦照顧小孩的爸爸媽媽！",
    sex: "f"
  },
  {
    name: "李佳蓉  36歲",
    content: "我還把益富益力壯帶到公司跟同事們分享，他們試喝後也覺得不錯。而且瓶裝設計很方便攜帶，隨時隨地都能即時補充營養，真的是我們上班族的好朋友！",
    sex: "f"
  },
  {
    name: "宋曉真  36歲",
    content: "謝謝益富益力壯，讓我每天都能攝取均衡的營養，並有足夠的體力可以照顧孩子，之後我也會繼續用益富益力壯，並推薦給身邊所有辛苦照顧小孩的爸爸媽媽！",
    sex: "f"
  },
  {
    name: "劉家維  36歲",
    content: "感謝益富益力壯，給了我平日所需的營養，讓我有充足的體力在工廠拚下去，也讓我有時間和精力去陪伴我最愛的家人們！",
    sex: "m"
  },
  {
    name: "陳春美  61歲–65歲",
    content: "連續好幾天飲用益富益力壯之後，明顯感覺到體力變得比較好且有精神，走樓梯到三樓也蠻輕鬆的，去運動的時候也覺得很有活力。",
    sex: "f"
  },
  {
    name: "李仁祥  46歲–50歲",
    content: "感謝益富益力壯，給了我平日所需的營養，讓我有充足的體力在工廠拚下去，也讓我有時間和精力去陪伴我最愛的家人們！",
    sex: "m"
  },
];
function App() {
  // antd modal settings
  const [isModalOpen, setIsModalOpen] = useState("");

  const showModal = (index) => {
    setIsModalOpen(index);
  };

  const handleOk = () => {
    setIsModalOpen("");
  };

  const handleCancel = () => {
    setIsModalOpen("");
  };
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <img className="logo" src={logo} alt="" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {/* {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })} */}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '52px 0' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-content">
            <img className="banner" src={banner} alt="banner" />
            <Slider {...settings}>
              {data.map((item, index) => {
                return <Card
                  style={{ width: 300, marginLeft: '20px' }}
                  cover={
                    <img
                      alt="example"
                      src={item.sex === 'f' ? female : male}
                    />
                  }
                  actions={[
                    <Button type="primary"
                    style={{ backgroundColor:"#0081A4", borderColor: "#0081A4" }}
                      onClick={() => showModal(index)}>繼續閱讀</Button>
                  ]}
                  key={index}
                >
                  <Modal
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.name} visible={isModalOpen === index} onOk={handleOk} onCancel={handleCancel}>
                    <p>{item.content}</p>
                  </Modal>
                  <Meta
                    title={item.name}
                    description={item.content}
                  />
                </Card>;
              })}
            </Slider>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Jing Wu</Footer>
      </Layout>
    </div>
  );
}

export default App;
