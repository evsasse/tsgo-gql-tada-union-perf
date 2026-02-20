import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2372 } from "./fragment2372";
import type { FragmentToken2373 } from "./fragment2373";

export const FRAGMENT_2374 = gql(`
  fragment Fragment2374 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult2374 = ResultOf<typeof FRAGMENT_2374>;
type FragmentSelf2374 = NonNullable<FragmentResult2374>;

export type FragmentToken2374 =
  | FragmentSelf2374["__typename"]
  | FragmentSelf2374["typenameHint"] | FragmentToken2372 | FragmentToken2373;
