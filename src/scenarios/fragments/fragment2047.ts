import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2045 } from "./fragment2045";
import type { FragmentToken2046 } from "./fragment2046";

export const FRAGMENT_2047 = gql(`
  fragment Fragment2047 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult2047 = ResultOf<typeof FRAGMENT_2047>;
type FragmentSelf2047 = NonNullable<FragmentResult2047>;

export type FragmentToken2047 =
  | FragmentSelf2047["__typename"]
  | FragmentSelf2047["typenameHint"] | FragmentToken2045 | FragmentToken2046;
