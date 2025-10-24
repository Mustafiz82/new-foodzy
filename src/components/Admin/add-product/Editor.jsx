// import "@mdxeditor/editor/style.css";
// import {
//   BlockTypeSelect,
//   BoldItalicUnderlineToggles,
//   ListsToggle,
//   MDXEditor,
//   headingsPlugin,
//   listsPlugin,
//   quotePlugin,
//   thematicBreakPlugin,
//   toolbarPlugin,
//   UndoRedo,
// } from "@mdxeditor/editor";

// function EditorComponent() {
//   return (
//     <MDXEditor
//       markdown="Hello world"
//       plugins={[
//         headingsPlugin(),       // ✅ Required for BlockTypeSelect
//         listsPlugin(),
//         quotePlugin(),
//         thematicBreakPlugin(),
//         toolbarPlugin({
//           toolbarClassName: "my-classname",
//           toolbarContents: () => (
//             <>
//               <UndoRedo />
//               <BoldItalicUnderlineToggles />
//               <BlockTypeSelect />  {/* ✅ Will now work */}
//               <ListsToggle />
//             </>
//           ),
//         }),
//       ]}
//     />
//   );
// }

// export default EditorComponent;






import React from 'react'
import {
  AdmonitionDirectiveDescriptor,
  MDXEditor,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  Separator,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertImage,
  ListsToggle,
  KitchenSinkToolbar
} from '@mdxeditor/editor'
import { ALL_PLUGINS, YoutubeDirectiveDescriptor, virtuosoSampleSandpackConfig } from './_boilerplate'
import kitchenSinkMarkdown from './assets/kitchen-sink.md?raw'
import './dark-editor.css'
import { basicDark } from 'cm6-theme-basic-dark'
// import type { Story } from '@ladle/react'

export const Basics = () => {
  return <MDXEditor markdown={kitchenSinkMarkdown} plugins={ALL_PLUGINS} />
}

// export const  Story = ({ readOnly }) => {
//   return <MDXEditor markdown={kitchenSinkMarkdown} readOnly={readOnly} plugins={ALL_PLUGINS} />
// }



export const CustomTheming = () => {
  return (
    <MDXEditor
      className="dark-theme dark-editor"
      markdown={kitchenSinkMarkdown}
      plugins={[
        toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({ imageAutocompleteSuggestions: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'] }),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' },
          codeMirrorExtensions: [basicDark]
        }),
        directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo', codeMirrorExtensions: [basicDark] }),
        markdownShortcutPlugin()
      ]}
    />
  )
}

export const ConditionalToolbar = () => {
  const [outsideState, setOutsideState] = React.useState('foo')
  return (
    <>
      <button
        onClick={() => {
          setOutsideState('bar')
        }}
      >
        Toggle outside state
      </button>
      {outsideState}
      <MDXEditor
        markdown={'hello world'}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <DiffSourceToggleWrapper>
                  {outsideState}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <ListsToggle />
                  <Separator />
                  <BlockTypeSelect />
                  <CreateLink />
                  <InsertImage />
                  <Separator />
                </DiffSourceToggleWrapper>
              </>
            )
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          // codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
          // sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
          // codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text' } }),
          directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
          markdownShortcutPlugin()
        ]}
      />
    </>
  )
}

export const SimpleToolbar = () => {
  return (
    <MDXEditor
      markdown={'hello world'}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
            </>
          )
        }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        sandpackPlugin({ sandpackConfig: virtuosoSampleSandpackConfig }),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text' } }),
        directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
        markdownShortcutPlugin()
      ]}
    />
  )
}