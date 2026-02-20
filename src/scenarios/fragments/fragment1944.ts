import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1942 } from "./fragment1942";
import type { FragmentToken1943 } from "./fragment1943";

export const FRAGMENT_1944 = gql(`
  fragment Fragment1944 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult1944 = ResultOf<typeof FRAGMENT_1944>;
type FragmentSelf1944 = NonNullable<FragmentResult1944>;

export type FragmentToken1944 =
  | FragmentSelf1944["__typename"]
  | FragmentSelf1944["typenameHint"] | FragmentToken1942 | FragmentToken1943;
