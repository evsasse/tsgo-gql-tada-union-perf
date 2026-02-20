import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2364 } from "./fragment2364";
import type { FragmentToken2365 } from "./fragment2365";

export const FRAGMENT_2366 = gql(`
  fragment Fragment2366 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult2366 = ResultOf<typeof FRAGMENT_2366>;
type FragmentSelf2366 = NonNullable<FragmentResult2366>;

export type FragmentToken2366 =
  | FragmentSelf2366["__typename"]
  | FragmentSelf2366["typenameHint"] | FragmentToken2364 | FragmentToken2365;
