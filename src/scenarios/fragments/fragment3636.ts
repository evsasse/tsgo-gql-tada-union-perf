import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3634 } from "./fragment3634";
import type { FragmentToken3635 } from "./fragment3635";

export const FRAGMENT_3636 = gql(`
  fragment Fragment3636 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult3636 = ResultOf<typeof FRAGMENT_3636>;
type FragmentSelf3636 = NonNullable<FragmentResult3636>;

export type FragmentToken3636 =
  | FragmentSelf3636["__typename"]
  | FragmentSelf3636["typenameHint"] | FragmentToken3634 | FragmentToken3635;
