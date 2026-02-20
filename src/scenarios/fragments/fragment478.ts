import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken476 } from "./fragment476";
import type { FragmentToken477 } from "./fragment477";

export const FRAGMENT_478 = gql(`
  fragment Fragment478 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult478 = ResultOf<typeof FRAGMENT_478>;
type FragmentSelf478 = NonNullable<FragmentResult478>;

export type FragmentToken478 =
  | FragmentSelf478["__typename"]
  | FragmentSelf478["typenameHint"] | FragmentToken476 | FragmentToken477;
