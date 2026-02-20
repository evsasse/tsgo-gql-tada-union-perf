import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1021 } from "./fragment1021";
import type { FragmentToken1022 } from "./fragment1022";

export const FRAGMENT_1023 = gql(`
  fragment Fragment1023 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult1023 = ResultOf<typeof FRAGMENT_1023>;
type FragmentSelf1023 = NonNullable<FragmentResult1023>;

export type FragmentToken1023 =
  | FragmentSelf1023["__typename"]
  | FragmentSelf1023["typenameHint"] | FragmentToken1021 | FragmentToken1022;
