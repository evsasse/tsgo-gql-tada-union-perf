import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken138 } from "./fragment138";
import type { FragmentToken139 } from "./fragment139";

export const FRAGMENT_140 = gql(`
  fragment Fragment140 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult140 = ResultOf<typeof FRAGMENT_140>;
type FragmentSelf140 = NonNullable<FragmentResult140>;

export type FragmentToken140 =
  | FragmentSelf140["__typename"]
  | FragmentSelf140["typenameHint"] | FragmentToken138 | FragmentToken139;
