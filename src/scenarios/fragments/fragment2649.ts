import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2647 } from "./fragment2647";
import type { FragmentToken2648 } from "./fragment2648";

export const FRAGMENT_2649 = gql(`
  fragment Fragment2649 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult2649 = ResultOf<typeof FRAGMENT_2649>;
type FragmentSelf2649 = NonNullable<FragmentResult2649>;

export type FragmentToken2649 =
  | FragmentSelf2649["__typename"]
  | FragmentSelf2649["typenameHint"] | FragmentToken2647 | FragmentToken2648;
