import { Column, Heading, Text, Meta, Schema, Row, Tag } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content-bilingual";
import { cookies } from 'next/headers';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';

  return Meta.generate({
    title: language === 'ja' ? '技術スキル - Riku Nakamura' : 'Technical Skills - Riku Nakamura',
    description: language === 'ja'
      ? '実務経験の期間・頻度・用途を明記した技術スキル'
      : 'Technical skills with documented experience duration, frequency, and practical use',
    baseURL: baseURL,
    path: '/skills',
  });
}

export default async function Skills() {
  const cookieStore = await cookies();
  const language = (cookieStore.get('language')?.value as 'en' | 'ja') || 'en';
  const { about, person } = getContent(language);

  return (
    <Column maxWidth="m" paddingY="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={language === 'ja' ? '技術スキル' : 'Technical Skills'}
        description={language === 'ja'
          ? '実務経験の期間・頻度・用途を明記した技術スキル'
          : 'Technical skills with documented experience duration, frequency, and practical use'}
        path="/skills"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading variant="display-strong-xl" marginBottom="l">
        {language === 'ja' ? '技術スキル' : 'Technical Skills'}
      </Heading>

      <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="xl">
        {language === 'ja'
          ? '実務での使用期間・頻度・具体的な用途を明記しています。すべてのスキルは実際のプロジェクトで活用した経験に基づいています。'
          : 'Documented with usage duration, frequency, and specific applications in real projects. All skills are based on hands-on project experience.'}
      </Text>

      <Column fillWidth gap="xl">
        {about.technical.skills.map((skill, index) => (
          <Column
            key={index}
            fillWidth
            gap="m"
            padding="l"
            background="neutral-alpha-weak"
            radius="l"
          >
            <Heading variant="heading-strong-l">{skill.title}</Heading>

            <Text variant="body-default-l" onBackground="neutral-weak">
              {skill.description}
            </Text>

            {skill.tags && skill.tags.length > 0 && (
              <Row wrap gap="8" marginTop="s">
                {skill.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} size="l">
                    {tag.name}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        ))}
      </Column>

      <Column fillWidth gap="m" marginTop="xl" padding="l" background="brand-alpha-weak" radius="l">
        <Heading variant="heading-strong-l">
          {language === 'ja' ? '学習・成長の姿勢' : 'Learning & Growth Mindset'}
        </Heading>
        <Column fillWidth gap="s">
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 新しい技術の習得: 実務で必要となった技術は迅速にキャッチアップ'
              : '• Quick adoption: Rapidly learn new technologies as needed for projects'}
          </Text>
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 実践的なアプローチ: 学んだことは即座にプロジェクトで実装'
              : '• Practical approach: Immediately implement learned concepts in projects'}
          </Text>
          <Text variant="body-default-m">
            {language === 'ja'
              ? '• 継続的な改善: プロダクション環境でのフィードバックを基に改善'
              : '• Continuous improvement: Refine based on production environment feedback'}
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
