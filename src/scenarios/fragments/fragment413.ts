import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken411 } from "./fragment411";
import type { FragmentToken412 } from "./fragment412";

export const FRAGMENT_413 = gql(`
  fragment Fragment413 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult413 = ResultOf<typeof FRAGMENT_413>;
type FragmentSelf413 = NonNullable<FragmentResult413>;

export type FragmentToken413 =
  | FragmentSelf413["__typename"]
  | FragmentSelf413["typenameHint"] | FragmentToken411 | FragmentToken412;
