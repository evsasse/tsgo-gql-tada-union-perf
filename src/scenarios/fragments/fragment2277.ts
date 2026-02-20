import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2275 } from "./fragment2275";
import type { FragmentToken2276 } from "./fragment2276";

export const FRAGMENT_2277 = gql(`
  fragment Fragment2277 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult2277 = ResultOf<typeof FRAGMENT_2277>;
type FragmentSelf2277 = NonNullable<FragmentResult2277>;

export type FragmentToken2277 =
  | FragmentSelf2277["__typename"]
  | FragmentSelf2277["typenameHint"] | FragmentToken2275 | FragmentToken2276;
