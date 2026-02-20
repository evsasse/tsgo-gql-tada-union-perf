import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1257 } from "./fragment1257";
import type { FragmentToken1258 } from "./fragment1258";

export const FRAGMENT_1259 = gql(`
  fragment Fragment1259 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult1259 = ResultOf<typeof FRAGMENT_1259>;
type FragmentSelf1259 = NonNullable<FragmentResult1259>;

export type FragmentToken1259 =
  | FragmentSelf1259["__typename"]
  | FragmentSelf1259["typenameHint"] | FragmentToken1257 | FragmentToken1258;
