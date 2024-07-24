import React from 'react';
import styled from 'styled-components';
import ThreeLectureCard from './ThreeLectureCard';

import rank1 from '../../../../assets/img/rank01.svg';

export default {
  title: 'atoms/강의 카드',
  component: ThreeLectureCard,
};

const lectureData = {
  id: 9,
  desktopImgUrl:
    'https://images.unsplash.com/photo-1550948537-130a1ce83314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
  tabletImgUrl: 'tablet_img_url',
  mobileImgUrl: 'mobile_img_url',
  name: '데브옵스 강의 3편',
  lectureCompany: 'fastCampus',
  lecturers: ['패캠강사2', '패캠강사2'],
  hashtags: [
    'devops',
    'aws',
    'gcp',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
    'cloud',
  ],
  originLink:
    'https://www.inflearn.com/course/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81',
  price: 73000,
  reviewCount: 0,
  rating: 0.0,
  bookMark: false,
  offline: true,
};

export const ThreeLectureCardStory = () => (
  <Container>
    <ThreeLectureCard lectureData={lectureData} rankSrc={rank1} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

ThreeLectureCardStory.storyName = '한 줄에 3개 강의 카드';
