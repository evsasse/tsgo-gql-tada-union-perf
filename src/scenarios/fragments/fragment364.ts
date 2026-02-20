import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken362 } from "./fragment362";
import type { FragmentToken363 } from "./fragment363";

export const FRAGMENT_364 = gql(`
  fragment Fragment364 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult364 = ResultOf<typeof FRAGMENT_364>;
type FragmentSelf364 = NonNullable<FragmentResult364>;

export type FragmentToken364 =
  | FragmentSelf364["__typename"]
  | FragmentSelf364["typenameHint"] | FragmentToken362 | FragmentToken363;
