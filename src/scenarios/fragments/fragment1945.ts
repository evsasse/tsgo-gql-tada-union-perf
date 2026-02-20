import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1943 } from "./fragment1943";
import type { FragmentToken1944 } from "./fragment1944";

export const FRAGMENT_1945 = gql(`
  fragment Fragment1945 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult1945 = ResultOf<typeof FRAGMENT_1945>;
type FragmentSelf1945 = NonNullable<FragmentResult1945>;

export type FragmentToken1945 =
  | FragmentSelf1945["__typename"]
  | FragmentSelf1945["typenameHint"] | FragmentToken1943 | FragmentToken1944;
