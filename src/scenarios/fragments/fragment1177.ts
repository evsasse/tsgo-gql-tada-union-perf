import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1175 } from "./fragment1175";
import type { FragmentToken1176 } from "./fragment1176";

export const FRAGMENT_1177 = gql(`
  fragment Fragment1177 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult1177 = ResultOf<typeof FRAGMENT_1177>;
type FragmentSelf1177 = NonNullable<FragmentResult1177>;

export type FragmentToken1177 =
  | FragmentSelf1177["__typename"]
  | FragmentSelf1177["typenameHint"] | FragmentToken1175 | FragmentToken1176;
