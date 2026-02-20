import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3989 } from "./fragment3989";
import type { FragmentToken3990 } from "./fragment3990";

export const FRAGMENT_3991 = gql(`
  fragment Fragment3991 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult3991 = ResultOf<typeof FRAGMENT_3991>;
type FragmentSelf3991 = NonNullable<FragmentResult3991>;

export type FragmentToken3991 =
  | FragmentSelf3991["__typename"]
  | FragmentSelf3991["typenameHint"] | FragmentToken3989 | FragmentToken3990;
