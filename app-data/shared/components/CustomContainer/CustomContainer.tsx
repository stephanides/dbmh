import styled from 'styled-components';
import { Container } from 'reactstrap';
import { media } from '../../design';

export const CustomContainer = styled(Container)`
  max-width: 1430px;
  padding-left: 30px;
  padding-right: 30px;
  ${media.down.xxxl} {
    max-width: 1360px;
  }
`;
