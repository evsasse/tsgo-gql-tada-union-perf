import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1283 } from "./fragment1283";
import type { FragmentToken1284 } from "./fragment1284";

export const FRAGMENT_1285 = gql(`
  fragment Fragment1285 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult1285 = ResultOf<typeof FRAGMENT_1285>;
type FragmentSelf1285 = NonNullable<FragmentResult1285>;

export type FragmentToken1285 =
  | FragmentSelf1285["__typename"]
  | FragmentSelf1285["typenameHint"] | FragmentToken1283 | FragmentToken1284;
