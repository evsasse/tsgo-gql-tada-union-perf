import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1182 } from "./fragment1182";
import type { FragmentToken1183 } from "./fragment1183";

export const FRAGMENT_1184 = gql(`
  fragment Fragment1184 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult1184 = ResultOf<typeof FRAGMENT_1184>;
type FragmentSelf1184 = NonNullable<FragmentResult1184>;

export type FragmentToken1184 =
  | FragmentSelf1184["__typename"]
  | FragmentSelf1184["typenameHint"] | FragmentToken1182 | FragmentToken1183;
