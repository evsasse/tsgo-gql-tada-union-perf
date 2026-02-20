import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3522 } from "./fragment3522";
import type { FragmentToken3523 } from "./fragment3523";

export const FRAGMENT_3524 = gql(`
  fragment Fragment3524 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult3524 = ResultOf<typeof FRAGMENT_3524>;
type FragmentSelf3524 = NonNullable<FragmentResult3524>;

export type FragmentToken3524 =
  | FragmentSelf3524["__typename"]
  | FragmentSelf3524["typenameHint"] | FragmentToken3522 | FragmentToken3523;
