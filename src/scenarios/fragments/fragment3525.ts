import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3523 } from "./fragment3523";
import type { FragmentToken3524 } from "./fragment3524";

export const FRAGMENT_3525 = gql(`
  fragment Fragment3525 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult3525 = ResultOf<typeof FRAGMENT_3525>;
type FragmentSelf3525 = NonNullable<FragmentResult3525>;

export type FragmentToken3525 =
  | FragmentSelf3525["__typename"]
  | FragmentSelf3525["typenameHint"] | FragmentToken3523 | FragmentToken3524;
