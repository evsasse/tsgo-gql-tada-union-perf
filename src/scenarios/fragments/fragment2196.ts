import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2194 } from "./fragment2194";
import type { FragmentToken2195 } from "./fragment2195";

export const FRAGMENT_2196 = gql(`
  fragment Fragment2196 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult2196 = ResultOf<typeof FRAGMENT_2196>;
type FragmentSelf2196 = NonNullable<FragmentResult2196>;

export type FragmentToken2196 =
  | FragmentSelf2196["__typename"]
  | FragmentSelf2196["typenameHint"] | FragmentToken2194 | FragmentToken2195;
