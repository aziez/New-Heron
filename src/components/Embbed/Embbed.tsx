import React from 'react';
import styled from '@emotion/styled';
import useDisableBodyScroll from "../../utils/useDisabledScrolled"; // Assuming you put the hook in a separate file


interface IFullScreenHtmlEmbedProps {
  htmlFile: string; // isi HTML file sebagai string
}

const FullScreenHtmlEmbedWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const IframeContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const FullScreenHtmlEmbed: React.FC<IFullScreenHtmlEmbedProps> = ({ htmlFile }) => {
    useDisableBodyScroll();
  return (
    <FullScreenHtmlEmbedWrapper>
      <IframeContainer
        src={htmlFile}
        title="Embedded HTML"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </FullScreenHtmlEmbedWrapper>
  );
};

export default FullScreenHtmlEmbed;
