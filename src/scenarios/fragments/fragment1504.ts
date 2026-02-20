import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1502 } from "./fragment1502";
import type { FragmentToken1503 } from "./fragment1503";

export const FRAGMENT_1504 = gql(`
  fragment Fragment1504 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult1504 = ResultOf<typeof FRAGMENT_1504>;
type FragmentSelf1504 = NonNullable<FragmentResult1504>;

export type FragmentToken1504 =
  | FragmentSelf1504["__typename"]
  | FragmentSelf1504["typenameHint"] | FragmentToken1502 | FragmentToken1503;
