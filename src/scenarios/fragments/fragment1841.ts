import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1839 } from "./fragment1839";
import type { FragmentToken1840 } from "./fragment1840";

export const FRAGMENT_1841 = gql(`
  fragment Fragment1841 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult1841 = ResultOf<typeof FRAGMENT_1841>;
type FragmentSelf1841 = NonNullable<FragmentResult1841>;

export type FragmentToken1841 =
  | FragmentSelf1841["__typename"]
  | FragmentSelf1841["typenameHint"] | FragmentToken1839 | FragmentToken1840;
