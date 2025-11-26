import markdownStyles from '../markdown-styles.module.css';

type Props = {
  description: string;
};
export function ProjectBody({ description }: Props) {
  return (
    <div className={`mx-auto max-w-2xl px-2 ${markdownStyles['projectbody']}`}>
      <div
        className={`${markdownStyles['markdown']}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
