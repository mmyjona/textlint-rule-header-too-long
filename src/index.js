export default function(context, options = {}) {
    const {Syntax, RuleError, report, getSource} = context;
    const MAX_HEADER_LENGTH = 120;
    return {
        [Syntax.Header](node){ // "Str" node
            const text = getSource(node); // Get text
            const length = text.replace("#", "").trim().length
            if (length > MAX_HEADER_LENGTH) {
                const ruleError = new RuleError(`标题长度超过限制${MAX_HEADER_LENGTH}, 长度为${length}`, {
                    index: node.index // padding of index
                });
                report(node, ruleError);
            }
        }
    }
};
