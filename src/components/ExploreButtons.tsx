'use client';

import { Column, Heading, Row } from "@once-ui-system/core";
import MuiButton from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import GridViewIcon from '@mui/icons-material/GridView';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Link from 'next/link';

interface ExploreButtonsProps {
  language: 'en' | 'ja';
}

export function ExploreButtons({ language }: ExploreButtonsProps) {
  return (
    <Column fillWidth gap="m" padding="l" background="neutral-alpha-weak" radius="l">
      <Heading variant="heading-strong-l">
        {language === 'ja' ? '詳細を見る' : 'Explore More'}
      </Heading>
      <Row wrap gap="12">
        <Link href="/strengths" passHref style={{ textDecoration: 'none' }}>
          <MuiButton
            variant="contained"
            startIcon={<StarIcon />}
            sx={{ textTransform: 'none', px: 3, py: 1.5 }}
          >
            {language === 'ja' ? '強み・仕事観' : 'Strengths'}
          </MuiButton>
        </Link>
        <Link href="/projects" passHref style={{ textDecoration: 'none' }}>
          <MuiButton
            variant="contained"
            startIcon={<GridViewIcon />}
            sx={{ textTransform: 'none', px: 3, py: 1.5 }}
          >
            {language === 'ja' ? 'プロジェクト' : 'Projects'}
          </MuiButton>
        </Link>
        <Link href="/skills" passHref style={{ textDecoration: 'none' }}>
          <MuiButton
            variant="contained"
            startIcon={<CodeIcon />}
            sx={{ textTransform: 'none', px: 3, py: 1.5 }}
          >
            {language === 'ja' ? 'スキル' : 'Skills'}
          </MuiButton>
        </Link>
        <Link href="/aspirations" passHref style={{ textDecoration: 'none' }}>
          <MuiButton
            variant="contained"
            startIcon={<LightbulbIcon />}
            sx={{ textTransform: 'none', px: 3, py: 1.5 }}
          >
            {language === 'ja' ? '志向・働き方' : 'Aspirations'}
          </MuiButton>
        </Link>
      </Row>
    </Column>
  );
}
