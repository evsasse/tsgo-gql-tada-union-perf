import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3599 } from "./fragment3599";
import type { FragmentToken3600 } from "./fragment3600";

export const FRAGMENT_3601 = gql(`
  fragment Fragment3601 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult3601 = ResultOf<typeof FRAGMENT_3601>;
type FragmentSelf3601 = NonNullable<FragmentResult3601>;

export type FragmentToken3601 =
  | FragmentSelf3601["__typename"]
  | FragmentSelf3601["typenameHint"] | FragmentToken3599 | FragmentToken3600;
