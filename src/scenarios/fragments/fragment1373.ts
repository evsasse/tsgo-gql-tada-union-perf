import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1371 } from "./fragment1371";
import type { FragmentToken1372 } from "./fragment1372";

export const FRAGMENT_1373 = gql(`
  fragment Fragment1373 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult1373 = ResultOf<typeof FRAGMENT_1373>;
type FragmentSelf1373 = NonNullable<FragmentResult1373>;

export type FragmentToken1373 =
  | FragmentSelf1373["__typename"]
  | FragmentSelf1373["typenameHint"] | FragmentToken1371 | FragmentToken1372;
