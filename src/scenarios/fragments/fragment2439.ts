import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2437 } from "./fragment2437";
import type { FragmentToken2438 } from "./fragment2438";

export const FRAGMENT_2439 = gql(`
  fragment Fragment2439 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult2439 = ResultOf<typeof FRAGMENT_2439>;
type FragmentSelf2439 = NonNullable<FragmentResult2439>;

export type FragmentToken2439 =
  | FragmentSelf2439["__typename"]
  | FragmentSelf2439["typenameHint"] | FragmentToken2437 | FragmentToken2438;
