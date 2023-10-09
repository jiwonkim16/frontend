import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
  // useLocation을 이용하면 지금 있는 곳에 관한 정보를 받을 수 있다.
  // 다만 ?keyword=dune 이런 식으로 반환이 되서 정보를 가져오기가 번거롭다.(splitting을 해야하기 때문.)
  // 또, keyword= 같은 것이 하나만 있는 것이 아니라면 더 어렵기 때문에
  // 대신 useSearchParams 훅을 사용한다.
  // const search = new URLSearchParams("?keyword=dune&region=kr") 과 같이 사용하면
  // search.get("region") / search.get("keyword") 의 결과는 각각 'kr', 'dune' 과 같이
  // 내가 원하는 형태로 반환되는 것을 볼 수 있다.
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  // 이제 어떤 값을 검색해야 하는지 알았으니 어떤 URL에서 정보를 얻어오면 될까.
  // 지금 사용하는 영화 api의 경우 검색을 위한 api가 따로 있다.
  // url 중 query 라는 부분이 검색어를 입력하는 부분이다. 해서..api에서 fetch해오면 된다.
  //

  return <div>Search</div>;
}

export default Search;
