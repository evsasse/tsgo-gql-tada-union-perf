import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2105 } from "./fragment2105";
import type { FragmentToken2106 } from "./fragment2106";

export const FRAGMENT_2107 = gql(`
  fragment Fragment2107 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult2107 = ResultOf<typeof FRAGMENT_2107>;
type FragmentSelf2107 = NonNullable<FragmentResult2107>;

export type FragmentToken2107 =
  | FragmentSelf2107["__typename"]
  | FragmentSelf2107["typenameHint"] | FragmentToken2105 | FragmentToken2106;
