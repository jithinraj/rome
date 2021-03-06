/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {
  TaggedTemplateExpression,
  taggedTemplateExpression,
  AnyNode,
} from '@romejs/js-ast';

export default function TaggedTemplateExpression(
  generator: Generator,
  node: AnyNode,
) {
  node = taggedTemplateExpression.assert(node);

  generator.print(node.tag, node);
  generator.print(node.quasi, node);
}
