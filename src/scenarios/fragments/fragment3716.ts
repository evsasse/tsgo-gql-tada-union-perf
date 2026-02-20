import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3714 } from "./fragment3714";
import type { FragmentToken3715 } from "./fragment3715";

export const FRAGMENT_3716 = gql(`
  fragment Fragment3716 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult3716 = ResultOf<typeof FRAGMENT_3716>;
type FragmentSelf3716 = NonNullable<FragmentResult3716>;

export type FragmentToken3716 =
  | FragmentSelf3716["__typename"]
  | FragmentSelf3716["typenameHint"] | FragmentToken3714 | FragmentToken3715;
