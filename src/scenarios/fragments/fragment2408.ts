import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2406 } from "./fragment2406";
import type { FragmentToken2407 } from "./fragment2407";

export const FRAGMENT_2408 = gql(`
  fragment Fragment2408 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult2408 = ResultOf<typeof FRAGMENT_2408>;
type FragmentSelf2408 = NonNullable<FragmentResult2408>;

export type FragmentToken2408 =
  | FragmentSelf2408["__typename"]
  | FragmentSelf2408["typenameHint"] | FragmentToken2406 | FragmentToken2407;
