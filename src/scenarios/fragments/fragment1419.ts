import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1417 } from "./fragment1417";
import type { FragmentToken1418 } from "./fragment1418";

export const FRAGMENT_1419 = gql(`
  fragment Fragment1419 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult1419 = ResultOf<typeof FRAGMENT_1419>;
type FragmentSelf1419 = NonNullable<FragmentResult1419>;

export type FragmentToken1419 =
  | FragmentSelf1419["__typename"]
  | FragmentSelf1419["typenameHint"] | FragmentToken1417 | FragmentToken1418;
