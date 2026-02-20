import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1067 } from "./fragment1067";
import type { FragmentToken1068 } from "./fragment1068";

export const FRAGMENT_1069 = gql(`
  fragment Fragment1069 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult1069 = ResultOf<typeof FRAGMENT_1069>;
type FragmentSelf1069 = NonNullable<FragmentResult1069>;

export type FragmentToken1069 =
  | FragmentSelf1069["__typename"]
  | FragmentSelf1069["typenameHint"] | FragmentToken1067 | FragmentToken1068;
