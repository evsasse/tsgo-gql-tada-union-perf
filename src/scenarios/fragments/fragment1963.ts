import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1961 } from "./fragment1961";
import type { FragmentToken1962 } from "./fragment1962";

export const FRAGMENT_1963 = gql(`
  fragment Fragment1963 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult1963 = ResultOf<typeof FRAGMENT_1963>;
type FragmentSelf1963 = NonNullable<FragmentResult1963>;

export type FragmentToken1963 =
  | FragmentSelf1963["__typename"]
  | FragmentSelf1963["typenameHint"] | FragmentToken1961 | FragmentToken1962;
