import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3959 } from "./fragment3959";
import type { FragmentToken3960 } from "./fragment3960";

export const FRAGMENT_3961 = gql(`
  fragment Fragment3961 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult3961 = ResultOf<typeof FRAGMENT_3961>;
type FragmentSelf3961 = NonNullable<FragmentResult3961>;

export type FragmentToken3961 =
  | FragmentSelf3961["__typename"]
  | FragmentSelf3961["typenameHint"] | FragmentToken3959 | FragmentToken3960;
