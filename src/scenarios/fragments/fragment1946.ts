import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1944 } from "./fragment1944";
import type { FragmentToken1945 } from "./fragment1945";

export const FRAGMENT_1946 = gql(`
  fragment Fragment1946 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult1946 = ResultOf<typeof FRAGMENT_1946>;
type FragmentSelf1946 = NonNullable<FragmentResult1946>;

export type FragmentToken1946 =
  | FragmentSelf1946["__typename"]
  | FragmentSelf1946["typenameHint"] | FragmentToken1944 | FragmentToken1945;
