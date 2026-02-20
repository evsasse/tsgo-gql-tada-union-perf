import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3477 } from "./fragment3477";
import type { FragmentToken3478 } from "./fragment3478";

export const FRAGMENT_3479 = gql(`
  fragment Fragment3479 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult3479 = ResultOf<typeof FRAGMENT_3479>;
type FragmentSelf3479 = NonNullable<FragmentResult3479>;

export type FragmentToken3479 =
  | FragmentSelf3479["__typename"]
  | FragmentSelf3479["typenameHint"] | FragmentToken3477 | FragmentToken3478;
