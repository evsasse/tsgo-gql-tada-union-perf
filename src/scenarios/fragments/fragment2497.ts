import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2495 } from "./fragment2495";
import type { FragmentToken2496 } from "./fragment2496";

export const FRAGMENT_2497 = gql(`
  fragment Fragment2497 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult2497 = ResultOf<typeof FRAGMENT_2497>;
type FragmentSelf2497 = NonNullable<FragmentResult2497>;

export type FragmentToken2497 =
  | FragmentSelf2497["__typename"]
  | FragmentSelf2497["typenameHint"] | FragmentToken2495 | FragmentToken2496;
