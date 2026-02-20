import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1179 } from "./fragment1179";
import type { FragmentToken1180 } from "./fragment1180";

export const FRAGMENT_1181 = gql(`
  fragment Fragment1181 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult1181 = ResultOf<typeof FRAGMENT_1181>;
type FragmentSelf1181 = NonNullable<FragmentResult1181>;

export type FragmentToken1181 =
  | FragmentSelf1181["__typename"]
  | FragmentSelf1181["typenameHint"] | FragmentToken1179 | FragmentToken1180;
