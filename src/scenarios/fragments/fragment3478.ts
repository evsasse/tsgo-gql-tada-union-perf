import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3476 } from "./fragment3476";
import type { FragmentToken3477 } from "./fragment3477";

export const FRAGMENT_3478 = gql(`
  fragment Fragment3478 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult3478 = ResultOf<typeof FRAGMENT_3478>;
type FragmentSelf3478 = NonNullable<FragmentResult3478>;

export type FragmentToken3478 =
  | FragmentSelf3478["__typename"]
  | FragmentSelf3478["typenameHint"] | FragmentToken3476 | FragmentToken3477;
