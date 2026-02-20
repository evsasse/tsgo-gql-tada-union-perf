import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2489 } from "./fragment2489";
import type { FragmentToken2490 } from "./fragment2490";

export const FRAGMENT_2491 = gql(`
  fragment Fragment2491 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult2491 = ResultOf<typeof FRAGMENT_2491>;
type FragmentSelf2491 = NonNullable<FragmentResult2491>;

export type FragmentToken2491 =
  | FragmentSelf2491["__typename"]
  | FragmentSelf2491["typenameHint"] | FragmentToken2489 | FragmentToken2490;
