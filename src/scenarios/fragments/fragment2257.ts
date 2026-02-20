import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2255 } from "./fragment2255";
import type { FragmentToken2256 } from "./fragment2256";

export const FRAGMENT_2257 = gql(`
  fragment Fragment2257 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult2257 = ResultOf<typeof FRAGMENT_2257>;
type FragmentSelf2257 = NonNullable<FragmentResult2257>;

export type FragmentToken2257 =
  | FragmentSelf2257["__typename"]
  | FragmentSelf2257["typenameHint"] | FragmentToken2255 | FragmentToken2256;
