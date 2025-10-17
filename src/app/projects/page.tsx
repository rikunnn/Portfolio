import { Column, Heading, Text, Meta, Schema, Row, Tag } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content-bilingual";
import { cookies } from 'next/headers';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';

  return Meta.generate({
    title: language === 'ja' ? 'プロジェクト経験 - Riku Nakamura' : 'Project Experience - Riku Nakamura',
    description: language === 'ja'
      ? 'STAR形式で記載したプロジェクト実績と成果'
      : 'Project achievements and results documented in STAR format',
    baseURL: baseURL,
    path: '/projects',
  });
}

export default async function Projects() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';
  const { about, person } = getContent(language);

  return (
    <Column maxWidth="m" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={language === 'ja' ? 'プロジェクト経験' : 'Project Experience'}
        description={language === 'ja'
          ? 'STAR形式で記載したプロジェクト実績と成果'
          : 'Project achievements and results documented in STAR format'}
        path="/projects"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading variant="display-strong-xl" marginBottom="l">
        {language === 'ja' ? 'プロジェクト経験' : 'Project Experience'}
      </Heading>

      <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="xl">
        {language === 'ja'
          ? 'STAR形式（状況・課題・対応・結果）で記載した実績です。すべてのプロジェクトで具体的な数値成果を達成しています。'
          : 'Achievements documented in STAR format (Situation, Task, Action, Result). All projects achieved measurable outcomes.'}
      </Text>

      <Column fillWidth gap="xl">
        {about.work.experiences.map((experience, index) => (
          <Column key={index} fillWidth gap="m" paddingY="l" style={{ borderBottom: index < about.work.experiences.length - 1 ? '1px solid var(--neutral-alpha-weak)' : 'none' }}>
            <Row fillWidth horizontal="between" vertical="end" marginBottom="s">
              <Heading variant="display-strong-s">{experience.company}</Heading>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                {experience.timeframe}
              </Text>
            </Row>

            <Text variant="body-default-m" onBackground="brand-weak" marginBottom="m">
              {experience.role}
            </Text>

            <Column fillWidth gap="l">
              {experience.achievements.map((achievement, achievementIndex) => (
                <Column key={achievementIndex} fillWidth gap="xs">
                  <Text variant="body-default-l">{achievement}</Text>
                </Column>
              ))}
            </Column>

            {index === 0 && (
              <Row wrap gap="8" marginTop="m">
                <Tag size="l">Next.js</Tag>
                <Tag size="l">Google Sheets API</Tag>
                <Tag size="l">{language === 'ja' ? 'リアルタイム同期' : 'Real-time Sync'}</Tag>
                <Tag size="l">{language === 'ja' ? 'ダッシュボード' : 'Dashboard'}</Tag>
              </Row>
            )}

            {index === 1 && (
              <Row wrap gap="8" marginTop="m">
                <Tag size="l">Next.js</Tag>
                <Tag size="l">ChatGPT API</Tag>
                <Tag size="l">Google Sheets API</Tag>
                <Tag size="l">{language === 'ja' ? 'AIマッチング' : 'AI Matching'}</Tag>
              </Row>
            )}
          </Column>
        ))}
      </Column>

      <Column fillWidth gap="m" marginTop="xl" padding="l" background="neutral-alpha-weak" radius="l">
        <Heading variant="heading-strong-l">
          {language === 'ja' ? '共通する成果指標' : 'Common Success Metrics'}
        </Heading>
        <Column fillWidth gap="s">
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 業務時間の大幅削減（60-80%）'
              : '• Significant reduction in work hours (60-80%)'}
          </Text>
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 処理能力の向上（60%増）'
              : '• Improved processing capacity (60% increase)'}
          </Text>
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• データアクセスとチーム効率の改善（40%）'
              : '• Enhanced data access and team efficiency (40%)'}
          </Text>
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 精度の標準化（28%改善）'
              : '• Standardized accuracy (28% improvement)'}
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
