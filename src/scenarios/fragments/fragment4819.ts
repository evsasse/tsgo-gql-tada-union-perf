import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4817 } from "./fragment4817";
import type { FragmentToken4818 } from "./fragment4818";

export const FRAGMENT_4819 = gql(`
  fragment Fragment4819 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult4819 = ResultOf<typeof FRAGMENT_4819>;
type FragmentSelf4819 = NonNullable<FragmentResult4819>;

export type FragmentToken4819 =
  | FragmentSelf4819["__typename"]
  | FragmentSelf4819["typenameHint"] | FragmentToken4817 | FragmentToken4818;
