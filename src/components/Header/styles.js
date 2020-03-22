import styled from 'styled-components/native';
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen'

export const Container = styled.View`
  flex:1;
  flex-direction: column;
`;

export const Image = styled.Image`
    width: ${wd(48.79)};
    height: ${hg(17.18)};
    margin-top:${hg(12.27)};
`;