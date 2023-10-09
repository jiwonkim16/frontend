import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  height: 80px;
  font-size: 12px;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.red};
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const Search = styled.span`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right center; // transform-origin 은 변화가 시작하는 위치를 의미한다.
  position: absolute;
  left: -150px;
`;
function Header() {
  const homeMatch = useMatch("/"); // useMatch() 훅은 우리에게 이 route 안에 있는지 다른 곳에 있는지를 알려준다.
  const tvMatch = useMatch("/tv");
  console.log(homeMatch, tvMatch); // 콘솔에 pathname 등이 있는 객체를 반환한다. 만약 해당 route에 위치하지 않는다면 null을 반환
  // 하기 때문에 내가 현재 어디에 있는지 알 수 있다. 만약 내가 tvMatch에 있다면을 코드로 표현하고자 하면 tvMatch가 존재한다면 으로 작성할 수 있다.

  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => {
    setSearchOpen((prev) => !prev);
  };
  return (
    <Nav>
      <Col>
        <Logo
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
            fill="#d81f26"
          />
        </Logo>
        <Items>
          <Item>
            {/* 같은 layoutId를 가짐으로써 circle 이동에 애니메이션 효과가 생김 */}
            <Link to="/">
              Home {homeMatch ? <Circle layoutId="circle" /> : null}
            </Link>
          </Item>
          <Item>
            <Link to="/tv">
              Tv Shows{tvMatch ? <Circle layoutId="circle" /> : null}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <motion.svg
            onClick={openSearch}
            animate={{ x: searchOpen ? -180 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            transition={{ type: "linear" }}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            placeholder="Search for movie or tv show..."
          />
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;
