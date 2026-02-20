import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1391 } from "./fragment1391";
import type { FragmentToken1392 } from "./fragment1392";

export const FRAGMENT_1393 = gql(`
  fragment Fragment1393 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult1393 = ResultOf<typeof FRAGMENT_1393>;
type FragmentSelf1393 = NonNullable<FragmentResult1393>;

export type FragmentToken1393 =
  | FragmentSelf1393["__typename"]
  | FragmentSelf1393["typenameHint"] | FragmentToken1391 | FragmentToken1392;
