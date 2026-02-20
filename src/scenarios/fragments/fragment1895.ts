import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1893 } from "./fragment1893";
import type { FragmentToken1894 } from "./fragment1894";

export const FRAGMENT_1895 = gql(`
  fragment Fragment1895 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult1895 = ResultOf<typeof FRAGMENT_1895>;
type FragmentSelf1895 = NonNullable<FragmentResult1895>;

export type FragmentToken1895 =
  | FragmentSelf1895["__typename"]
  | FragmentSelf1895["typenameHint"] | FragmentToken1893 | FragmentToken1894;
