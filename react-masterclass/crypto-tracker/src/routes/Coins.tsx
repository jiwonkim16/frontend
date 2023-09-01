import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState, useEffect } from "react";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul`
  margin-top: 50px;
`;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    transition: color 0.3s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
// Link 에 css 먹일 때에도 a 태그에 css를 먹였는데 이유는 어차피 Link는 html에서 a로 읽는다.

const Loader = styled.span`
  text-align: center;
  display: block;
  margin-top: 50px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const respone = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await respone.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  // 작은 꿀팁. 콜백함수 안에 또 함수가 들어갈 때 ()() 라고 쓰고 첫번째 ()안에 함수를 넣으면
  // 바로 실행되는 함수가 됨.ㅎ
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <CoinWrapper>
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name} &rarr;
                </CoinWrapper>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
