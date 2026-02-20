import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3639 } from "./fragment3639";
import type { FragmentToken3640 } from "./fragment3640";

export const FRAGMENT_3641 = gql(`
  fragment Fragment3641 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult3641 = ResultOf<typeof FRAGMENT_3641>;
type FragmentSelf3641 = NonNullable<FragmentResult3641>;

export type FragmentToken3641 =
  | FragmentSelf3641["__typename"]
  | FragmentSelf3641["typenameHint"] | FragmentToken3639 | FragmentToken3640;
