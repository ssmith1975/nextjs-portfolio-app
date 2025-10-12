import markdownStyles from '../markdown-styles.module.css';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = {
  description: string;
};
export async function ProjectBody({ description }: Props) {
  description = description.replaceAll('<br />', '\n');
  const content = await markdownToHtml(description || '');

  return (
    <div className={`mx-auto max-w-2xl px-2 ${markdownStyles['projectbody']}`}>
      <div
        className={`${markdownStyles['markdown']}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
