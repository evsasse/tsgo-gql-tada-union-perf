import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4634 } from "./fragment4634";
import type { FragmentToken4635 } from "./fragment4635";

export const FRAGMENT_4636 = gql(`
  fragment Fragment4636 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult4636 = ResultOf<typeof FRAGMENT_4636>;
type FragmentSelf4636 = NonNullable<FragmentResult4636>;

export type FragmentToken4636 =
  | FragmentSelf4636["__typename"]
  | FragmentSelf4636["typenameHint"] | FragmentToken4634 | FragmentToken4635;
