import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken072 } from "./fragment072";
import type { FragmentToken073 } from "./fragment073";

export const FRAGMENT_074 = gql(`
  fragment Fragment074 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult074 = ResultOf<typeof FRAGMENT_074>;
type FragmentSelf074 = NonNullable<FragmentResult074>;

export type FragmentToken074 =
  | FragmentSelf074["__typename"]
  | FragmentSelf074["typenameHint"] | FragmentToken072 | FragmentToken073;
