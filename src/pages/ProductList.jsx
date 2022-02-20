import React from 'react'
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Products from "../components/Products"
import NewsLetter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
`
const Title = styled.h1`
margin: 20px
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px
`
const Select = styled.select`
padding: 20px;
margin-right: 20px;
`
const Option = styled.option`
`

const ProductList = () => {
  return (
    <Container>
      <Navbar />

      <Title>Screw Driver</Title>

      <FilterContainer>

        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>Type</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
          </Select>

          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price High</Option>
            <Option>Price Low</Option>
          </Select>
        </Filter>

      </FilterContainer>

      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList