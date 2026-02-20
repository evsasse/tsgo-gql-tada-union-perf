import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4584 } from "./fragment4584";
import type { FragmentToken4585 } from "./fragment4585";

export const FRAGMENT_4586 = gql(`
  fragment Fragment4586 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult4586 = ResultOf<typeof FRAGMENT_4586>;
type FragmentSelf4586 = NonNullable<FragmentResult4586>;

export type FragmentToken4586 =
  | FragmentSelf4586["__typename"]
  | FragmentSelf4586["typenameHint"] | FragmentToken4584 | FragmentToken4585;
