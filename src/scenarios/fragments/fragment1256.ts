import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1254 } from "./fragment1254";
import type { FragmentToken1255 } from "./fragment1255";

export const FRAGMENT_1256 = gql(`
  fragment Fragment1256 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult1256 = ResultOf<typeof FRAGMENT_1256>;
type FragmentSelf1256 = NonNullable<FragmentResult1256>;

export type FragmentToken1256 =
  | FragmentSelf1256["__typename"]
  | FragmentSelf1256["typenameHint"] | FragmentToken1254 | FragmentToken1255;
