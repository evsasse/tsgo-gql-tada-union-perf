import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2216 } from "./fragment2216";
import type { FragmentToken2217 } from "./fragment2217";

export const FRAGMENT_2218 = gql(`
  fragment Fragment2218 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult2218 = ResultOf<typeof FRAGMENT_2218>;
type FragmentSelf2218 = NonNullable<FragmentResult2218>;

export type FragmentToken2218 =
  | FragmentSelf2218["__typename"]
  | FragmentSelf2218["typenameHint"] | FragmentToken2216 | FragmentToken2217;
