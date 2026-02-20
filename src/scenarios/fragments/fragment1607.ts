import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1605 } from "./fragment1605";
import type { FragmentToken1606 } from "./fragment1606";

export const FRAGMENT_1607 = gql(`
  fragment Fragment1607 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult1607 = ResultOf<typeof FRAGMENT_1607>;
type FragmentSelf1607 = NonNullable<FragmentResult1607>;

export type FragmentToken1607 =
  | FragmentSelf1607["__typename"]
  | FragmentSelf1607["typenameHint"] | FragmentToken1605 | FragmentToken1606;
