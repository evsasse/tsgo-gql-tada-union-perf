import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4682 } from "./fragment4682";
import type { FragmentToken4683 } from "./fragment4683";

export const FRAGMENT_4684 = gql(`
  fragment Fragment4684 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult4684 = ResultOf<typeof FRAGMENT_4684>;
type FragmentSelf4684 = NonNullable<FragmentResult4684>;

export type FragmentToken4684 =
  | FragmentSelf4684["__typename"]
  | FragmentSelf4684["typenameHint"] | FragmentToken4682 | FragmentToken4683;
