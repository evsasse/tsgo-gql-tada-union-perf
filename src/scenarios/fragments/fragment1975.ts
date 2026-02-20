import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1973 } from "./fragment1973";
import type { FragmentToken1974 } from "./fragment1974";

export const FRAGMENT_1975 = gql(`
  fragment Fragment1975 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult1975 = ResultOf<typeof FRAGMENT_1975>;
type FragmentSelf1975 = NonNullable<FragmentResult1975>;

export type FragmentToken1975 =
  | FragmentSelf1975["__typename"]
  | FragmentSelf1975["typenameHint"] | FragmentToken1973 | FragmentToken1974;
