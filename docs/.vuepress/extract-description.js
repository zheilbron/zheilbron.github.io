module.exports = (options, ctx) => ({
    name: 'extract-description-plugin',
    extendPageData($page) {
        const {
            _strippedContent,
            frontmatter,
        } = $page;

        if (!($page.relativePath && $page.relativePath.startsWith('posts/'))) {
            return;
        }

        if (!frontmatter.layout) {
            frontmatter.layout = 'PostLayout';
        }
        if (_strippedContent != null) {
            frontmatter.description = _strippedContent.substring(0, 120);
        }
    }
})