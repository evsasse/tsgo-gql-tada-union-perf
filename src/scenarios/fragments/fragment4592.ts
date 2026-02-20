import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4590 } from "./fragment4590";
import type { FragmentToken4591 } from "./fragment4591";

export const FRAGMENT_4592 = gql(`
  fragment Fragment4592 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult4592 = ResultOf<typeof FRAGMENT_4592>;
type FragmentSelf4592 = NonNullable<FragmentResult4592>;

export type FragmentToken4592 =
  | FragmentSelf4592["__typename"]
  | FragmentSelf4592["typenameHint"] | FragmentToken4590 | FragmentToken4591;
