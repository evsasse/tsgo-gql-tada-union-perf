import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2356 } from "./fragment2356";
import type { FragmentToken2357 } from "./fragment2357";

export const FRAGMENT_2358 = gql(`
  fragment Fragment2358 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult2358 = ResultOf<typeof FRAGMENT_2358>;
type FragmentSelf2358 = NonNullable<FragmentResult2358>;

export type FragmentToken2358 =
  | FragmentSelf2358["__typename"]
  | FragmentSelf2358["typenameHint"] | FragmentToken2356 | FragmentToken2357;
