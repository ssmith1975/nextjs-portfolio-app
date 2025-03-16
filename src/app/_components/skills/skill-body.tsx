import markdownStyles from '@/app/_components/markdown-styles.module.css';

type Props = {
  content: string;
};

export function SkillBody({ content }: Props) {
  return (
    <div className="mx-auto mb-10">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
