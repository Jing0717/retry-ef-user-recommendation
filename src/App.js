import React, { useState } from 'react';
import logo from './logo2.png';
import './App.css';

import { Layout, Menu, Breadcrumb, Card, Avatar, Button, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import Slider from "react-slick";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

// slick-react settings
const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: false,
  speed: 300,
  swipeToSlide: false,
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
    id:1,
    name: "周肅玲  54歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
  {
    id:2,
    name: "楊玉絨  51歲–55歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
  {
    id:3,
    name: "林樹蘭  71歲–75歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
  {
    id:4,
    name: "張月玲  60歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
  {
    id:5,
    name: "周韋伶  64歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
  {
    id:6,
    name: "侯本志  48歲",
    content: "未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
  },
]
function App() {
  // antd modal settings
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          {/* <div className="logo" /> */}
          <img className="logo" src={logo} alt="" />
          {/* <img src="logo2.png" alt="" /> */}
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
            <Slider {...settings}>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="楊玉絨" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="楊玉絨  51歲–55歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="林樹蘭  71歲–75歲" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="林樹蘭  71歲–75歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="張月玲  60歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="周韋伶  64歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="侯本志  48歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="何語婷  43歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Button type="primary" onClick={showModal}>
                    繼續閱讀
                  </Button>
                ]}
              >
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="周肅玲  54歲"
                  description="未來我會繼續使用亞培安素，讓退休後生活可以更安穩，也讓家人們放心。我也會跟身邊親友分享我的經驗，建議他們一起試試亞培安素。"
                />
              </Card>
            </Slider>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Jing Wu</Footer>
      </Layout>
    </div>
  );
}

export default App;
