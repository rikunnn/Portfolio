'use client';

import {
  Avatar,
  Column,
  Heading,
  Icon,
  Tag,
  Text,
  Row,
} from "@once-ui-system/core";
import MuiButton from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import GridViewIcon from '@mui/icons-material/GridView';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';
import { getContent } from "@/resources/content-bilingual";
import Link from 'next/link';

export default function About() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en');
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const match = document.cookie.match(/language=([^;]+)/);
    const lang = (match?.[1] || 'en') as 'en' | 'ja';
    setLanguage(lang);
    setContent(getContent(lang));
  }, []);

  if (!content) return null;

  const { about, person, social } = content;

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <GitHubIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'email': return <EmailIcon />;
      default: return null;
    }
  };

  return (
    <Column maxWidth="m" paddingY="l">
      <Row fillWidth gap="xl" s={{ direction: "column" }} horizontal="center" vertical="start">
        <Column gap="m" horizontal="center" align="center" flex={1}>
          <Avatar src={person.avatar} size="xl" />
          <Row gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Row>
          {person.languages && person.languages.length > 0 && (
            <Row wrap gap="8">
              {person.languages.map((lang: string, index: number) => (
                <Tag key={index} size="l">
                  {lang}
                </Tag>
              ))}
            </Row>
          )}
        </Column>

        <Column flex={2} fillWidth gap="l">
          <Column fillWidth gap="m">
            <Heading variant="display-strong-xl">{person.name}</Heading>
            <Text variant="display-default-s" onBackground="neutral-weak">
              {person.role}
            </Text>
          </Column>

          {social.length > 0 && (
            <Row gap="8" wrap>
              {social.map((item: any) =>
                item.link ? (
                  <MuiButton
                    key={item.name}
                    variant="outlined"
                    startIcon={getSocialIcon(item.icon)}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none' }}
                  >
                    {item.name}
                  </MuiButton>
                ) : null
              )}
            </Row>
          )}

          {about.intro.display && (
            <Column fillWidth gap="m" marginTop="l">
              <Text variant="body-default-l">{about.intro.description}</Text>
            </Column>
          )}

          <Column fillWidth gap="m" marginTop="l">
            <Heading variant="heading-strong-l">
              {language === 'ja' ? '詳細情報' : 'Detailed Information'}
            </Heading>
            <Column fillWidth gap="s">
              <Link href="/strengths" passHref style={{ textDecoration: 'none', width: '100%' }}>
                <MuiButton
                  variant="contained"
                  startIcon={<StarIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start', py: 1.5, textTransform: 'none' }}
                >
                  {language === 'ja' ? '強み・仕事観' : 'Strengths & Work Values'}
                </MuiButton>
              </Link>
              <Link href="/projects" passHref style={{ textDecoration: 'none', width: '100%' }}>
                <MuiButton
                  variant="contained"
                  startIcon={<GridViewIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start', py: 1.5, textTransform: 'none' }}
                >
                  {language === 'ja' ? 'プロジェクト経験' : 'Project Experience'}
                </MuiButton>
              </Link>
              <Link href="/skills" passHref style={{ textDecoration: 'none', width: '100%' }}>
                <MuiButton
                  variant="contained"
                  startIcon={<CodeIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start', py: 1.5, textTransform: 'none' }}
                >
                  {language === 'ja' ? '技術スキル' : 'Technical Skills'}
                </MuiButton>
              </Link>
              <Link href="/aspirations" passHref style={{ textDecoration: 'none', width: '100%' }}>
                <MuiButton
                  variant="contained"
                  startIcon={<LightbulbIcon />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start', py: 1.5, textTransform: 'none' }}
                >
                  {language === 'ja' ? '志向・働き方' : 'Aspirations & Work Style'}
                </MuiButton>
              </Link>
            </Column>
          </Column>

          {about.studies.display && (
            <Column fillWidth gap="m" marginTop="l">
              <Heading variant="heading-strong-l">{about.studies.title}</Heading>
              {about.studies.institutions.map((institution: any, index: number) => (
                <Column key={index} fillWidth gap="xs">
                  <Text variant="heading-default-m">{institution.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          )}
        </Column>
      </Row>
    </Column>
  );
}
