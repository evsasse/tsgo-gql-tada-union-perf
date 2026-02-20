import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2544 } from "./fragment2544";
import type { FragmentToken2545 } from "./fragment2545";

export const FRAGMENT_2546 = gql(`
  fragment Fragment2546 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult2546 = ResultOf<typeof FRAGMENT_2546>;
type FragmentSelf2546 = NonNullable<FragmentResult2546>;

export type FragmentToken2546 =
  | FragmentSelf2546["__typename"]
  | FragmentSelf2546["typenameHint"] | FragmentToken2544 | FragmentToken2545;
