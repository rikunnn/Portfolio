import { Column, Heading, Text, Meta, Schema, Row, Icon } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content-bilingual";
import { cookies } from 'next/headers';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';

  return Meta.generate({
    title: language === 'ja' ? '志向・働き方 - Riku Nakamura' : 'Aspirations & Work Style - Riku Nakamura',
    description: language === 'ja'
      ? '興味テーマ、貢献できる領域、希望の働き方'
      : 'Areas of interest, value proposition, and preferred work style',
    baseURL: baseURL,
    path: '/aspirations',
  });
}

export default async function Aspirations() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';
  const { about, person } = getContent(language);

  return (
    <Column maxWidth="m" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={language === 'ja' ? '志向・働き方' : 'Aspirations & Work Style'}
        description={language === 'ja'
          ? '興味テーマ、貢献できる領域、希望の働き方'
          : 'Areas of interest, value proposition, and preferred work style'}
        path="/aspirations"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading variant="display-strong-xl" marginBottom="l">
        {language === 'ja' ? '志向・働き方' : 'Aspirations & Work Style'}
      </Heading>

      <Column fillWidth gap="xl">
        <Column fillWidth gap="m" padding="l" background="neutral-alpha-weak" radius="l">
          <Row gap="12" vertical="center">
            <Icon name="lightbulb" size="l" onBackground="brand-weak" />
            <Heading variant="display-strong-s">
              {language === 'ja' ? '興味テーマ' : 'Areas of Interest'}
            </Heading>
          </Row>

          <Column fillWidth gap="m" paddingLeft="l">
            <Text variant="body-default-l">
              {language === 'ja'
                ? '• AIを活用した業務効率化・自動化ツールの開発'
                : '• AI-powered workflow automation and productivity tools'}
            </Text>
            <Text variant="body-default-l">
              {language === 'ja'
                ? '• データ駆動型の意思決定を支援するシステム設計'
                : '• Data-driven decision support system design'}
            </Text>
            <Text variant="body-default-l">
              {language === 'ja'
                ? '• ユーザー体験を重視したフルスタックアプリケーション'
                : '• User-centric full-stack application development'}
            </Text>
          </Column>

          <Text variant="body-default-m" onBackground="neutral-weak" marginTop="s">
            {language === 'ja'
              ? '実際のビジネス課題を技術で解決することに強い関心があります。特に、手作業を自動化し、データを活用して意思決定をサポートする仕組みづくりに情熱を持っています。'
              : 'Passionate about solving real business challenges with technology. Particularly interested in automating manual processes and creating systems that support data-driven decision-making.'}
          </Text>
        </Column>

        <Column fillWidth gap="m" padding="l" background="neutral-alpha-weak" radius="l">
          <Row gap="12" vertical="center">
            <Icon name="star" size="l" onBackground="brand-weak" />
            <Heading variant="display-strong-s">
              {language === 'ja' ? '貢献できる領域' : 'Value I Can Bring'}
            </Heading>
          </Row>

          <Column fillWidth gap="m" paddingLeft="l">
            <Column fillWidth gap="s">
              <Text variant="heading-strong-m">
                {language === 'ja' ? 'Next.js/Reactを用いたフロントエンド開発' : 'Frontend development with Next.js/React'}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {language === 'ja'
                  ? 'プロダクション環境で2システムを構築・運用。App Router、Server Components、API Routesの実務経験あり。'
                  : 'Built and operating 2 production systems. Hands-on experience with App Router, Server Components, and API Routes.'}
              </Text>
            </Column>

            <Column fillWidth gap="s">
              <Text variant="heading-strong-m">
                {language === 'ja' ? '外部API統合とリアルタイムデータ連携' : 'External API integration and real-time data synchronization'}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {language === 'ja'
                  ? 'Google Sheets API、ChatGPT APIの本番統合経験。双方向データ同期とAI機能の実装実績。'
                  : 'Production integration experience with Google Sheets API and ChatGPT API. Track record of bi-directional sync and AI features.'}
              </Text>
            </Column>

            <Column fillWidth gap="s">
              <Text variant="heading-strong-m">
                {language === 'ja' ? '顧客起点での仮説検証とスピード重視の実装' : 'Customer-focused hypothesis testing and rapid implementation'}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {language === 'ja'
                  ? '現場の課題を理解し、データで検証しながら迅速に実装。80%の業務時間削減など、実ビジネスで成果を出した経験。'
                  : 'Understanding field challenges, validating with data, and implementing rapidly. Delivered real business results including 80% work time reduction.'}
              </Text>
            </Column>
          </Column>
        </Column>

        <Column fillWidth gap="m" padding="l" background="brand-alpha-weak" radius="l">
          <Row gap="12" vertical="center">
            <Icon name="home" size="l" onBackground="brand-weak" />
            <Heading variant="display-strong-s">
              {language === 'ja' ? '希望の働き方' : 'Preferred Work Style'}
            </Heading>
          </Row>

          <Column fillWidth gap="m" paddingLeft="l">
            <Row gap="12" vertical="center">
              <Icon name="check" onBackground="brand-weak" />
              <Text variant="body-default-l">
                {language === 'ja'
                  ? 'リモート / ハイブリッド歓迎（柔軟な働き方を希望）'
                  : 'Remote / Hybrid welcome (flexible work arrangement preferred)'}
              </Text>
            </Row>

            <Row gap="12" vertical="center">
              <Icon name="check" onBackground="brand-weak" />
              <Text variant="body-default-l">
                {language === 'ja'
                  ? '英語・日本語でのコミュニケーション可能'
                  : 'Bilingual communication (English & Japanese)'}
              </Text>
            </Row>

            <Row gap="12" vertical="center">
              <Icon name="check" onBackground="brand-weak" />
              <Text variant="body-default-l">
                {language === 'ja'
                  ? '2025年夏以降の開始を希望'
                  : 'Available from Summer 2025'}
              </Text>
            </Row>
          </Column>

          <Text variant="body-default-m" onBackground="neutral-weak" marginTop="s">
            {language === 'ja'
              ? '場所にとらわれず、成果を重視した働き方を希望しています。チームとのコミュニケーションを大切にしながら、柔軟な環境で最大限のパフォーマンスを発揮したいと考えています。'
              : 'Seeking a results-oriented work style not bound by location. Value team communication while aiming to deliver maximum performance in a flexible environment.'}
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
