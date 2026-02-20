import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1418 } from "./fragment1418";
import type { FragmentToken1419 } from "./fragment1419";

export const FRAGMENT_1420 = gql(`
  fragment Fragment1420 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult1420 = ResultOf<typeof FRAGMENT_1420>;
type FragmentSelf1420 = NonNullable<FragmentResult1420>;

export type FragmentToken1420 =
  | FragmentSelf1420["__typename"]
  | FragmentSelf1420["typenameHint"] | FragmentToken1418 | FragmentToken1419;
