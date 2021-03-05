import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Label = styled.span`
  color: rgb(240, 240, 240);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.8);
`;

const CustomSelect = styled.select`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25em;
  color: white;
  padding: 0.5em;
  outline: none;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.5);
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  margin: 0.5em 0;
  padding-right: 2.5em;
  width: 100%;
  background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23ffffff' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right .75rem center/8px 10px no-repeat;
  :focus {
    border: 1px solid #dc3545;
    box-shadow: inset 0 0 3px 2px #dc354533;
  }
`;

const Filters = ({ data, affiliationKey, onAffiliationChange, onMinecraftUUIDChange }) => {
  const affiliations = Object.keys(data.vtubers);
  const vtuberList = data.vtubers && data.vtubers[affiliationKey] ? data.vtubers[affiliationKey] : [];

  return (
    <>
      <Row>
        <Col md={4}>
          <Label>Affiliation</Label>
          <CustomSelect onChange={(e) => onAffiliationChange(e.target.value)}>
            {affiliations.map((e) => <option key={e} value={e}>{e}</option>)}
          </CustomSelect>
        </Col>
        <Col md={8}>
          <Label>VTuber</Label>
          <CustomSelect onChange={(e) => onMinecraftUUIDChange(e.target.value)}>
            {vtuberList.map((e) => <option key={e.minecraftUUID} value={e.minecraftUUID}>{e.name}</option>)}
          </CustomSelect>
        </Col>
      </Row>
    </>
  );
}

export default Filters;
