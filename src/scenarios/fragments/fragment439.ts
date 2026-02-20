import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken437 } from "./fragment437";
import type { FragmentToken438 } from "./fragment438";

export const FRAGMENT_439 = gql(`
  fragment Fragment439 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult439 = ResultOf<typeof FRAGMENT_439>;
type FragmentSelf439 = NonNullable<FragmentResult439>;

export type FragmentToken439 =
  | FragmentSelf439["__typename"]
  | FragmentSelf439["typenameHint"] | FragmentToken437 | FragmentToken438;
