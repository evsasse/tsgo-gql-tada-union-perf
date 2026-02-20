import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2520 } from "./fragment2520";
import type { FragmentToken2521 } from "./fragment2521";

export const FRAGMENT_2522 = gql(`
  fragment Fragment2522 on Member01 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_01
    memberCount_01
    memberMetric_01
  }
`);

type FragmentResult2522 = ResultOf<typeof FRAGMENT_2522>;
type FragmentSelf2522 = NonNullable<FragmentResult2522>;

export type FragmentToken2522 =
  | FragmentSelf2522["__typename"]
  | FragmentSelf2522["typenameHint"] | FragmentToken2520 | FragmentToken2521;
