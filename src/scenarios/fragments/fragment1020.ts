import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1018 } from "./fragment1018";
import type { FragmentToken1019 } from "./fragment1019";

export const FRAGMENT_1020 = gql(`
  fragment Fragment1020 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult1020 = ResultOf<typeof FRAGMENT_1020>;
type FragmentSelf1020 = NonNullable<FragmentResult1020>;

export type FragmentToken1020 =
  | FragmentSelf1020["__typename"]
  | FragmentSelf1020["typenameHint"] | FragmentToken1018 | FragmentToken1019;
