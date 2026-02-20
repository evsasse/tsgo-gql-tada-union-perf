import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4967 } from "./fragment4967";
import type { FragmentToken4968 } from "./fragment4968";

export const FRAGMENT_4969 = gql(`
  fragment Fragment4969 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult4969 = ResultOf<typeof FRAGMENT_4969>;
type FragmentSelf4969 = NonNullable<FragmentResult4969>;

export type FragmentToken4969 =
  | FragmentSelf4969["__typename"]
  | FragmentSelf4969["typenameHint"] | FragmentToken4967 | FragmentToken4968;
