import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3475 } from "./fragment3475";
import type { FragmentToken3476 } from "./fragment3476";

export const FRAGMENT_3477 = gql(`
  fragment Fragment3477 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult3477 = ResultOf<typeof FRAGMENT_3477>;
type FragmentSelf3477 = NonNullable<FragmentResult3477>;

export type FragmentToken3477 =
  | FragmentSelf3477["__typename"]
  | FragmentSelf3477["typenameHint"] | FragmentToken3475 | FragmentToken3476;
