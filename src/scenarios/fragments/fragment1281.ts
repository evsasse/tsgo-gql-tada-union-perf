import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1279 } from "./fragment1279";
import type { FragmentToken1280 } from "./fragment1280";

export const FRAGMENT_1281 = gql(`
  fragment Fragment1281 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult1281 = ResultOf<typeof FRAGMENT_1281>;
type FragmentSelf1281 = NonNullable<FragmentResult1281>;

export type FragmentToken1281 =
  | FragmentSelf1281["__typename"]
  | FragmentSelf1281["typenameHint"] | FragmentToken1279 | FragmentToken1280;
