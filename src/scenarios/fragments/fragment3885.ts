import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3883 } from "./fragment3883";
import type { FragmentToken3884 } from "./fragment3884";

export const FRAGMENT_3885 = gql(`
  fragment Fragment3885 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult3885 = ResultOf<typeof FRAGMENT_3885>;
type FragmentSelf3885 = NonNullable<FragmentResult3885>;

export type FragmentToken3885 =
  | FragmentSelf3885["__typename"]
  | FragmentSelf3885["typenameHint"] | FragmentToken3883 | FragmentToken3884;
