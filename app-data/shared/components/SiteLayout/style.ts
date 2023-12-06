import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { NavLink } from 'reactstrap';
import styled from 'styled-components';
import { colors } from '../../design';

export const Wrapper = styled.div``;

export const DesktopNav = styled.div`
  display: block;
  border-top: 6px solid ${colors.primary};
  border-bottom: 1px solid ${colors.border};
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    z-index: 999;
  }
`;

type StyledNavLinkProps = {
  marginLeft?: number;
};
export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  font-size: ${rem(17)};
  color: #b2b2b2;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s ease-out;
  padding: 0;
  &:hover {
    color: ${colors.primary};
    -webkit-text-stroke: 0.5px ${colors.primary};
  }
  @media (max-width: 1200px) {
    font-size: ${rem(14)};
  }
`;

export const StyledNavLinkWithIcon = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${rem(17)};
  color: #b2b2b2;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s ease-out;
  padding: 0;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '30px')};
  &:hover {
    color: ${colors.primary};
    -webkit-text-stroke: 0.5px ${colors.primary};
    path {
      fill: ${colors.primary};
    }
  }
  @media (max-width: 1200px) {
    font-size: ${rem(14)};
    margin-left: ${({ marginLeft }) =>
      marginLeft ? `${marginLeft}px` : '16px'};
  }
  @media (max-width: 992px) {
    font-size: ${rem(14)};
    margin-left: 0;
    color: white;
    opacity: 0.5;
  }
`;

export const StyledNavLinkWithIconEmail = styled(StyledNavLinkWithIcon)`
  &:hover {
    path {
      fill: transparent;
      stroke: ${colors.primary};
    }
    circle {
      fill: transparent;
      stroke: ${colors.primary};
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 60px;
  @media (max-width: 1200px) {
    padding: 0px 16px;
  }
`;

export const StyledNavItem = styled.div`
  z-index: 2;
  text-align: center;
  a {
    text-decoration: none !important;
  }
`;

//Mobile

export const MobileNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 30px;
  padding-right: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  background: white;
  border-top: 4px solid ${colors.primary};
`;

type MobileNavContent = {
  mobileOpen: boolean;
};

export const MobileNavContent = styled(Box)<MobileNavContent>`
  z-index: 999;
  width: 100%;
  max-width: 643px;
  height: 100%;
  position: fixed;
  overflow-y: visible;
  overflow-x: hidden;
  top: 0;
  transition: all 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  right: ${({ mobileOpen }) => (mobileOpen ? 0 : '-643px')};
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
`;

export const MobileNavContentIconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MobileNavContentItem = styled.div`
  position: relative;
  display: flex;
  padding: 10px 40px;
  color: ${colors.textInverted};
  opacity: 0.5;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease-out;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 95, 166, 0.1);
  }
`;

export const MobileNavSubContentItem = styled.div`
  position: relative;
  font-size: 18px;
  padding: 10px 48px;
  color: ${colors.primary};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: rgba(20, 104, 56, 0.1);
  }
`;

export const MobileNavLink = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.textInverted};
  font-size: 1.4rem;
  padding-right: 54px;
  text-decoration: none !important;
  &:hover {
    color: ${colors.textInverted};
  }
`;

export const MobileLogo = styled.img`
  width: 100px;
`;

type ArrowType = {
  isOpen: boolean;
};

export const ArrowHolder = styled.div<ArrowType>`
  display: flex;
  top: 6px;
  margin-left: 6px;
  position: relative;
  svg {
    transition: transform 0.3s ease-out !important;
    transform: ${({ isOpen }) => (isOpen ? 'rotateX(0)' : 'rotateX(180deg)')};
  }
`;

export const BottomContent = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const BottomLinks = styled.div`
  display: flex;
  a {
    background-color: ${colors.primary};
    width: 100%;
    text-align: center;
    color: white;
    font-size: 0.85rem;
    padding: 12px 0;
  }
`;

export const Arrow = styled.div`
  color: ${colors.primary};
  width: 30px !important;
  height: 30px !important;
`;
