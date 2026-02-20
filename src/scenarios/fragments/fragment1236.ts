import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1234 } from "./fragment1234";
import type { FragmentToken1235 } from "./fragment1235";

export const FRAGMENT_1236 = gql(`
  fragment Fragment1236 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult1236 = ResultOf<typeof FRAGMENT_1236>;
type FragmentSelf1236 = NonNullable<FragmentResult1236>;

export type FragmentToken1236 =
  | FragmentSelf1236["__typename"]
  | FragmentSelf1236["typenameHint"] | FragmentToken1234 | FragmentToken1235;
