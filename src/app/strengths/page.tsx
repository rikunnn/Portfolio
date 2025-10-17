import { Column, Heading, Text, Meta, Schema, Row } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content-bilingual";
import { cookies } from 'next/headers';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';

  return Meta.generate({
    title: language === 'ja' ? '強み - Riku Nakamura' : 'Strengths - Riku Nakamura',
    description: language === 'ja'
      ? 'フルスタック開発における3つの強みと仕事観'
      : 'Three core strengths and work values in full-stack development',
    baseURL: baseURL,
    path: '/strengths',
  });
}

export default async function Strengths() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';
  const { person } = getContent(language);

  return (
    <Column maxWidth="m" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={language === 'ja' ? '強み' : 'Strengths'}
        description={language === 'ja'
          ? 'フルスタック開発における3つの強みと仕事観'
          : 'Three core strengths and work values in full-stack development'}
        path="/strengths"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading variant="display-strong-xl" marginBottom="l">
        {language === 'ja' ? '強み' : 'Strengths'}
      </Heading>

      <Column fillWidth gap="xl">
        <Column fillWidth gap="m">
          <Heading variant="display-strong-s">
            {language === 'ja' ? '3つの強み' : 'Three Core Strengths'}
          </Heading>

          <Column fillWidth gap="l">
            <Column fillWidth gap="s" padding="l" background="neutral-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <CodeIcon sx={{ fontSize: 32, color: '#06b6d4' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? '① フルスタック実装力' : '① Full-Stack Implementation'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? 'Next.js + Google Sheets APIで2社のプロダクションシステムを構築。会計事務所向け生産性管理アプリと人材マッチングアプリを実装し、実業務で稼働中。'
                  : 'Built 2 production systems using Next.js + Google Sheets API for an accounting firm and HR company, both currently in active use.'}
              </Text>
            </Column>

            <Column fillWidth gap="s" padding="l" background="neutral-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <FlashOnIcon sx={{ fontSize: 32, color: '#f59e0b' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? '② 迅速な仮説検証' : '② Rapid Hypothesis Testing'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? 'ChatGPT APIを活用したAI駆動マッチングアルゴリズムを設計・統合し、人材スクリーニング時間を大幅削減。'
                  : 'Designed and integrated AI-powered matching algorithms using ChatGPT API, significantly reducing manual screening time in recruitment.'}
              </Text>
            </Column>

            <Column fillWidth gap="s" padding="l" background="neutral-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <GroupsIcon sx={{ fontSize: 32, color: '#8b5cf6' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? '③ 顧客起点の設計' : '③ Customer-Centric Design'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? 'リアルタイムデータ同期機能を実装し、チームの効率とデータアクセス性を改善。現場の課題から逆算した機能開発を重視。'
                  : 'Implemented real-time data synchronization features to improve team efficiency and data accessibility, focusing on solutions derived from real-world challenges.'}
              </Text>
            </Column>
          </Column>
        </Column>

        <Column fillWidth gap="m">
          <Heading variant="display-strong-s">
            {language === 'ja' ? '仕事観・価値観' : 'Work Values'}
          </Heading>

          <Column fillWidth gap="l">
            <Column fillWidth gap="s" padding="l" background="brand-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <SpeedIcon sx={{ fontSize: 32, color: '#ef4444' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? 'スピード重視' : 'Speed-Oriented'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? '迅速な開発・実装・改善サイクルを重視。会計事務所のプロジェクトでは、レポート作成時間を80%削減（週5時間→1時間）し、即座にビジネス成果を実現。'
                  : 'Prioritize rapid development, implementation, and improvement cycles. In the accounting firm project, achieved immediate business results by reducing reporting time by 80% (5hrs → 1hr/week).'}
              </Text>
            </Column>

            <Column fillWidth gap="s" padding="l" background="brand-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <PersonIcon sx={{ fontSize: 32, color: '#10b981' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? '顧客起点' : 'Customer-Focused'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? 'ユーザー目線での課題解決を最優先。現場の声を直接聞き、実際の業務フローに合わせた機能設計を実践。人材会社では手動処理の痛みを理解し、AI自動化で65%の効率化を達成。'
                  : 'Prioritize problem-solving from the user perspective. Listen directly to field feedback and design features aligned with actual workflows. In the HR company, understood manual process pain points and achieved 65% efficiency gain through AI automation.'}
              </Text>
            </Column>

            <Column fillWidth gap="s" padding="l" background="brand-alpha-weak" radius="l">
              <Row gap="12" vertical="center">
                <ScienceIcon sx={{ fontSize: 32, color: '#3b82f6' }} />
                <Heading variant="heading-strong-l">
                  {language === 'ja' ? '仮説検証' : 'Hypothesis-Driven'}
                </Heading>
              </Row>
              <Text variant="body-default-l" onBackground="neutral-weak" paddingLeft="44">
                {language === 'ja'
                  ? 'データドリブンな意思決定と実験的アプローチを実践。AIマッチングアルゴリズムでは、候補者プロフィールと求人要件の分析精度を28%改善し、マッチング品質を数値で証明。'
                  : 'Practice data-driven decision-making and experimental approaches. In AI matching algorithms, improved analysis accuracy of candidate profiles vs. job requirements by 28%, proving matching quality with measurable results.'}
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
