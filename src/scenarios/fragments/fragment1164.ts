import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1162 } from "./fragment1162";
import type { FragmentToken1163 } from "./fragment1163";

export const FRAGMENT_1164 = gql(`
  fragment Fragment1164 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult1164 = ResultOf<typeof FRAGMENT_1164>;
type FragmentSelf1164 = NonNullable<FragmentResult1164>;

export type FragmentToken1164 =
  | FragmentSelf1164["__typename"]
  | FragmentSelf1164["typenameHint"] | FragmentToken1162 | FragmentToken1163;
