import Link from 'next/link'
import styled from 'styled-components';
import { Logo } from './logo.js';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    bottom: 50px;
`
const styles = {
    app: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        bottom: '50px',
    },
  }
const Index = () => (
    <div>
      {/* <Link href="/about">
        <a>About Page</a>
      </Link> */}
      <div style={styles.app}>
          <Logo color="pink" />
      </div>
    </div>
  )
  
  export default Index