import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4333 } from "./fragment4333";
import type { FragmentToken4334 } from "./fragment4334";

export const FRAGMENT_4335 = gql(`
  fragment Fragment4335 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult4335 = ResultOf<typeof FRAGMENT_4335>;
type FragmentSelf4335 = NonNullable<FragmentResult4335>;

export type FragmentToken4335 =
  | FragmentSelf4335["__typename"]
  | FragmentSelf4335["typenameHint"] | FragmentToken4333 | FragmentToken4334;
