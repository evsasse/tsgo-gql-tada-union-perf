import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2543 } from "./fragment2543";
import type { FragmentToken2544 } from "./fragment2544";

export const FRAGMENT_2545 = gql(`
  fragment Fragment2545 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult2545 = ResultOf<typeof FRAGMENT_2545>;
type FragmentSelf2545 = NonNullable<FragmentResult2545>;

export type FragmentToken2545 =
  | FragmentSelf2545["__typename"]
  | FragmentSelf2545["typenameHint"] | FragmentToken2543 | FragmentToken2544;
