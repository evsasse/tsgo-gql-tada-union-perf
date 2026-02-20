import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3749 } from "./fragment3749";
import type { FragmentToken3750 } from "./fragment3750";

export const FRAGMENT_3751 = gql(`
  fragment Fragment3751 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult3751 = ResultOf<typeof FRAGMENT_3751>;
type FragmentSelf3751 = NonNullable<FragmentResult3751>;

export type FragmentToken3751 =
  | FragmentSelf3751["__typename"]
  | FragmentSelf3751["typenameHint"] | FragmentToken3749 | FragmentToken3750;
