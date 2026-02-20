import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2411 } from "./fragment2411";
import type { FragmentToken2412 } from "./fragment2412";

export const FRAGMENT_2413 = gql(`
  fragment Fragment2413 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult2413 = ResultOf<typeof FRAGMENT_2413>;
type FragmentSelf2413 = NonNullable<FragmentResult2413>;

export type FragmentToken2413 =
  | FragmentSelf2413["__typename"]
  | FragmentSelf2413["typenameHint"] | FragmentToken2411 | FragmentToken2412;
