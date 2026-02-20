import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1020 } from "./fragment1020";
import type { FragmentToken1021 } from "./fragment1021";

export const FRAGMENT_1022 = gql(`
  fragment Fragment1022 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult1022 = ResultOf<typeof FRAGMENT_1022>;
type FragmentSelf1022 = NonNullable<FragmentResult1022>;

export type FragmentToken1022 =
  | FragmentSelf1022["__typename"]
  | FragmentSelf1022["typenameHint"] | FragmentToken1020 | FragmentToken1021;
