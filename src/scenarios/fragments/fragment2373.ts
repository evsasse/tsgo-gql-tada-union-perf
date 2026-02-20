import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2371 } from "./fragment2371";
import type { FragmentToken2372 } from "./fragment2372";

export const FRAGMENT_2373 = gql(`
  fragment Fragment2373 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult2373 = ResultOf<typeof FRAGMENT_2373>;
type FragmentSelf2373 = NonNullable<FragmentResult2373>;

export type FragmentToken2373 =
  | FragmentSelf2373["__typename"]
  | FragmentSelf2373["typenameHint"] | FragmentToken2371 | FragmentToken2372;
