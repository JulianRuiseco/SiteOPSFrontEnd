import { useQuery } from "@apollo/react-hooks"
import ME_QUERY from "../queries/ME_QUERY"
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Layout, Menu, Button, Space } from 'antd';

import Login from '@/components/LogIn';
import changeTheme from 'next-dynamic-antd-theme';
import { i18n, Link, withTranslation } from '../i18n';

const { SubMenu } = Menu;
const { Header, Content } = Layout;

const NewHome = (props) => {
  let { loading, error, data, refetch } = useQuery(ME_QUERY)

  if (error) console.log("error message is: ", error.message)
  if (loading) return <p>loading</p>

  const loginTriggered = () =>{
    refetch();
  }

  if (data === undefined || data.user === undefined || data.user === null) {
    return (
      <>
        <p>You are not signed in a!</p>
        <Login  loginTriggered={loginTriggered}/>

      </>
    )
  } else {
    return (
      <>
        <MainPage {...props}/>
      </>
    )
  }
}

// @ts-ignore
NewHome.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

// @ts-ignore
NewHome.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(NewHome)

interface IndexPageProps {
}

interface IndexPageState {
  theme: 'default' | 'dark';
}

class MainPage extends Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps) {
    super(props);
    this.state = {
      theme: 'default',
    };
  }

  render() {
    // @ts-ignore
    const { t } = this.props;
    return (
      <Layout style = {{ minHeight: '100vh' }} >
        <Header className = "header" >
          <Space direction = "horizontal" >
            <div className = "logo" />
            <Button
              size = "large"
              onClick = {() => {
                const theme = this.state.theme == 'default' ? 'dark' : 'default';
                this.setState({ theme }, () => {
                  changeTheme(theme);
                });
              }}
            >
              changeTheme
            </Button >
            <Button
              onClick = {() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
            >
              {t('change-locale')}
            </Button >
            <Menu
              theme = "dark"
              mode = "horizontal"
              defaultSelectedKeys = {['2']}
              style = {{ lineHeight: '64px' }}
            >
              <Menu.Item key = "1" >nav 1</Menu.Item >
            </Menu >
          </Space >
        </Header >
        <Layout >

          <Layout style = {{ padding: '0 24px 24px' }} >
            <Content
              className = "site-layout-background"
              style = {{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div >{t('h1')}</div >
            </Content >
          </Layout >
        </Layout >;
      </Layout >
    );
  }
}

