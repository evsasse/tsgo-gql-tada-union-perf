import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2048 } from "./fragment2048";
import type { FragmentToken2049 } from "./fragment2049";

export const FRAGMENT_2050 = gql(`
  fragment Fragment2050 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult2050 = ResultOf<typeof FRAGMENT_2050>;
type FragmentSelf2050 = NonNullable<FragmentResult2050>;

export type FragmentToken2050 =
  | FragmentSelf2050["__typename"]
  | FragmentSelf2050["typenameHint"] | FragmentToken2048 | FragmentToken2049;
