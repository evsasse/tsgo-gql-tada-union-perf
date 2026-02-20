import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2819 } from "./fragment2819";
import type { FragmentToken2820 } from "./fragment2820";

export const FRAGMENT_2821 = gql(`
  fragment Fragment2821 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult2821 = ResultOf<typeof FRAGMENT_2821>;
type FragmentSelf2821 = NonNullable<FragmentResult2821>;

export type FragmentToken2821 =
  | FragmentSelf2821["__typename"]
  | FragmentSelf2821["typenameHint"] | FragmentToken2819 | FragmentToken2820;
