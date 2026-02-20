import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1300 } from "./fragment1300";
import type { FragmentToken1301 } from "./fragment1301";

export const FRAGMENT_1302 = gql(`
  fragment Fragment1302 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult1302 = ResultOf<typeof FRAGMENT_1302>;
type FragmentSelf1302 = NonNullable<FragmentResult1302>;

export type FragmentToken1302 =
  | FragmentSelf1302["__typename"]
  | FragmentSelf1302["typenameHint"] | FragmentToken1300 | FragmentToken1301;
