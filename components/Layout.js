import styles from '../styles/Layout.module.css';
import Header from './Header.js';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
