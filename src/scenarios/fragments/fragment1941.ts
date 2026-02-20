import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1939 } from "./fragment1939";
import type { FragmentToken1940 } from "./fragment1940";

export const FRAGMENT_1941 = gql(`
  fragment Fragment1941 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult1941 = ResultOf<typeof FRAGMENT_1941>;
type FragmentSelf1941 = NonNullable<FragmentResult1941>;

export type FragmentToken1941 =
  | FragmentSelf1941["__typename"]
  | FragmentSelf1941["typenameHint"] | FragmentToken1939 | FragmentToken1940;
