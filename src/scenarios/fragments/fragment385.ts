import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken383 } from "./fragment383";
import type { FragmentToken384 } from "./fragment384";

export const FRAGMENT_385 = gql(`
  fragment Fragment385 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult385 = ResultOf<typeof FRAGMENT_385>;
type FragmentSelf385 = NonNullable<FragmentResult385>;

export type FragmentToken385 =
  | FragmentSelf385["__typename"]
  | FragmentSelf385["typenameHint"] | FragmentToken383 | FragmentToken384;
