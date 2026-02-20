import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1263 } from "./fragment1263";
import type { FragmentToken1264 } from "./fragment1264";

export const FRAGMENT_1265 = gql(`
  fragment Fragment1265 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult1265 = ResultOf<typeof FRAGMENT_1265>;
type FragmentSelf1265 = NonNullable<FragmentResult1265>;

export type FragmentToken1265 =
  | FragmentSelf1265["__typename"]
  | FragmentSelf1265["typenameHint"] | FragmentToken1263 | FragmentToken1264;
